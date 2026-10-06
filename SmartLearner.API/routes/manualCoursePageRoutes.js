const express = require("express");
const router = express.Router();

const courseController = require("../controllers/manualCoursePageController");
const { requireAuth } = require("../middlewares/authMiddleware"); // adjust path to your existing auth middleware
const multer = require("multer");
const upload = multer(); // adjust path to your existing multer setup
const { imageSaverMiddleware } = require("../middlewares/imageSaverMiddleware"); // adjust path

/*
|--------------------------------------------------------------------------
| PUBLIC ROUTES
|--------------------------------------------------------------------------
*/

// GET /api/courses/slug/manual-beginner  → storefront course detail page
router.get("/slug/:slug", courseController.getCourseBySlug);

/*
|--------------------------------------------------------------------------
| ADMIN ROUTES
|--------------------------------------------------------------------------
*/

// GET /api/courses  → admin list of all course pages
router.get("/all-manual", requireAuth, courseController.getAllCourses);

// GET /api/courses/:id  → admin edit view (fetch by ID)
router.get("/all-manual/:id", requireAuth, courseController.getCourseById);

router.post(
  "/add-course",
  requireAuth,
  upload.any(),
  imageSaverMiddleware,
  courseController.createCourse
);

router.post(
  "/update-course/:id",
  requireAuth,
  upload.any(),
  imageSaverMiddleware,
  courseController.updateCourse
);

router.post(
  "/delete-course/:id",
  requireAuth,
  upload.any(),
  imageSaverMiddleware,
  courseController.deleteCourse
);

module.exports = router;