const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/orderController");
const { requireAuth } = require("../middlewares/authMiddleware");
const multer = require("multer");
const upload = multer();

router.post(
  "/CompleteCheckout",
  upload.none(),
  OrderController.CompleteCheckout
);
router.get(
  "/getMyOrder",
  upload.none(),
  requireAuth,
  OrderController.getMyOrder
);
router.get(
  "/getAllOrder",
  upload.none(),
  requireAuth,
  OrderController.getAllOrder
);
// =========================================================
router.get(
  "/get-all-orders",
  upload.none(),
  requireAuth,
  OrderController.getAllOrders
);
router.get(
  "/get-all-orders/:id",
  upload.none(),
  requireAuth,
  OrderController.getAllOrdersById
);

router.get(
  "/user/:userEmail",
  upload.none(),
  requireAuth,
  OrderController.getUserOrdersById
);
// ///////////////////////////////////////////////
router.get(
  "/getOrder/:id",
  upload.none(),
  requireAuth,
  OrderController.getOneOrder
);
router.get("/myOrder", upload.none(), requireAuth, OrderController.getMyOrder);
router.post(
  "/generate_hash",
  upload.none(),
  requireAuth,
  OrderController.generate_hash
);
router.post("/paymentSuccess", upload.none(), OrderController.paymentSuccess);
router.post("/paymentFailed", upload.none(), OrderController.paymentFailed);
router.post("/create", OrderController.createPayment); // for creating payment
router.post("/execute", OrderController.executePayment);
router.get("/cancel", OrderController.cancelPayment);
// /////////////////////////////////////
// router.post("/stripe-charge", OrderController.createStripeCharge);
// ///////////////////////////////////////////

router.post("/revolut-charge", OrderController.createRevolutCharge);

router.post("/revolut-payment-success", OrderController.revolutPaymentSuccess);
router.post("/revolut-payment-failure", OrderController.revolutPaymentFailure);

// router.post("/revolut-pay", OrderController.createRevolutOrder);

// router.post("/webhook", OrderController.handleWebhook);

// router.post("/verify-payment", OrderController.verifyOrderStatus);

router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  (req, res) => OrderController.webhook(req, res)
);

// Standard JSON routes
router.post("/create-payment-intent", (req, res) =>
  OrderController.createPaymentIntent(req, res)
);

router.get("/verify/:paymentIntentId", (req, res) =>
  OrderController.verifyKlarnaPayment(req, res)
);

module.exports = router;
