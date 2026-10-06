const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;
const orderService = require("../services/orderService");
const crypto = require("crypto");
const paymentSuccess = require("../models/paymentSuccessModel");
const Order = require("../models/orderModel");
const Paypalorder = require("../models/paypalOrderModel");
const stripe = require("../config/stripe");
const baseUrl = process.env.REVOLUT_API_URL || "https://merchant.revolut.com";
const secretKey = process.env.REVOLUT_API_SECRET_KEY;

class OrderController {
  async getAllOrders(req, res, next) {
    try {
      const { page, pagesize, search, status } = req.query;
      const Orders = await orderService.getAllOrders(
        page,
        pagesize,
        search,
        status
      );
      res.status(200).json(Orders);
    } catch (err) {
      next(err);
    }
  }
  async getAllOrdersById(req, res, next) {
    try {
      const blog = await orderService.getAllOrdersById(req.params.id);
      res.json(blog);
    } catch (err) {
      next(err);
    }
  }

  async getUserOrdersById(req, res, next) {
    try {
      const email = req.params.userEmail;
      const data = await orderService.getUserOrdersById(email);
      res.json(data);
    } catch (err) {
      next(err);
    }
  }

  async CompleteCheckout(req, res, next) {
    try {
      const data = req.body;
      data["userId"] = req.userId;

      let myCart = data["myCart"];
      if (!myCart || !Array.isArray(myCart)) {
        return res.status(400).json({ message: "Invalid cart data" });
      }

      let mycartPrice = 0;
      let myCartIng = myCart.map((itm) => {
        mycartPrice += itm.price * itm.count;

        return {
          ...itm,
          id: new ObjectId(itm.id),
        };
      });

      data["myCart"] = myCartIng;
      data["mycartPrice"] = mycartPrice;
      mycartPrice += mycartPrice * 0.02; // Add 2% charge
      data["mycartPriceTotal"] = mycartPrice;

      const role = await orderService.createOrderAsync(data);
      res.status(201).json(role);
    } catch (err) {
      next(err);
    }
  }

  async getAllOrder(req, res, next) {
    try {
      const data = req.body;
      const role = await orderService.getAllOrderAsync();
      res.status(201).json(role);
    } catch (err) {
      next(err);
    }
  }
  async getOneOrder(req, res, next) {
    try {
      const role = await orderService.getOneOrderAsync(req.params.id);
      res.status(201).json(role);
    } catch (err) {
      next(err);
    }
  }
  async getMyOrder(req, res, next) {
    try {
      const role = await orderService.getMyOrderAsync(req.userId);
      res.status(201).json(role);
    } catch (err) {
      next(err);
    }
  }

  async paymentSuccess(req, res, next) {
    try {
      const data = req.body;
      let dataa = paymentSuccess.create(data);

      const role = await orderService.updateOrderById(data["ekashu_reference"]);

      const resultObject = {
        message: "Payment successfully",
        statusCode: 200,
        success: true,
        data: {},
      };
      res.redirect(
        `${
          process.env.FRONTEND_URL || "https://smartlearner.com"
        }/paymentSuccess`
      );
    } catch (err) {
      next(err);
    }
  }

  async paymentFailed(req, res, next) {
    try {
      const data = req.body;
    } catch (err) {
      next(err);
    }
  }
  async generate_hash(req, res, next) {
    try {
      let SELLER_ID = "25071147";
      let SELLER_KEY = "43443672";
      let HASH_KEY = "4TZ5dm748Jq8hVzc";

      const data = req.body;

      let orderId = data["orderId"];

      const order = await orderService.getOneOrderNoRespAsync(orderId);

      let orderNo = order["orderNo"];
      let total = order["total"];

      delete data["orderId"];

      data["ekashu_seller_id"] = SELLER_ID;
      data["ekashu_seller_key"] = SELLER_KEY;
      data["ekashu_amount"] = total;

      const check_fields = [
        "ekashu_3d_secure_verify",
        "ekashu_amount",
        "ekashu_amount_format",
        "ekashu_auto_confirm",
        "ekashu_callback_failure_url",
        "ekashu_callback_include_post",
        "ekashu_callback_success_url",
        "ekashu_card_address_editable",
        "ekashu_card_address_required",
        "ekashu_card_address_verify",
        "ekashu_card_email_address_mandatory",
        "ekashu_card_phone_number_mandatory",
        "ekashu_card_title_mandatory",
        "ekashu_card_zip_code_verify",
        "ekashu_currency",
        "ekashu_delivery_address_editable",
        "ekashu_delivery_address_required",
        "ekashu_delivery_email_address_mandatory",
        "ekashu_delivery_phone_number_mandatory",
        "ekashu_delivery_title_mandatory",
        "ekashu_description",
        "ekashu_device",
        "ekashu_duplicate_check",
        "ekashu_duplicate_minutes",
        "ekashu_failure_return_text",
        "ekashu_failure_url",
        "ekashu_hash_code_format",
        "ekashu_hash_code_type",
        "ekashu_hash_code_version",
        "ekashu_include_post",
        "ekashu_invoice_address_editable",
        "ekashu_invoice_address_required",
        "ekashu_invoice_email_address_mandatory",
        "ekashu_invoice_phone_number_mandatory",
        "ekashu_invoice_title_mandatory",
        "ekashu_locale",
        "ekashu_payment_methods",
        "ekashu_reference",
        "ekashu_request_type",
        "ekashu_return_text",
        "ekashu_seller_address",
        "ekashu_seller_email_address",
        "ekashu_seller_id",
        "ekashu_seller_key",
        "ekashu_seller_name",
        "ekashu_shortcut_icon",
        "ekashu_style_sheet",
        "ekashu_success_url",
        "ekashu_title",
        "ekashu_verification_value_mask",
        "ekashu_verification_value_verify",
        "ekashu_viewport",
      ];

      const hashcode_input = check_fields
        .map((field) => data[field] || "")
        .join("&");
      console.log("Hash Input String:", hashcode_input);
      const hash = crypto
        .createHmac("sha256", HASH_KEY)
        .update(hashcode_input)
        .digest("base64");

      res.json({ hash_code: hash });
    } catch (err) {
      next(err);
    }
  }

  async getMyOrder(req, res, next) {
    try {
      const role = await orderService.getMyOrderAsync(req.userId);
      res.status(200).json(role);
    } catch (err) {
      next(err);
    }
  }

  // ====================================================================
  async createPayment(req, res) {
    const { order } = req.body;

    try {
      // Save order in the database with status 'pending'
      const newOrder = new Paypalorder(order);
      await newOrder.save();

      // Create PayPal payment
      const paypalResponse = await orderService.createPaypalPayment(order);

      // Send back PayPal approval URL for frontend to redirect user to PayPal
      res.status(201).json({
        success: true,
        approvalUrl: paypalResponse.links.find((link) => link.rel === "approve")
          .href,
        orderId: newOrder._id,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: error.message });
    }
  }

  async executePayment(req, res) {
    const { paymentId, payerId, orderId } = req.body;

    try {
      const order = await Paypalorder.findById(orderId);
      if (!order) {
        console.log(`Order not found for ID: ${orderId}`); // Log for debugging
        return res
          .status(404)
          .json({ success: false, message: "Order not found" });
      }
      order.status = "pending";
      order.paymentMethod = "PayPal";
      await order.save();

      // ✅ Step 2: Send pending email

      // Capture PayPal payment
      const paypalResponse = await orderService.capturePayment(
        paymentId,
        payerId
      );

      order.status = "completed";
      order.paymentMethod = "PayPal";
      await order.save();

      await orderService.sendEmail(order, "success", "PayPal");

      res.status(200).json({
        success: true,
        message: "Payment successful",
        paypalResponse,
      });
    } catch (error) {
      console.error(error);

      const order = await Paypalorder.findById(orderId);
      if (order) {
        order.status = "failed";
        await order.save();
      }

      // Send failure email
      if (order) {
        await orderService.sendEmail(order, "failure", "PayPal");
      }
      console.error("Payment capture failed:", error);
      res.status(500).json({
        success: false,
        message: "Payment failed: " + error.message,
      });
    }
  }

  async cancelPayment(req, res) {
    res.status(200).json({
      success: false,
      message: "Payment was canceled.",
    });
  }

  // ////////////////////////////////////////////////////////////
  // async createStripeCharge(req, res) {
  //   const { paymentMethodData, amount, orderId } = req.body;

  //   try {
  //     const order = await Paypalorder.findById(orderId);
  //     if (!order) {
  //       return res
  //         .status(404)
  //         .json({ success: false, message: "Order not found" });
  //     }

  //     const paymentIntent = await stripe.paymentIntents.create({
  //       amount: Math.round(amount * 100), // Amount in pence (or smallest unit of your currency)
  //       currency: "gbp",
  //       payment_method_data: paymentMethodData,
  //       confirm: true,
  //       automatic_payment_methods: {
  //         enabled: true,
  //         allow_redirects: "never", // Automatically enable payment methods
  //       },
  //       return_url: "https://smartlearner.com/payment-completed",
  //     });
  //     if (
  //       paymentIntent.status === "requires_action" ||
  //       paymentIntent.status === "requires_source_action"
  //     ) {
  //       return res.status(200).json({
  //         success: true,
  //         requiresAction: true,
  //         paymentIntentClientSecret: paymentIntent.client_secret,
  //       });
  //     }

  //     order.status = "completed";
  //     await order.save();
  //     order.paymentDetails = paymentIntent;
  //     order.paymentMethod = "Stripe";
  //     await orderService.sendEmail(order, "success", "Stripe");

  //     res
  //       .status(200)
  //       .json({ success: true, message: "Payment successful", paymentIntent });
  //   } catch (error) {
  //     console.error(error);

  //     const order = await Paypalorder.findById(orderId);
  //     if (order) {
  //       order.status = "failed";
  //       await order.save();
  //     }

  //     // Send failure email
  //     if (order) {
  //       await orderService.sendEmail(order, "failure", "Stripe");
  //     }
  //     console.error("Payment capture failed:", error);
  //     res.status(500).json({
  //       success: false,
  //       message: "Payment failed: " + error.message,
  //     });
  //   }
  // }
  ///////////////////////////////////////////////////
  // ////////////////////////////////////////

  // async createRevolutOrder(req, res) {
  //   const { amount, currency, orderId } = req.body;

  //   try {
  //     const orderRecord = await Paypalorder.findById(orderId);
  //     if (!orderRecord) {
  //       return res
  //         .status(404)
  //         .json({ success: false, message: "Order not found" });
  //     }

  //     const resp = await fetch(`${baseUrl}/api/1.0/orders`, {
  //       method: "POST",
  //       headers: {
  //         Authorization: `Bearer ${secretKey}`,
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: JSON.stringify({
  //         amount: Math.round(parseFloat(amount) * 100), // convert to minor units
  //         currency: currency || "GBP",
  //         capture_mode: "AUTOMATIC",
  //         description: `Order #${orderId}`,
  //         email: orderRecord.email, // assuming Order has email field
  //         merchant_order_ext_ref: orderId,
  //         return_url: `https://smartlearner.com/payment-completed`,
  //         success_url: `https://smartlearner.com/paymentSuccess?revolut_token=${data.public_id}`,
  //         cancel_url: `https://smartlearner.com/paymentProcessing?revolut_token=${data.public_id}`,
  //       }),
  //     });

  //     const data = await resp.json();
  //     if (!resp.ok) {
  //       console.error(data);
  //       return res.status(400).json({ success: false, message: data });
  //     }
  //     console.error("Revolut API error:", data);

  //     orderRecord.revolutToken = data.public_id; // store public_id if needed
  //     orderRecord.status = "pending";
  //     await orderRecord.save();

  //     res.json({ success: true, checkout_url: data.checkout_url });
  //   } catch (err) {
  //     console.error(err);
  //     res.status(500).json({ success: false, message: err.message });
  //   }
  // }

  // async handleWebhook(req, res) {
  //   const event = req.body;
  //   // Optionally validate signing via REVOLUT_WEBHOOK_SECRET...
  //   console.log("Webhook:", event);

  //   // Example of handling ORDER_COMPLETED
  //   if (event.type === "ORDER_COMPLETED") {
  //     const token = event.data.token;
  //     const order = await Paypalorder.findOne({ revolutToken: token });
  //     if (order) {
  //       order.status = "completed";
  //       await order.save();
  //     }
  //   }

  //   res.status(200).send("OK");
  // }

  // async verifyOrderStatus(req, res) {
  //   const { token } = req.body;
  //   try {
  //     const resp = await fetch(`${baseUrl}/api/1.0/orders/${token}`, {
  //       method: "GET",
  //       headers: { Authorization: `Bearer ${secretKey}` },
  //     });
  //     const data = await resp.json();
  //     res.json({ success: true, order: data });
  //   } catch (err) {
  //     console.error(err);
  //     res.status(500).json({ success: false, message: err.message });
  //   }
  // }

  async createRevolutCharge(req, res) {
    const { amount, currency, orderId } = req.body;

    try {
      const order = await Paypalorder.findById(orderId);
      console.log("dasdjal", orderId);
      if (!order) {
        return res
          .status(404)
          .json({ success: false, message: "Order not found" });
      }
      const email = order.email;
      

      const response = await orderService.createRevoultOrder(
        amount,
        currency,
        orderId
      );
      order.paymentToken = response.public_id;
      order.status = "pending";
      order.paymentMethod = "Revolut";
      await order.save();

      res.status(200).json({
        success: true,
        message: "Revolut order created",
        token: response.public_id,
      });
    } catch (error) {
      console.error("Revolut Charge Error:", error);
      res.status(500).json({
        success: false,
        message: "Failed to create Revolut charge",
        error: error.message,
      });
    }
  }

  // POST /api/order/revolut-payment-success
  async revolutPaymentSuccess(req, res) {
    const { orderId } = req.body;

    try {
      const order = await Paypalorder.findById(orderId);
      if (!order) {
        return res
          .status(404)
          .json({ success: false, message: "Order not found" });
      }

      order.status = "completed";
      order.paymentMethod = "Revolut";
      await order.save();

      // Send success email
      await orderService.sendEmail(order, "completed", "Revolut");

      res.status(200).json({
        success: true,
        message: "Order marked as paid and email sent",
      });
    } catch (error) {
      console.error("Revolut Payment Success Error:", error);
      res.status(500).json({
        success: false,
        message: "Failed to mark payment success",
        error: error.message,
      });
    }
  }

  // In your controller
  async revolutPaymentFailure(req, res) {
    const { orderId } = req.body;

    try {
      const order = await Paypalorder.findById(orderId);
      if (!order) {
        return res
          .status(404)
          .json({ success: false, message: "Order not found" });
      }

      order.status = "failed";
      await order.save();

      // Send failure email
      await orderService.sendEmail(order, "failed", "Revolut");

      res.status(200).json({
        success: true,
        message: "Order marked as failed and failure email sent",
      });
    } catch (error) {
      console.error("Revolut Payment Failure Error:", error);
      res.status(500).json({
        success: false,
        message: "Failed to mark payment as failed",
        error: error.message,
      });
    }
  }
/////////////////////////////////////////////////////
///////////////////////////////////////////////////
//////////////////////////////////////////////////////

   async createPaymentIntent(req, res) {
    try {
      const orderData = req.body;

      // Basic validation
      const requiredFields = [
        "firstName", "lastName", "email", "phoneNumber",
        "streetAddress1", "city", "postcode", "total", "myCart", "subtotal", "serviceCharge",
      ];
      const missing = requiredFields.filter((f) => !orderData[f]);
      if (missing.length > 0) {
        return res.status(400).json({
          success: false,
          message: `Missing required fields: ${missing.join(", ")}`,
        });
      }

      if (!Array.isArray(orderData.myCart) || orderData.myCart.length === 0) {
        return res.status(400).json({ success: false, message: "Cart is empty" });
      }

      const result = await orderService.createPaymentIntent(orderData);

      return res.status(200).json({ success: true, ...result });
    } catch (error) {
      console.error("createPaymentIntent error:", error);
      return res.status(500).json({ success: false, message: error.message });
    }
  }

  // GET /api/stripe-klarna/verify/:paymentIntentId
  async verifyKlarnaPayment(req, res) {
    try {
      const { paymentIntentId } = req.params;

      console.log("Verifying Klarna payment for PaymentIntent ID:", paymentIntentId);
      console.log("Request params:", req);

      if (!paymentIntentId) {
        return res.status(400).json({ success: false, message: "paymentIntentId is required" });
      }

      const { order, paymentIntent } = await orderService.verifyPaymentStatus(paymentIntentId);

      return res.status(200).json({
        success: true,
        status: order.status,
        orderId: order._id,
        paymentStatus: paymentIntent.status,
        order,
      });
    } catch (error) {
      console.error("verifyPayment error:", error);
      return res.status(500).json({ success: false, message: error.message });
    }
  }

  // POST /api/stripe-klarna/webhook  ← raw body, no JSON middleware
  async webhook(req, res) {
    const sig = req.headers["stripe-signature"];
    if (!sig) {
      return res.status(400).json({ message: "Missing stripe-signature header" });
    }

    try {
      const result = await orderService.handleWebhook(req.body, sig);
      return res.status(200).json(result);
    } catch (error) {
      console.error("Webhook error:", error.message);
      return res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new OrderController();
