const Category = require("../models/categoryModel");

class CategoryService {
  async createCategoryAsync(categoryData) {
    try {
      const category = await Category.create(categoryData);
      console.log("shdjshdjkdhkjsa",categoryData)
      const totalCount = await Category.countDocuments();
      const resultObject = {
        message: "Added successfully",
        statusCode: 201,
        success: true,
        data: { category, totalCount }
      };
      return resultObject;
    } catch (err) {
      throw new Error("Could not create category");
    }
  }

  async getCategoriesAsync(pageNumber, pageSize, query) {
    try {
      const skip = (pageNumber - 1) * (pageSize || 20);
      let filter = {};
      if (query) {
        const regex = new RegExp(query, "i");
        filter.$or = [{ name: regex }, { description: regex }];
      }
      const totalCount = await Category.countDocuments(filter);
      const categories = await Category.find(filter).skip(skip).limit(pageSize || 20);

      const resultObject = {
        message: "Fetched successfully",
        statusCode: 201,
        success: true,
        data: { categories, totalCount },
      };

      return resultObject;
    } catch (err) {
      throw new Error("Could not fetch categories");
    }
  }

  async getCategoryListAsync() {
    try {
      const categories = await Category.find();

      const resultObject = {
        success: true,
        message: "All categories fetched successfully",
        data: categories,
      };

      return resultObject;
    } catch (err) {
      const resultObject = {
        success: false,
        message: err.message,
        data: null,
      };
      return resultObject;
    }
  }

  async getCategoryByIdAsync(categoryId) {
    try {
      const category = await Category.findById(categoryId);
      const resultObject = {
        success: true,
        message: "",
        data: category,
      };
      return resultObject;
    } catch (err) {
      const resultObject = {
        success: false,
        message: err.message,
        data: null,
      };
      return resultObject;
    }
  }

  async updateCategoryAsync(categoryId, categoryData) {
    try {
      const category = await Category.findByIdAndUpdate(categoryId, categoryData, { new: true });
      const resultObject = {
        message: "Updated successfully",
        statusCode: 201,
        success: true,
        data: { category },
      };
      return resultObject;
    } catch (err) {
      const resultObject = {
        message: err.message,
        statusCode: 400,
        success: false,
        data: null,
      };
      return resultObject;
    }
  }

  async deleteCategoryAsync(categoryId) {
    try {
      await Category.findByIdAndDelete(categoryId);
      const resultObject = {
        message: "Deleted successfully",
        statusCode: 201,
        success: true,
        data: null,
      };
      return resultObject;
    } catch (err) {
      const resultObject = {
        message: err.message,
        statusCode: 400,
        success: false,
        data: null,
      };
      return resultObject;
    }
  }
}

module.exports = new CategoryService();
