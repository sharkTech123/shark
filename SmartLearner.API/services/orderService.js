const { ObjectId } = require("mongodb");
const Order = require("../models/orderModel");
const Paypalorder = require("../models/paypalOrderModel");
const axios = require("axios");
const { getAccessToken, PAYPAL_API_BASE } = require("../config/paypal");
const productEmailService = require("./productEmailService");

const nodemailer = require("nodemailer");

const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const baseUrl = process.env.REVOLUT_API_URL;
const secretKey = process.env.REVOLUT_API_SECRET_KEY;

class OrderService {
  async createOrderAsync(data) {
    try {
      let aggr = [
        {
          $sort: {
            _id: -1,
          },
        },
        {
          $limit: 1,
        },
      ];

      const totalOrder = await Order.aggregate(aggr);
      let orderId = "";

      if (totalOrder.length == 0) {
        orderId = "Order-000001";
      } else {
        let ono = +totalOrder[0]["orderNo"].replace("Order-", "") + 1;

        orderId = `Order-${ono.toString().padStart(6, "0")}`;

        // const numberString = (1).toString().padStart(loop, '0')

        // orderId=`Order-${(1).toString().padStart(loop, '0')}`
      }

      data["orderNo"] = orderId;

      const order = await Order.create(data);
      const totalCount = await Order.countDocuments();

      let valU = {
        ekashu_seller_id: process.env.SELLER_ID || "25071147",
        ekashu_seller_key: process.env.SELLER_KEY || "43443672",
        ekashu_failure_url: `https://api.smartlearner.com/api/order/paymentFailed`,
        ekashu_success_url: `https://api.smartlearner.com/api/order/paymentSuccess`,
        ekashu_return_url: `https://smartlearner.com/checkout`,
        ekashu_reference: orderId,
      };

      order._doc = {
        ...order._doc,
        ...valU,
      };
      const resultObject = {
        message: "Order Created successfully",
        statusCode: 201,
        success: true,
        data: { order, totalCount },
      };
      return resultObject;
    } catch (err) {
      console.error("Order Creation Error: ", err);
      throw new Error("Could not create Order");
    }
  }

  async getAllOrderAsync() {
    try {
      let aggr = [
        {
          $lookup: {
            from: "users",
            localField: "userId",
            foreignField: "_id",
            as: "user",
          },
        },
        {
          $unwind: {
            path: "$user",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $lookup: {
            from: "products",
            localField: "myCart.id",
            foreignField: "_id",
            as: "myCartList",
          },
        },
        {
          $project: {
            "user.password": 0,
            "user._id": 0,
            "user.privacyPolicy": 0,
            "user.isEmailVerified": 0,
            "user.isActive": 0,
            "user.isUpdated": 0,
            "user.isDeleted": 0,
            "user.isBcryptHashed": 0,
            "user.createdOn": 0,
            "user.__v": 0,
          },
        },
      ];

      const order = await Order.aggregate(aggr);
      const totalCount = await Order.countDocuments();
      const resultObject = {
        message: "Order Fetch Successfully",
        statusCode: 201,
        success: true,
        data: { order, totalCount },
      };
      return resultObject;
    } catch (err) {
      throw new Error("Could not fetch role");
    }
  }
  // =======/////////////////////////////

  async getAllOrders(pageNumber, pageSize, query, status) {
    try {
      const skip = pageNumber - 1;
      let filter = {};
      if (query) {
        const regex = new RegExp(query, "i");
        filter.$or = [{ name: regex }, { description: regex }];
      }

      if (status) {
        const statusArray = status.split(","); // Split the status string into an array
        filter.status = { $in: statusArray }; // Filter by any of the statuses
      }

      const totalCount = await Paypalorder.countDocuments(filter);
      const order = await Paypalorder.find(filter).skip(skip);

      const resultObject = {
        message: "Fetched successfully",
        statusCode: 201,
        success: true,
        data: { order, totalCount },
      };

      return resultObject;
    } catch (err) {
      throw new Error("Could not fetch order");
    }
  }

  // /////////////////////////////
  async getAllOrdersById(orderId) {
    try {
      const order = await Paypalorder.findById(orderId);
      const resultObject = {
        success: true,
        message: "order fetched successfully",
        data: order,
      };
      return resultObject;
    } catch (err) {
      const resultObject = {
        success: false,
        message: err.message,
        data: null,
      };
      return resultObject;
    }
  }

  // /////////////////////////////////////
  async getUserOrdersById(email) {
    try {
      const orders = await Paypalorder.find({ email }).sort({ createdOn: -1 });
      console.log("asdasda", email);
      const totalOrderCount = orders.length;
      const resultObject = {
        success: true,
        message: "order fetched successfully",
        data: { orders, totalOrderCount },
      };
      return resultObject;
    } catch (err) {
      const resultObject = {
        success: false,
        message: err.message,
        data: null,
      };
      return resultObject;
    }
  }
  // ///////////////////////////////////////

  async getMyOrderAsync(uid) {
    try {
      let aggr = [
        {
          $match: {
            userId: new ObjectId(uid),
            orderPaymentStatus: "Completed",
          },
        },
        {
          $lookup: {
            from: "users",
            localField: "userId",
            foreignField: "_id",
            as: "user",
          },
        },
        {
          $unwind: {
            path: "$user",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $unwind: {
            path: "$myCart",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $lookup: {
            from: "products",
            localField: "myCart.id",
            foreignField: "_id",
            as: "myCartList",
          },
        },
        {
          $project: {
            "user.password": 0,
            "user._id": 0,
            "user.privacyPolicy": 0,
            "user.isEmailVerified": 0,
            "user.isActive": 0,
            "user.isUpdated": 0,
            "user.isDeleted": 0,
            "user.isBcryptHashed": 0,
            "user.createdOn": 0,
            "user.__v": 0,
          },
        },
        {
          $unwind: {
            path: "$myCartList",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $addFields: {
            "myCartList.myCartcount": "$myCart.count",
            "myCartList.myCartprice": "$myCart.price",
          },
        },
        {
          $group: {
            _id: "$_id",
            myCartList: {
              $push: "$myCartList",
            },
            data: {
              $first: "$$ROOT",
            },
          },
        },
        {
          $addFields: {
            "data.myCartList": "$myCartList",
          },
        },
        {
          $replaceRoot: {
            newRoot: "$data",
          },
        },
      ];

      const order = await Order.aggregate(aggr);
      const totalCount = await Order.countDocuments();
      const resultObject = {
        message: "Order Fetch Successfully",
        statusCode: 200,
        success: true,
        data: { order: order, totalCount },
      };
      return resultObject;
    } catch (err) {
      throw new Error("Could not fetch role");
    }
  }

  async getOneOrderAsync(uid) {
    try {
      let aggr = [
        {
          $match: {
            _id: new ObjectId(uid),
          },
        },
        {
          $lookup: {
            from: "users",
            localField: "userId",
            foreignField: "_id",
            as: "user",
          },
        },
        {
          $unwind: {
            path: "$user",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $unwind: {
            path: "$myCart",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $lookup: {
            from: "products",
            localField: "myCart.id",
            foreignField: "_id",
            as: "myCartList",
          },
        },
        {
          $project: {
            "user.password": 0,
            "user._id": 0,
            "user.privacyPolicy": 0,
            "user.isEmailVerified": 0,
            "user.isActive": 0,
            "user.isUpdated": 0,
            "user.isDeleted": 0,
            "user.isBcryptHashed": 0,
            "user.createdOn": 0,
            "user.__v": 0,
          },
        },
        {
          $unwind: {
            path: "$myCartList",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $addFields: {
            "myCartList.myCartcount": "$myCart.count",
            "myCartList.myCartprice": "$myCart.price",
          },
        },
        {
          $group: {
            _id: null,
            myCartList: {
              $push: "$myCartList",
            },
            data: {
              $first: "$$ROOT",
            },
          },
        },
        {
          $addFields: {
            "data.myCartList": "$myCartList",
          },
        },
        {
          $replaceRoot: {
            newRoot: "$data",
          },
        },
      ];

      const order = await Order.aggregate(aggr);
      const totalCount = await Order.countDocuments();
      const resultObject = {
        message: "Order Fetch Successfully",
        statusCode: 201,
        success: true,
        data: { order: order.length > 0 ? order[0] : {}, totalCount },
      };
      return resultObject;
    } catch (err) {
      throw new Error("Could not fetch role");
    }
  }

  async updateOrderById(uid) {
    try {
      const order = await Order.findOneAndUpdate(
        { orderNo: uid },
        { $set: { orderPaymentStatus: "Completed" } }
      );
    } catch (err) {
      throw new Error("Could not fetch role");
    }
  }

  async getOneOrderNoRespAsync(uid) {
    try {
      let aggr = [
        {
          $match: {
            _id: new ObjectId(uid),
          },
        },
        {
          $lookup: {
            from: "users",
            localField: "userId",
            foreignField: "_id",
            as: "user",
          },
        },
        {
          $unwind: {
            path: "$user",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $unwind: {
            path: "$myCart",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $lookup: {
            from: "products",
            localField: "myCart.id",
            foreignField: "_id",
            as: "myCartList",
          },
        },
        {
          $project: {
            "user.password": 0,
            "user._id": 0,
            "user.privacyPolicy": 0,
            "user.isEmailVerified": 0,
            "user.isActive": 0,
            "user.isUpdated": 0,
            "user.isDeleted": 0,
            "user.isBcryptHashed": 0,
            "user.createdOn": 0,
            "user.__v": 0,
          },
        },
        {
          $unwind: {
            path: "$myCartList",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $addFields: {
            "myCartList.myCartcount": "$myCart.count",
            "myCartList.myCartprice": "$myCart.price",
          },
        },
        {
          $group: {
            _id: null,
            myCartList: {
              $push: "$myCartList",
            },
            data: {
              $first: "$$ROOT",
            },
          },
        },
        {
          $addFields: {
            "data.myCartList": "$myCartList",
          },
        },
        {
          $replaceRoot: {
            newRoot: "$data",
          },
        },
      ];

      const order = await Order.aggregate(aggr);
      return order[0];
    } catch (err) {
      throw new Error("Could not fetch role");
    }
  }
  // ==================================================================
  async createPaypalPayment(orderData) {
    const accessToken = await getAccessToken();
    console.log("Access Token:", accessToken);
    const paymentData = {
      intent: "CAPTURE",
      payer: { payment_method: "paypal" },
      purchase_units: [
        {
          amount: {
            currency_code: "GBP",
            value: parseFloat(orderData.total).toFixed(2),
          },
          description: "Order payment",
          item_list: {
            items: orderData.myCart.map((item) => ({
              name: item.service,
              price: parseFloat(item.price).toFixed(2),
              quantity: item.count,
            })),
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

      return response.data; // This contains approval_url to redirect user to PayPal for approval
    } catch (error) {
      console.error("Error creating PayPal payment:", error.response.data);
      throw new Error("Payment creation failed");
    }
  }

  async capturePayment(paymentId, payerId) {
    const accessToken = await getAccessToken();

    const captureData = {
      payer_id: payerId,
    };

    try {
      const response = await axios.post(
        `${PAYPAL_API_BASE}/v2/checkout/orders/${paymentId}/capture`,
        captureData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error("Error capturing PayPal payment:", error.response.data);
      throw new Error("Payment capture failed");
    }
  }
  //////////////////////////////////////////////////////////////////////////////

  async findOrderById(orderId) {
    return await Paypalorder.findById(orderId); // Replace with your model/method
  }

  async createRevoultOrder(amount, currency, orderId) {
    const order = await Paypalorder.findById(orderId);

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
        description: `Order #${orderId}`,
        email: order.email, // assuming Order has email field
        merchant_order_ext_ref: orderId,
    success_url: "https://smartlearner.com/paymentProcessing",
    cancel_url: "https://smartlearner.com/paymentProcessing",
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

// /////////////////////////////klarna/////////////////////////////////

 async createPaymentIntent(orderData) {
    // Save order to DB with pending status
    const order = new Paypalorder({
      firstName: orderData.firstName,
      lastName: orderData.lastName,
      city: orderData.city,
      email: orderData.email,
      myCart: orderData.myCart,
      ordernotes: orderData.ordernotes || "",
      phoneNumber: orderData.phoneNumber,
      postcode: orderData.postcode,
      serviceCharge: parseFloat(orderData.serviceCharge) || 0,
      streetAddress1: orderData.streetAddress1,
      streetAddress2: orderData.streetAddress2 || "",
      subtotal: parseFloat(orderData.subtotal) || 0,
      total: parseFloat(orderData.total),
      status: "pending",
      paymentMethod: "klarna",
    });

    await order.save();

    // Create Stripe PaymentIntent with Klarna
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(parseFloat(orderData.total) * 100), // pence (GBP)
      currency: "gbp",
     automatic_payment_methods: {
    enabled: true,
    allow_redirects: "always", // Required for Klarna (redirect-based)
  },

      metadata: {
        orderId: order._id.toString(),
        customerEmail: orderData.email,
        customerName: `${orderData.firstName} ${orderData.lastName}`,
      },
      shipping: {
        name: `${orderData.firstName} ${orderData.lastName}`,
        phone: orderData.phoneNumber,
        address: {
          line1: orderData.streetAddress1,
          line2: orderData.streetAddress2 || "",
          city: orderData.city,
          postal_code: orderData.postcode,
          country: "GB",
        },
      },
    });

    // Store paymentIntent ID in order
    order.paymentToken = paymentIntent.id;
    await order.save();

    // Send "payment initiated" email
    try {
      const emailService = new productEmailService();
      await emailService.sendEmail(order, "Initiated", "Klarna");
    } catch (emailErr) {
      console.error("Initiation email error:", emailErr.message);
    }

    return {
      clientSecret: paymentIntent.client_secret,
      orderId: order._id.toString(),
    
    };
  }

   async verifyPaymentStatus(paymentIntentId) {
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    const orderId = paymentIntent.metadata?.orderId;

    if (!orderId) throw new Error("Order ID not found in PaymentIntent metadata");

    const newStatus =
      paymentIntent.status === "succeeded" ? "completed" : "failed";

    const order = await Paypalorder.findByIdAndUpdate(
      orderId,
      {
        status: newStatus,
        paymentDetails: paymentIntent,
      },
      { new: true }
    );

    if (!order) throw new Error("Order not found");

    // Send success/fail email
    try {
      const emailService = new productEmailService();
      const emailStatus = newStatus === "completed" ? "Successful" : "Failed";
      await emailService.sendEmail(order, emailStatus, "Klarna");
    } catch (emailErr) {
      console.error("Status email error:", emailErr.message);
    }

    return { order, paymentIntent };
  }

async handleWebhook(rawBody, sig) {
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    let event;

    try {
      event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
    } catch (err) {
      throw new Error(`Webhook signature verification failed: ${err.message}`);
    }

    switch (event.type) {
      case "payment_intent.succeeded":
        await this._onPaymentSucceeded(event.data.object);
        break;

      case "payment_intent.payment_failed":
        await this._onPaymentFailed(event.data.object);
        break;

      case "payment_intent.created":
        console.log(`PaymentIntent created: ${event.data.object.id}`);
        break;

      default:
        console.log(`Unhandled webhook event: ${event.type}`);
    }

    return { received: true };
  }


  async _onPaymentSucceeded(paymentIntent) {
    const orderId = paymentIntent.metadata?.orderId;
    if (!orderId) return;

    const order = await Paypalorder.findByIdAndUpdate(
      orderId,
      { status: "completed", paymentDetails: paymentIntent },
      { new: true }
    );

    if (order) {
      try {
        const emailService = new productEmailService();
        await emailService.sendEmail(order, "Successful", "Klarna");
      } catch (err) {
        console.error("Webhook success email error:", err.message);
      }
    }
  }

  // ─── Private: Handle Failed Webhook ─────────────────────────────────────────
  async _onPaymentFailed(paymentIntent) {
    const orderId = paymentIntent.metadata?.orderId;
    if (!orderId) return;

    const order = await Paypalorder.findByIdAndUpdate(
      orderId,
      { status: "failed", paymentDetails: paymentIntent },
      { new: true }
    );

    if (order) {
      try {
        const emailService = new productEmailService();
        await emailService.sendEmail(order, "Failed", "Klarna");
      } catch (err) {
        console.error("Webhook failed email error:", err.message);
      }
    }
  }

  ///////////////////////////////////////////////////////////

  async sendEmail(orderDetails, status, method) {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "Smartlearnerdrivingschool@gmail.com", // Your email
        pass: "ghzf dspi ndeg ryqw", // Your email password or app password
      },
    });

    let cartDetails = "";
    orderDetails.myCart.forEach((item) => {
      cartDetails += `
        <tr>
          <td>${item.service}</td>
          <td>${item.count}</td>
          <td>£ ${item.price.toFixed(2)}</td>
        </tr>
      `;
    });

    const htmlContent = `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; color: #333; margin: 0; padding: 0; background-color: #f9f9f9; }
            .container { width: 100%; max-width: 600px; margin: 20px auto; padding: 20px; background-color: #ffffff; border: 1px solid #ddd; border-radius: 5px; }
            .header { text-align: center; margin-bottom: 20px; }
            .header img { width: 150px; background-color:'black';}
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
              <h2>Payment ${status} - Order #${orderDetails._id}</h2>
              <h2>Payment Method ${method} </h2>
              <p><strong>Dear ${orderDetails.firstName} ${
      orderDetails.lastName
    },</strong></p>
              <p>Your payment for Order #${
                orderDetails._id
              } has been ${status}.</p>
  
              <h3>Order Details:</h3>
              <table>
                <tr>
                  <th>First Name</th>
                  <td>${orderDetails.firstName}</td>
                </tr>
                <tr>
                  <th>Last Name</th>
                  <td>${orderDetails.lastName}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>${orderDetails.email}</td>
                </tr>
                <tr>
                  <th>Phone No.</th>
                  <td>${orderDetails.phoneNumber}</td>
                </tr>
                  <tr>
                  <th>Order Notes</th>
                  <td>${orderDetails.ordernotes}</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>${orderDetails.streetAddress1} ${
      orderDetails.streetAddress2
    }</td>
                </tr>
                <tr>
                  <th>City</th>
                  <td>${orderDetails.city}</td>
                </tr>
                <tr>
                  <th>Total</th>
                  <td>£ ${orderDetails.total.toFixed(2)}</td>
                </tr>
                 <tr>
                  <th>Extra Charges</th>
                  <td>${orderDetails.extraCharges}</td>
                </tr>
              </table>
  
              <h3>Product Details:</h3>
              <table>
                <tr>
                  <th>Service</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
                ${cartDetails}
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
      to: [orderDetails.email, "admin@smartlearner.com"],
      subject: `Payment ${status} - Order #${orderDetails._id} PaymentMethod ${method}`,
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

module.exports = new OrderService();
