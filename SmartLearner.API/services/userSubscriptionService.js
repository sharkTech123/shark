const UserSubscription = require("../models/subscriptionModal");
const User = require("../models/userModel");
const Plans = require("../models/planUserModel");
const { getAccessToken, PAYPAL_API_BASE } = require("../config/paypal");
const axios = require("axios");
const moment = require("moment");

const nodemailer = require("nodemailer");
const DiscountCoupon = require("../models/discountCoupon");

const baseUrl = process.env.REVOLUT_API_URL;
const secretKey = process.env.REVOLUT_API_SECRET_KEY;

class UserSubscriptionService {
  async createUserSubscription(
    userId,
    subscriptionId,
    method,
    status,
    isTrial = false
  ) {
    const plan = await Plans.findById(subscriptionId);
    const currentDate = new Date();

    // Check if user is trying to use a trial
    if (isTrial) {
      const existingTrial = await UserSubscription.findOne({
        userId,
        isTrial: true,
      });

      if (existingTrial) {
        throw new Error("Free Trial Used");
      }
    }

    // Try to find an active subscription
    const existingSubscription = await UserSubscription.findOne({
      userId,
      isActive: true,
      isTrial: false, // Make sure it's not a trial subscription
    });

    let planEndDate;

    if (existingSubscription) {
      // If user already has an active subscription, extend the current subscription
      const existingEndDate = existingSubscription.planEndDate;
      planEndDate = new Date(
        existingEndDate.getTime() + plan.duration * 24 * 60 * 60 * 1000
      ); // Extend the end date

      // Update the subscription with the new plan end date
      existingSubscription.paymentMethod = method;
      existingSubscription.paymentStatus = status; // ✅ Correct
      existingSubscription.planEndDate = planEndDate;
      existingSubscription.subscriptionId = subscriptionId; // Update to new plan if needed
      existingSubscription.planStartDate = currentDate; // Update the start date

      // Save the updated subscription
      await existingSubscription.save();
      return existingSubscription;
    } else {
      // If no existing subscription, create a new one
      planEndDate = new Date(
        currentDate.getTime() + plan.duration * 24 * 60 * 60 * 1000
      );

      const userSubscription = new UserSubscription({
        userId,
        subscriptionId,
        paymentMethod: method,
        paymentStatus: status,
        isActive: true,
        planStartDate: currentDate,
        planEndDate: planEndDate,
        isTrial: isTrial,
        trialStartDate: isTrial ? currentDate : null,
        trialEndDate: isTrial
          ? new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000) // Assuming trial duration is 7 days
          : null,
      });

      await userSubscription.save();
      await User.findByIdAndUpdate(userId, { subscription: subscriptionId });
      return userSubscription;
    }
  }

  async createPayment(subscriptionId, price) {
    console.log("testtttttttt", price);
    const plan = await Plans.findById(subscriptionId);
    if (!plan) {
      throw new Error("Plan not found");
    }

    const accessToken = await getAccessToken();

    const paymentData = {
      intent: "CAPTURE",
      payer: { payment_method: "paypal" },
      purchase_units: [
        {
          amount: {
            currency_code: "GBP",
            value: parseFloat(price).toFixed(2),
          },
          description: "Order payment",
          item_list: {
            plan: plan._id,
            name: plan.planname,
            price: parseFloat(plan.price).toFixed(2),
          },
        },
      ],
      redirect_urls: {
        return_url: "http://api.smartlearner.com/api/order/executePayment",
        cancel_url: "http://api.smartlearner.com/api/order/cancel",
      },
    };

    try {
      const response = await axios.post(
        `${PAYPAL_API_BASE}/v2/checkout/orders`,
        paymentData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.data.id) {
        throw new Error("Failed to create PayPal order");
      }

      return response.data;
    } catch (error) {
      console.error("PayPal payment error:", error.response?.data);
      throw new Error("Error while creating payment with PayPal");
    }
  }

  async confirmPayment(orderId, userId, subscriptionId) {
    const accessToken = await getAccessToken();

    const captureData = {
      payer_id: orderId,
    };

    const response = await axios.post(
      `${PAYPAL_API_BASE}/v2/checkout/orders/${orderId}/capture`,
      captureData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data.status === "COMPLETED") {
      const userSubscription = await this.createUserSubscription(
        userId,
        subscriptionId,
        (isTrial = false)
      );

      const subs = await UserSubscription.findOne({
        userId,
      });

      subs.paymentStatus = "completed";
      subs.paymentMethod = "PayPal";
      await subs.save();

      await this.sendSubscriptionEmail(
        userId,
        subscriptionId,
        "success",
        "PayPal"
      );

      return console.log("sds", response);
    } else if (response.data.status === "PENDING") {
      // just send pending email, don't activate subscription yet
      await this.sendSubscriptionEmail(
        userId,
        subscriptionId,
        "pending",
        "PayPal"
      );
      return { paymentStatus: "PENDING" };
    } else {
      throw new Error("Payment was not completed");
    }
  }

  ///////////////////////////////////////////////////////

  async createPaypalProduct() {
    const accessToken = await getAccessToken();

    console.log("Access Token", accessToken);
    const response = await axios.post(
      `${PAYPAL_API_BASE}/v1/catalogs/products`,
      {
        name: "SmartLearner Business Mentoring Subscription",
        description: "Recurring monthly subscription",
        type: "SERVICE",
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  }

  async createPaypalPlan(product_id, price) {
    const accessToken = await getAccessToken();

    const payload = {
      product_id,
      name: "SmartLearner Business Mentoring Subscription",
      billing_cycles: [
        {
          frequency: { interval_unit: "MONTH", interval_count: 1 },
          tenure_type: "REGULAR",
          sequence: 1,
          total_cycles: 0,
          pricing_scheme: {
            fixed_price: { value: price, currency_code: "GBP" },
          },
        },
      ],
      payment_preferences: {
        auto_bill_outstanding: true,
        setup_fee_failure_action: "CONTINUE",
        payment_failure_threshold: 3,
      },
    };

    try {
      const response = await axios.post(
        `${PAYPAL_API_BASE}/v1/billing/plans`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error(
        "PayPal Plan Error:",
        JSON.stringify(error.response?.data, null, 2)
      );
      throw error;
    }
  }

  async createPaypalSubscription(
    userId,
    subscriptionId,
    paypalSubscriptionId,
    method
  ) {
    const accessToken = await getAccessToken();

    const response = await axios.get(
      `${PAYPAL_API_BASE}/v1/billing/subscriptions/${paypalSubscriptionId}`,

      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (response.data.status !== "ACTIVE") {
      throw new Error("PayPal subscription not active");
    }
    const status = response.data.status;
    console.log("res", response.data);

    if (status === "ACTIVE") {
      const userSubscription = await this.createUserSubscription(
        userId,
        subscriptionId,
        false
      );
      console.log("active");
      const subs = await UserSubscription.findOne({ userId });

      subs.paymentStatus = "completed";
      subs.paymentMethod = method;
      subs.paypalSubscriptionId = paypalSubscriptionId;
      subs.nextBillingDate = response.data.billing_info?.next_billing_time;

      await subs.save();

      // 📧 SUCCESS EMAIL
      await this.sendSubscriptionEmail(
        userId,
        subscriptionId,
        "success",
        "PayPal"
      );

      return {
        paymentStatus: "ACTIVE",
        paypalStatus: status,
      };
    }
    if (status === "SUSPENDED") {
      await this.sendSubscriptionEmail(
        userId,
        subscriptionId,
        "failed",
        "PayPal"
      );

      return {
        paymentStatus: "failed",
        paypalStatus: status,
      };
    } else {
      throw new Error(`Subscription status: ${status}`);
    }
  }

  // ////////////////////////////////////////////////////////////

  async createRevoultOrder(amount, currency, subscriptionId, userId) {
    const plan = await Plans.findById(subscriptionId);

    console.log("2312312asas", amount, currency, subscriptionId, userId);
    if (!plan) {
      throw new Error("Plan not found");
    }

    const response = await fetch(`${baseUrl}/api/1.0/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${secretKey}`,
      },
      body: JSON.stringify({
        amount: Math.round(parseFloat(amount)), // convert to minor units
        currency: currency || "GBP",
        capture_mode: "AUTOMATIC",
        description: `Order #${plan.planname}`,
        userId: userId, // assuming Order has email field
        merchant_order_ext_ref: userId,
        success_url: `https://smartlearner.com/paymentSuccess?revolut_token=${subscriptionId}`,
        cancel_url: `https://smartlearner.com/paymentProcessing?revolut_token=${subscriptionId}`,
      }),
    });

    const data = await response.json();
    console.log("asdsa", data);
    if (!response.ok) {
      console.error("Revolut API error:", data);
      throw new Error(data.message || "Failed to create Revolut order");
    }

    return data;
  }

  //////////////////////////////////////////////////////////////////

  async getUserSubscriptions(userId) {
    const subscriptions = await UserSubscription.find({ userId }).populate(
      "subscriptionId"
    );

    return subscriptions;
  }

  async deleteUserSubscription(userId, subscriptionId) {
    return await UserSubscription.findOneAndDelete({ userId, subscriptionId });
  }

  async getAllUserSubscriptions() {
    return await UserSubscription.find().populate("userId subscriptionId");
  }

  async checkTrialStatus(userId) {
    const userSubscriptions = await this.getUserSubscriptions(userId);
    const currentDate = new Date();

    return userSubscriptions.filter((subscription) => {
      const plan = subscription.subscriptionId;
      return plan.isTrial && plan.trialEndDate > currentDate;
    });
  }

  // //////////////////////////////coupon code ///////////////////////////
  async applyCouponCode(userId, planId, couponCode) {
    const validCoupon = "FREETHEORY"; // The valid coupon code

    if (couponCode === validCoupon) {
      // Check if the user already has a subscription with the coupon applied
      const existingSubscription = await UserSubscription.findOne({
        userId,
        theoryCouponApplied: true,
      });

      if (existingSubscription) {
        throw new Error("coupon used already");
      }

      // Get the two specific plans by plan name or other unique criteria
      const plans = await Plans.find({
        planname: {
          $in: ["Lifetime Theory Portal Access £4.99"],
        },
      });

      // If no matching plans are found, throw an error
      if (plans.length === 0) {
        throw new Error("No eligible plans available.");
      }

      const currentDate = new Date();

      // Loop through the filtered plans and create a subscription for each one
      const subscriptions = [];
      for (const plan of plans) {
        const planEndDate = new Date(
          currentDate.getTime() + plan.duration * 24 * 60 * 60 * 1000
        ); // duration in days

        const subscription = new UserSubscription({
          userId,
          subscriptionId: plan._id,
          isActive: true,
          planStartDate: currentDate,
          planEndDate: planEndDate,
          isTrial: false,
          trialStartDate: null,
          trialEndDate: null,
          paymentStatus: "COMPLETED", // No payment required, because it's free
          theoryCouponApplied: true,
          pdiCouponApplied: null, // Mark the coupon as applied
        });

        subscriptions.push(subscription.save());
      }

      // Wait for all subscriptions to be saved
      await Promise.all(subscriptions);
      await User.findByIdAndUpdate(userId, {
        subscription: subscriptions[0].subscriptionId,
      }); // Update user with first subscription

      return { message: "FreetTheory Coupon applied successfully" };
    } else if (couponCode === "GET80OFF") {
      const plan = await Plans.findById(planId);

      const discountedPrice = plan.price * 0.2; // Apply 50% off

      const resultObject = {
        message: "80% discount applied",
        statusCode: 200,
        success: true,
        data: discountedPrice,
      };
      return resultObject;
    } else {
      throw new Error("Invalid coupon code");
    }
  }

  // //////////////////////////////////////////////////////////////
  async pdiCouponCode(userId, couponCode) {
    const validCoupon = "FREEINSTRUCTOR"; // The valid coupon code

    if (couponCode === validCoupon) {
      // Check if the user already has a subscription with the coupon applied
      const existingSubscription = await UserSubscription.findOne({
        userId,
        pdiCouponApplied: true,
      });

      if (existingSubscription) {
        throw new Error("coupon used already");
      }

      // Get the two specific plans by plan name or other unique criteria
      const plans = await Plans.find({
        planname: { $in: ["PDI Complete Package"] },
      });

      // If no matching plans are found, throw an error
      if (plans.length === 0) {
        throw new Error("No eligible plans available.");
      }

      const currentDate = new Date();

      // Loop through the filtered plans and create a subscription for each one
      const subscriptions = [];
      for (const plan of plans) {
        const planEndDate = new Date(
          currentDate.getTime() + plan.duration * 24 * 60 * 60 * 1000
        ); // duration in days

        const subscription = new UserSubscription({
          userId,
          subscriptionId: plan._id,
          isActive: true,
          planStartDate: currentDate,
          planEndDate: planEndDate,
          isTrial: false,
          trialStartDate: null,
          trialEndDate: null,
          paymentStatus: "COMPLETED",
          theoryCouponApplied: null, // No payment required, because it's free
          pdiCouponApplied: true,
        });

        subscriptions.push(subscription.save());
      }

      // Wait for all subscriptions to be saved
      await Promise.all(subscriptions);
      await User.findByIdAndUpdate(userId, {
        subscription: subscriptions[0].subscriptionId,
      }); // Update user with first subscription

      return { message: "Pdi Coupon applied successfully" };
    } else {
      throw new Error("Invalid coupon code");
    }
  }

  async pdiPartOneCouponCode(userId, planId, couponCode) {
    const validCoupon = "FREEINSTRUCTORPARTONE"; // The valid coupon code

    if (couponCode === validCoupon) {
      // Check if the user already has a subscription with the coupon applied
      const existingSubscription = await UserSubscription.findOne({
        userId,
        pdiCouponApplied: true,
      });

      if (existingSubscription) {
        throw new Error("coupon used already");
      }

      // Get the two specific plans by plan name or other unique criteria
      const plans = await Plans.find({
        planname: { $in: ["PDI Part One"] },
      });

      // If no matching plans are found, throw an error
      if (plans.length === 0) {
        throw new Error("No eligible plans available.");
      }

      const currentDate = new Date();

      // Loop through the filtered plans and create a subscription for each one
      const subscriptions = [];
      for (const plan of plans) {
        const planEndDate = new Date(
          currentDate.getTime() + plan.duration * 24 * 60 * 60 * 1000
        ); // duration in days

        const subscription = new UserSubscription({
          userId,
          subscriptionId: plan._id,
          isActive: true,
          planStartDate: currentDate,
          planEndDate: planEndDate,
          isTrial: false,
          trialStartDate: null,
          trialEndDate: null,
          paymentStatus: "COMPLETED",
          theoryCouponApplied: null, // No payment required, because it's free
          pdiCouponApplied: null,
          pdiPartOneCouponApplied: true,
          pdiPartTwoCouponApplied: null,
          pdiPartThreeCouponApplied: null,
        });

        subscriptions.push(subscription.save());
      }

      // Wait for all subscriptions to be saved
      await Promise.all(subscriptions);
      await User.findByIdAndUpdate(userId, {
        subscription: subscriptions[0].subscriptionId,
      }); // Update user with first subscription

      return { message: "Pdi PartOne Coupon applied" };
    } else if (couponCode === "GET50OFF") {
      const plan = await Plans.findById(planId);

      const discountedPrice = plan.price * 0.5; // Apply 50% off

      const resultObject = {
        message: "50% discount applied",
        statusCode: 200,
        success: true,
        data: discountedPrice,
      };
      return resultObject;
    } else {
      throw new Error("Invalid coupon code");
    }
  }

  // //////////////////////////////////////////////////////

  async pdiPartTwoCouponCode(userId, couponCode) {
    const validCoupon = "FREEINSTRUCTORPARTTWO"; // The valid coupon code

    if (couponCode === validCoupon) {
      // Check if the user already has a subscription with the coupon applied
      const existingSubscription = await UserSubscription.findOne({
        userId,
        pdiCouponApplied: true,
      });

      if (existingSubscription) {
        throw new Error("coupon used already");
      }

      // Get the two specific plans by plan name or other unique criteria
      const plans = await Plans.find({
        planname: { $in: ["PDI Part Two"] },
      });

      // If no matching plans are found, throw an error
      if (plans.length === 0) {
        throw new Error("No eligible plans available.");
      }

      const currentDate = new Date();

      // Loop through the filtered plans and create a subscription for each one
      const subscriptions = [];
      for (const plan of plans) {
        const planEndDate = new Date(
          currentDate.getTime() + plan.duration * 24 * 60 * 60 * 1000
        ); // duration in days

        const subscription = new UserSubscription({
          userId,
          subscriptionId: plan._id,
          isActive: true,
          planStartDate: currentDate,
          planEndDate: planEndDate,
          isTrial: false,
          trialStartDate: null,
          trialEndDate: null,
          paymentStatus: "COMPLETED",
          theoryCouponApplied: null, // No payment required, because it's free
          pdiCouponApplied: null,
          pdiPartOneCouponApplied: null,
          pdiPartTwoCouponApplied: true,
          pdiPartThreeCouponApplied: null,
        });

        subscriptions.push(subscription.save());
      }

      // Wait for all subscriptions to be saved
      await Promise.all(subscriptions);
      await User.findByIdAndUpdate(userId, {
        subscription: subscriptions[0].subscriptionId,
      }); // Update user with first subscription

      return { message: "Pdi PartTwo Coupon applied" };
    } else {
      throw new Error("Invalid coupon code");
    }
  }
  async pdiPartThreeCouponCode(userId, couponCode) {
    const validCoupon = "FREEINSTRUCTORPARTTHREE"; // The valid coupon code

    if (couponCode === validCoupon) {
      // Check if the user already has a subscription with the coupon applied
      const existingSubscription = await UserSubscription.findOne({
        userId,
        pdiCouponApplied: true,
      });

      if (existingSubscription) {
        throw new Error("coupon used already");
      }

      // Get the two specific plans by plan name or other unique criteria
      const plans = await Plans.find({
        planname: { $in: ["PDI Part Three"] },
      });

      // If no matching plans are found, throw an error
      if (plans.length === 0) {
        throw new Error("No eligible plans available.");
      }

      const currentDate = new Date();

      // Loop through the filtered plans and create a subscription for each one
      const subscriptions = [];
      for (const plan of plans) {
        const planEndDate = new Date(
          currentDate.getTime() + plan.duration * 24 * 60 * 60 * 1000
        ); // duration in days

        const subscription = new UserSubscription({
          userId,
          subscriptionId: plan._id,
          isActive: true,
          planStartDate: currentDate,
          planEndDate: planEndDate,
          isTrial: false,
          trialStartDate: null,
          trialEndDate: null,
          paymentStatus: "COMPLETED",
          theoryCouponApplied: null, // No payment required, because it's free
          pdiCouponApplied: null,
          pdiPartOneCouponApplied: null,
          pdiPartTwoCouponApplied: null,
          pdiPartThreeCouponApplied: true,
        });

        subscriptions.push(subscription.save());
      }

      // Wait for all subscriptions to be saved
      await Promise.all(subscriptions);
      await User.findByIdAndUpdate(userId, {
        subscription: subscriptions[0].subscriptionId,
      }); // Update user with first subscription

      return { message: "Pdi PartThree Coupon applied" };
    } else {
      throw new Error("Invalid coupon code");
    }
  }

  /////////////////////////////////////////////////////////////////////
  async deactivateExpiredSubscriptions() {
    const currentDate = new Date();
    const expiredSubscriptions = await UserSubscription.find({
      couponApplied: true,
      couponEndDate: { $lt: currentDate }, // Expired coupon
      isActive: true,
    });

    if (expiredSubscriptions.length === 0) {
      console.log("No expired subscriptions found.");
      return;
    }

    for (const subscription of expiredSubscriptions) {
      // Deactivate subscription
      subscription.isActive = false;
      subscription.paymentStatus = "EXPIRED";
      await subscription.save();

      // Optionally remove from user's subscription list
      await User.findByIdAndUpdate(subscription.userId, {
        $pull: { subscription: subscription._id },
      });

      console.log(
        `Subscription for user ${subscription.userId} has expired and been removed.`
      );
    }
  }

  // ==================================================================
  // ====////////////////////////////////////////////////////////
  async sendSubscriptionEmail(userId, subscriptionId, status, method) {
    const user = await User.findById(userId);
    const subscription = await Plans.findById(subscriptionId);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "Smartlearnerdrivingschool@gmail.com", // Your email
        pass: "ghzf dspi ndeg ryqw",
      },
    });

    const htmlContent = ` 
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; color: #333; margin: 0; padding: 0; background-color: #f9f9f9; }

 /* Light Mode */
            @media (prefers-color-scheme: light) {
              body {
                background-color: #f9f9f9;
                color: #333;
              }
              .header img {
                content: url('https:/smartlearner.com/static/media/smartlearnerLogo-removebg-preview.447bcd88c37d91ddc949.png');
              }
            }

            /* Dark Mode */
            @media (prefers-color-scheme: dark) {
              body {
                background-color: #333;
                color: #f9f9f9;
              }
              .header img {
                content: url('https://smartlearner.com/static/media/White-Logo-Fixed-1024x174.36cf39f0d189481b24c1.png');
              }
            }



            .container { width: 100%; max-width: 600px; margin: 20px auto; padding: 20px; background-color: #ffffff; border: 1px solid #ddd; border-radius: 5px; }
            .header { text-align: center; margin-bottom: 20px; }
            .header img { width: 150px; background-color: black;}
            .body { padding: 20px; }
            .body h2 { color: #444; margin-bottom: 20px; }
            .body p { margin: 10px 0; }
            table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
            th, td { padding: 10px; text-align: left; border: 1px solid #ddd; }
            th { background-color: #f2f2f2; }
            .footer { margin-top: 20px; text-align: center; font-size: 12px; color: #777; }
            .footer a { color: #0073e6; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="https://smartlearner.com/static/media/White-Logo-Fixed-1024x174.36cf39f0d189481b24c1.png" alt="Company Logo" />
            </div>
            <div class="body">
              <h2>Method ${method}, Package ${status} - Plan: ${
      subscription.planname
    }</h2>
              <p><strong>Dear ${user.username},</strong></p>
              <p>Your payment for Order #${
                subscription.planname
              } has been ${status}.</p>
  
              <h3>Order Details:</h3>
              <table>
                <tr>
                  <th>Name</th>
                  <td>${user.username}</td>
                </tr>
               
                <tr>
                  <th>Email</th>
                  <td>${user.email}</td>
                </tr>
               
               
                </table>
  
              <h3>Package Details:</h3>
              <table>
                <tr>
                  <th>Plan Name</th>
                    <td>${subscription.planname}</td>
                   </tr>

                   <tr>
                   <th>Plan Price</th>
                    <td>£ ${subscription.price.toFixed(2)}</td>
                   </tr>

                    <tr>
                   
                
               
              
              </table>
  
              <p>Thank you for choosing Smart Learner Driving School! We look forward to serving you again soon.</p>
            </div>
            <div class="footer">
              <p>If you have any questions, feel free to <a href="mailto:admin@smartlearner.com">contact us</a>.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const mailOptions = {
      from: "admin@smartlearner.com",
      to: [user.email, "admin@smartlearner.com"],
      subject: `Package ${status} - Plan: ${subscription.planname}`,
      html: htmlContent,
    };

    try {
      await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error("Error sending email:", error);
      throw new Error("Email sending failed");
    }
  }
}

module.exports = new UserSubscriptionService();
