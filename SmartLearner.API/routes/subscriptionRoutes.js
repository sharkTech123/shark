const express = require("express");
const router = express.Router();
const SubscriptionController = require("../controllers/subscriptionController");
const userSubscriptionController = require("../controllers/userSubscriptionController");
const UserSubscriptionService = require("../services/userSubscriptionService");
const { requireAuth } = require("../middlewares/authMiddleware");
// Define routes for subscription management
router.post("/add-plan", SubscriptionController.createPlan);
router.get(
  "/plan/:id/apply-coupon/:couponCode?",
  SubscriptionController.getPlanById
);
// Optional couponCode in the URL

router.get("/plans", SubscriptionController.getAllPlan);
router.post("/delete-plan/:id", SubscriptionController.deletePlan);

// User subscription routes
router.post(
  "/create-usersubs",
  userSubscriptionController.createUserSubscription
);
router.get(
  "/get-usersubs/:userId",
  userSubscriptionController.getUserSubscriptions
);

// Payment routes
router.post(
  "/create-payment",
  (req, res, next) => {
    console.log("Request received at /create-payment", req.body);
    next();
  },
  requireAuth,
  userSubscriptionController.createPayment
); // New route for creating a payment
router.post("/confirm-payment", userSubscriptionController.confirmPayment); // New route for confirming payment
router.get("/checkTrial/:userId", userSubscriptionController.checkTrialStatus);
router.post(
  "/apply-coupon",
  requireAuth,
  userSubscriptionController.couponAccess
);

router.post(
  "/pdiApply-coupon",
  requireAuth,
  userSubscriptionController.pdiCouponAccess
);
router.post(
  "/pdiPartOneApply-coupon",
  requireAuth,
  userSubscriptionController.pdiPartOneCouponAccess
);
router.post(
  "/pdiPartTwoApply-coupon",
  requireAuth,
  userSubscriptionController.pdiPartTwoCouponAccess
);
router.post(
  "/pdiPartThreeApply-coupon",
  requireAuth,
  userSubscriptionController.pdiPartThreeCouponAccess
);

router.post(
  "/revolut-charge",
  requireAuth,
  userSubscriptionController.createRevolutCharge
);
router.post(
  "/revolut-payment-success",
  userSubscriptionController.revolutPaymentSuccess
);
router.post(
  "/revolut-payment-failure",
  userSubscriptionController.revolutPaymentFailure
);

router.post("/create-product", userSubscriptionController.createProduct);
router.post("/create-plan", userSubscriptionController.createPayPalPlan);
router.post(
  "/create-subscription",
  userSubscriptionController.createSubscription
);

module.exports = router;
