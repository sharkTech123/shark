const express = require('express');
const rateLimit = require('express-rate-limit');
const { getChildren } = require('../controllers/onboardingController');
const { validateOptionalObjectIdQuery } = require('../middlewares/validateObjectIdMiddleware');

const router = express.Router();

// Cheap public GET endpoint, but still rate-limit it — it runs on every
// first page load for every visitor, so it's an easy target for abuse/scraping.
const onboardingLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 60, // 60 requests/minute/IP is generous for a step-by-step popup
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many requests, please slow down.' },
});

router.get(
  '/nodes',
  onboardingLimiter,
  validateOptionalObjectIdQuery('parentId'),
  getChildren
);

module.exports = router;

/**
 * In your main server.js / app.js:
 *
 *   const onboardingRoutes = require('./routes/onboardingRoutes');
 *   app.use('/api/onboarding', onboardingRoutes);
 */