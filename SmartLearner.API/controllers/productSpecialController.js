const productSpecialService = require('../services/productSpecialService');

class ProductSpecialController {
  async createProduct(req, res, next) {
    try {
      const result = await productSpecialService.createProductAsync(req.body);
      res.status(201).json(result);
    } catch (err) {
      next(err);
    }
  }

  async getProducts(req, res, next) {
    try {
      const { page, pageSize, search } = req.query;
      const result = await productSpecialService.getProductsAsync(page, pageSize, search);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
  async getProductsCategory(req, res, next) {
    try {
      const { page, pageSize, search } = req.query;
      const result = await productSpecialService.getProductsCategoryAsync(page, pageSize, search);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }


  
  async getProductById(req, res, next) {
    try {
      const product = await productSpecialService.getProductByIdAsync(req.params.id);
      res.json(product);
    } catch (err) {
      next(err);
    }
  }

  async updateProduct(req, res, next) {
    try {
      const product = await productSpecialService.updateProductAsync(req.params.id, req.body);
      res.json(product);
    } catch (err) {
      next(err);
    }
  }

  async deleteProduct(req, res, next) {
    try {
      await productSpecialService.deleteProductAsync(req.params.id);
      res.sendStatus(204);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new ProductSpecialController();
