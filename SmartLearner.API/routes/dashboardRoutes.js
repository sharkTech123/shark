const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();
const { requireAuth } = require("../middlewares/authMiddleware");
const dashboardController = require("../controllers/dashboardController");

router.get(
  "/getDashboardCards",
  requireAuth,
  dashboardController.getDashboardCards
);
router.get(
  "/getCategoryCards",
  requireAuth,
  dashboardController.getCategoryCardsByQuestion
);
router.get(
  "/getModuleCards/:id",
  requireAuth,
  dashboardController.getModuleCards
);
router.get(
  "/getQuenameCards/:id",
  requireAuth,
  dashboardController.getModuleCards
);
router.get(
  "/getMySubsciption",
  requireAuth,
  dashboardController.getMySubsciption
);
router.post(
  "/CheckoutMySubsciption",
  requireAuth,
  dashboardController.CheckoutMySubsciption
);
router.get(
  "/getMySubscriptionType",
  requireAuth,
  dashboardController.getMySubscriptionType
);

module.exports = router;
