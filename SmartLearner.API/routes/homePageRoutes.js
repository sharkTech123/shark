const express = require("express");
const router = express.Router();

const homeController = require("../controllers/homePageController");
const { requireAuth } = require("../middlewares/authMiddleware");
const { imageSaverMiddleware, recentPassesImageSaver } = require("../middlewares/imageSaverMiddleware");

const multer = require("multer");
const upload = multer(); // memory storage

/*
|--------------------------------------------------------------------------
| HOMEPAGE
|--------------------------------------------------------------------------
*/

// Get complete homepage — PUBLIC
router.get("/home", homeController.getHomePage);

// Create homepage — PROTECTED
router.post(
  "/add-home",
  requireAuth,
  upload.any(),
  imageSaverMiddleware,
  homeController.createHome,
);

// Update homepage — PROTECTED
router.post(
  "/update-home/:id",
  requireAuth,
  upload.any(),
  imageSaverMiddleware,
  homeController.updateHome,
);

// Delete homepage — PROTECTED
router.post(
  "/delete-home/:id",
  requireAuth,
  upload.any(),
  imageSaverMiddleware,
  homeController.deleteHome,
);

/*
|--------------------------------------------------------------------------
| BANNER
|--------------------------------------------------------------------------
*/

router.get("/banner", homeController.getBanner);

router.post(
  "/add-banner",
  requireAuth,
  upload.any(),
  imageSaverMiddleware,
  homeController.createBanner,
);

router.post(
  "/update-banner/:id",
  requireAuth,
  upload.any(),
  imageSaverMiddleware,
  homeController.updateBanner,
);

router.post(
  "/delete-banner/:id",
  requireAuth,
  upload.any(),
  imageSaverMiddleware,
  homeController.deleteBanner,
);

/*
|--------------------------------------------------------------------------
| HOW IT WORKS
|--------------------------------------------------------------------------
*/

router.get("/how-it-works", homeController.getHowItWorks);

router.post(
  "/add-how-it-works",
  requireAuth,
  upload.any(),
  imageSaverMiddleware,
  homeController.createHowItWorks,
);

router.post(
  "/update-how-it-works/:id",
  requireAuth,
  upload.any(),
  imageSaverMiddleware,
  homeController.updateHowItWorks,
);

router.post(
  "/delete-how-it-works/:id",
  requireAuth,
  upload.any(),
  imageSaverMiddleware,
  homeController.deleteHowItWorks,
);

/*
|--------------------------------------------------------------------------
| PACKAGES SECTION
|--------------------------------------------------------------------------
*/

router.get("/packages-section", homeController.getPackagesSection);

router.post(
  "/add-packages-section",
  requireAuth,
  upload.any(),
  imageSaverMiddleware,
  homeController.createPackagesSection,
);

router.post(
  "/update-packages-section/:id",
  requireAuth,
  upload.any(),
  imageSaverMiddleware,
  homeController.updatePackagesSection,
);

router.post(
  "/delete-packages-section/:id",
  requireAuth,
  upload.any(),
  imageSaverMiddleware,
  homeController.deletePackagesSection,
);

/*
|--------------------------------------------------------------------------
| WHY SMARTLEARNER
|--------------------------------------------------------------------------
*/

router.get("/why-smartlearner", homeController.getWhySmartLearner);

router.post(
  "/add-why-smartlearner",
  requireAuth,
  upload.any(),
  imageSaverMiddleware,
  homeController.createWhySmartLearner,
);

router.post(
  "/update-why-smartlearner/:id",
  requireAuth,
  upload.any(),
  imageSaverMiddleware,
  homeController.updateWhySmartLearner,
);

router.post(
  "/delete-why-smartlearner/:id",
  requireAuth,
  upload.any(),
  imageSaverMiddleware,
  homeController.deleteWhySmartLearner,
);

/*
|--------------------------------------------------------------------------
| LOCATIONS
|--------------------------------------------------------------------------
*/

router.get("/locations", homeController.getLocations);

router.post(
  "/add-locations",
  requireAuth,
  upload.any(),
  imageSaverMiddleware,
  homeController.createLocations,
);

router.post(
  "/update-locations/:id",
  requireAuth,
  upload.any(),
  imageSaverMiddleware,
  homeController.updateLocations,
);

router.post(
  "/delete-locations/:id",
  requireAuth,
  upload.any(),
  imageSaverMiddleware,
  homeController.deleteLocations,
);

/*
|--------------------------------------------------------------------------
| RECENT PASSES  (uses students[].image — needs image middleware)
|--------------------------------------------------------------------------
*/

router.get("/recent-passes", homeController.getRecentPasses);

router.post(
  "/add-recent-passes",
  requireAuth,
  
  recentPassesImageSaver,
  homeController.createRecentPasses,
);

router.post(
  "/update-recent-passes/:id",
  requireAuth,
 
  recentPassesImageSaver,
  homeController.updateRecentPasses,
);

router.post(
  "/delete-recent-passes/:id",
  requireAuth,
  
 recentPassesImageSaver,
  homeController.deleteRecentPasses,
);

/*
|--------------------------------------------------------------------------
| TESTIMONIALS  (uses testimonials[].avatar — needs image middleware)
|--------------------------------------------------------------------------
*/

router.get("/testimonials", homeController.getTestimonials);

router.post(
  "/add-testimonials",
  
 recentPassesImageSaver,
  homeController.createTestimonials,
);

router.post(
  "/add-user-testimonials",
  requireAuth,
  
  recentPassesImageSaver,
  homeController.addTestimonial,
);

router.post(
  "/update-testimonials/:id",
  requireAuth,
  
  recentPassesImageSaver,
  homeController.updateTestimonials,
);

router.post(
  "/delete-testimonials/:id",
  requireAuth,
  
  recentPassesImageSaver,
  homeController.deleteTestimonials,
);

/*
|--------------------------------------------------------------------------
| CTA
|--------------------------------------------------------------------------
*/

router.get("/cta", homeController.getCTA);

router.post(
  "/add-cta",
  requireAuth,
  upload.any(),
  imageSaverMiddleware,
  homeController.createCTA,
);

router.post(
  "/update-cta/:id",
  requireAuth,
  upload.any(),
  imageSaverMiddleware,
  homeController.updateCTA,
);

router.post(
  "/delete-cta/:id",
  requireAuth,
  upload.any(),
  imageSaverMiddleware,
  homeController.deleteCTA,
);

module.exports = router;
