const Course = require("../models/manualCoursePageModel");

/*
|--------------------------------------------------------------------------
| COURSE PAGE SERVICE
|--------------------------------------------------------------------------
*/

/**
 * Get all courses (admin list view — includes inactive)
 */
const getAllCourses = async () => {
  return await Course.find().sort({ createdAt: -1 });
};

/**
 * Get single course by slug (public storefront)
 */
const getCourseBySlug = async (slug) => {
  return await Course.findOne({
    slug: slug.toLowerCase(),
    isActive: true,
  });
};

/**
 * Get single course by ID (admin edit view)
 */
const getCourseById = async (id) => {
  return await Course.findById(id);
};

/**
 * Create a new course page
 */
const createCourse = async (data) => {
  if (!data.slug) {
    throw new Error("A slug is required to create a course page");
  }

  const existing = await Course.findOne({ slug: data.slug.toLowerCase() });

  if (existing) {
    throw new Error(`A course page with slug "${data.slug}" already exists`);
  }

  return await Course.create({
    ...data,
    slug: data.slug.toLowerCase(),
  });
};

/**
 * Update a course page
 */
const updateCourse = async (id, data) => {
  const updateData = { ...data };

  // Never allow slug collisions on update
  if (updateData.slug) {
    updateData.slug = updateData.slug.toLowerCase();

    const existing = await Course.findOne({
      slug: updateData.slug,
      _id: { $ne: id },
    });

    if (existing) {
      throw new Error(`A course page with slug "${updateData.slug}" already exists`);
    }
  }

  return await Course.findByIdAndUpdate(
    id,
    { $set: updateData },
    { new: true, runValidators: true }
  );
};

/**
 * Delete a course page
 */
const deleteCourse = async (id) => {
  return await Course.findByIdAndDelete(id);
};

module.exports = {
  getAllCourses,
  getCourseBySlug,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};