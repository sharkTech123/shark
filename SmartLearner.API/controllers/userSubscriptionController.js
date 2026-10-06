const express = require("express");
const router = express.Router();
const userSubscriptionService = require("../services/userSubscriptionService");
const UserSubscription = require("../models/subscriptionModal");
const orderService = require("../services/orderService");

class userSubscriptionController {
  // Add a new subscription plan
  async createUserSubscription(req, res, next) {
    const { userId, subscriptionId, method, isTrial } = req.body;
    try {
      const userSubscription =
        await userSubscriptionService.createUserSubscription(
          userId,
          subscriptionId,
          method,
          "COMPLETED",
          isTrial
        );

      let status = "COMPLETED";
      await userSubscriptionService.sendSubscriptionEmail(
        userId,
        subscriptionId,
        status,
        "paypal"
      );
      res.status(201).json({
        message: "Subscription created successfully",
        userSubscription,
      });
    } catch (err) {
      let status = "failure";
      await userSubscriptionService.sendSubscriptionEmail(
        userId,
        subscriptionId,
        status,
        "paypal"
      );
      next(err);
    }
  }
  async getUserSubscriptions(req, res, next) {
    try {
      const subscriptions = await userSubscriptionService.getUserSubscriptions(
        req.params.userId
      );
      res.status(200).json(subscriptions);
    } catch (err) {
      next(err);
    }
  }
  async deleteUserSubscription(req, res, next) {
    try {
      const { userId, subscriptionId } = req.body;
      const deletSubscription =
        await userSubscriptionService.deleteUserSubscription(
          userId,
          subscriptionId
        );
      res.json(deletSubscription);
    } catch (err) {
      next(err);
    }
  }
  async getAllUserSubscription(req, res, next) {
    try {
      const userSubscriptions =
        await userSubscriptionService.getAllUserSubscriptions();
      res.status(200).json(userSubscriptions);
    } catch (err) {
      next(err);
    }
  }
  async checkTrialStatus(req, res, next) {
    try {
      const trials = await userSubscriptionService.checkTrialStatus(
        req.params.userId
      );
      res.status(200).json(trials);
    } catch (err) {
      next(err);
    }
  }

  async createPayment(req, res) {
    const { subscriptionId, price } = req.body;

    console.log("workkkkkk", price);
    try {
      const order = await userSubscriptionService.createPayment(
        subscriptionId,
        price
      );
      res.status(200).json({
        id: order.id,
        approvalUrl: order.links.find((link) => link.rel === "approve").href,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Confirm payment method
  async confirmPayment(req, res) {
    const { orderId, userId, subscriptionId, isTrial } = req.body;
    try {
      const userSubscription = await userSubscriptionService.confirmPayment(
        orderId,
        userId,
        subscriptionId,
        isTrial
      );

      await userSubscriptionService.sendSubscriptionEmail(
        userSubscription,
        "success"
      );

      res.status(200).json(userSubscription);
    } catch (error) {
      res.status(500).json({ error: error.message });
      await userSubscriptionService.sendSubscriptionEmail(
        { userId, subscriptionId },
        "failure"
      );
    }
  }

  /////////////////////////////////////////////////////////

  async createProduct(req, res) {
    try {
      const product = await userSubscriptionService.createPaypalProduct();
      res.json(product);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async createPayPalPlan(req, res) {
    try {
      const { price } = req.body;
      const plan = await userSubscriptionService.createPaypalPlan(
        "PROD-2YY73427Y72016337",
        price
      );
      res.json(plan);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async createSubscription(req, res) {
    try {
      const { userId, subscriptionId, paypalSubscriptionId, method } = req.body;
      console.log(
        "check",
        userId,
        subscriptionId,
        paypalSubscriptionId,
        method
      );
      const subscription =
        await userSubscriptionService.createPaypalSubscription(
          userId,
          subscriptionId,
          paypalSubscriptionId,
          method
        );
  
      res.json(subscription);
      console.log("test", subscription);
    } catch (err) {
      console.log("Error", err);
      res.status(400).json({ error: err.message });
    }
  }

  // /////////////////////////////////////////////////////
  async createRevolutCharge(req, res) {
    const { amount, currency, subscriptionId, userId } = req.body;

    console.log("asas", amount, currency, subscriptionId, userId);
    try {
      const response = await userSubscriptionService.createRevoultOrder(
        amount,
        currency,
        subscriptionId,
        userId
      );

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

  async revolutPaymentSuccess(req, res) {
   const { userId, subscriptionId, isTrial } = req.body

    try {
      const userSubscription =
        await userSubscriptionService.createUserSubscription(
          userId,
          subscriptionId,
          "Revolut",
          "completed",
          isTrial
        );

      const subs = await UserSubscription.findOne({
        userId,
      });

      subs.paymentStatus = "completed";
      subs.paymentMethod = "Revolut";
      await subs.save();

      await userSubscriptionService.sendSubscriptionEmail(
        userId,
        subscriptionId,
        "COMPLETED",
        "Revolut"
      );

      res.status(200).json({
        success: true,
        message: "Order marked as paid and email sent",
        userSubscription,
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

  async revolutPaymentFailure(req, res) {
   const { userId, subscriptionId, isTrial } = req.body

    try {
      await userSubscriptionService.sendSubscriptionEmail(
        userId,
        subscriptionId,
        "failed",
        "Revolut"
      );

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

  // ////////////////COUPON CODE///////////////////////
  async couponAccess(req, res, next) {
    const { userId, planId, couponCode } = req.body;
    try {
      const couponAccess = await userSubscriptionService.applyCouponCode(
        userId,
        planId,
        couponCode
      );
      res.status(200).json(couponAccess);
    } catch (err) {
      next(err);
    }
  }
  // ///////////////////////////////////////////////////////////////////////
  async pdiCouponAccess(req, res, next) {
    const { userId, couponCode } = req.body;
    try {
      const couponAccess = await userSubscriptionService.pdiCouponCode(
        userId,
        couponCode
      );
      res.status(200).json(couponAccess);
    } catch (err) {
      next(err);
    }
  }
  async pdiPartOneCouponAccess(req, res, next) {
    const { userId, planId, couponCode } = req.body;
    try {
      const couponAccess = await userSubscriptionService.pdiPartOneCouponCode(
        userId,
        planId,
        couponCode
      );
      res.status(200).json(couponAccess);
    } catch (err) {
      next(err);
    }
  }
  async pdiPartTwoCouponAccess(req, res, next) {
    const { userId, couponCode } = req.body;
    try {
      const couponAccess = await userSubscriptionService.pdiPartTwoCouponCode(
        userId,
        couponCode
      );
      res.status(200).json(couponAccess);
    } catch (err) {
      next(err);
    }
  }
  async pdiPartThreeCouponAccess(req, res, next) {
    const { userId, couponCode } = req.body;
    try {
      const couponAccess = await userSubscriptionService.pdiPartThreeCouponCode(
        userId,
        couponCode
      );
      res.status(200).json(couponAccess);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new userSubscriptionController();
