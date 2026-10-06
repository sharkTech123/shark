const courseService = require("../services/manualCoursePageService");

const handleError = (res, error, fallbackMessage) => {
  return res.status(400).json({
    success: false,
    message: error?.message || fallbackMessage,
  });
};

/**
 * GET /api/courses
 * Admin list view
 */
const getAllCourses = async (req, res) => {
  try {
    const data = await courseService.getAllCourses();
    return res.status(200).json({ success: true, data });
  } catch (error) {
    return handleError(res, error, "Failed to fetch courses");
  }
};

/**
 * GET /api/courses/slug/:slug
 * Public storefront — fetch by slug
 */
const getCourseBySlug = async (req, res) => {
  try {
    const data = await courseService.getCourseBySlug(req.params.slug);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Course page not found",
      });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return handleError(res, error, "Failed to fetch course page");
  }
};

/**
 * GET /api/courses/:id
 * Admin edit view — fetch by ID
 */
const getCourseById = async (req, res) => {
  try {
    const data = await courseService.getCourseById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Course page not found",
      });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return handleError(res, error, "Failed to fetch course page");
  }
};

/**
 * POST /api/courses/add-course
 */
const createCourse = async (req, res) => {
  try {
    const data = await courseService.createCourse(req.body);

    return res.status(201).json({
      success: true,
      message: "Course page created successfully",
      data,
    });
  } catch (error) {
    return handleError(res, error, "Failed to create course page");
  }
};

/**
 * POST /api/courses/update-course/:id
 */
const updateCourse = async (req, res) => {
  try {
    const data = await courseService.updateCourse(req.params.id, req.body);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Course page not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Course page updated successfully",
      data,
    });
  } catch (error) {
    return handleError(res, error, "Failed to update course page");
  }
};

/**
 * POST /api/courses/delete-course/:id
 */
const deleteCourse = async (req, res) => {
  try {
    const data = await courseService.deleteCourse(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Course page not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Course page deleted successfully",
    });
  } catch (error) {
    return handleError(res, error, "Failed to delete course page");
  }
};

module.exports = {
  getAllCourses,
  getCourseBySlug,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};