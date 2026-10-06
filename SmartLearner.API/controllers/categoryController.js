const categoryService = require("../services/categoryService");

class CategoryController {
  async createCategory(req, res, next) {
    try {
      const categoryData = req.body;
      console.log("2173821681716", categoryData);
      const category = await categoryService.createCategoryAsync(categoryData);
      res.status(201).json(category);
    } catch (err) {
      next(err);
    }
  }

  async getCategories(req, res, next) {
    try {
      const { page, pagesize, search } = req.query;
      const categories = await categoryService.getCategoriesAsync(
        page,
        pagesize,
        search
      );
      res.json(categories);
    } catch (err) {
      next(err);
    }
  }

  async getCategoryList(req, res, next) {
    try {
      const categories = await categoryService.getCategoryListAsync();
      res.json(categories);
    } catch (err) {
      next(err);
    }
  }

  async getCategoryById(req, res, next) {
    try {
      const category = await categoryService.getCategoryByIdAsync(
        req.params.id
      );
      res.json(category);
    } catch (err) {
      next(err);
    }
  }

  async updateCategory(req, res, next) {
    try {
      const category = await categoryService.updateCategoryAsync(
        req.params.id,
        req.body
      );
      res.json(category);
    } catch (err) {
      next(err);
    }
  }

  async deleteCategory(req, res, next) {
    try {
      const result = await categoryService.deleteCategoryAsync(req.params.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new CategoryController();
