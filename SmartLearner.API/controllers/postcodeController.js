const postcodeService = require('../services/postcodeService');

class PostcodeController {
  async createPostcode(req, res, next) {
    try {
      const postcodeData = req.body;
      
      const postcode = await postcodeService.createPostcodeAsync(postcodeData);
      res.status(201).json(postcode);
    } catch (err) {
      next(err);
    }
  }

  async getPostcodes(req, res, next) {
    try {
      const { page, pagesize, search } = req.query;
      const postcodes = await postcodeService.getPostcodesAsync(page, pagesize, search);
      res.json(postcodes);
    } catch (err) {
      next(err);
    }
  }

  async getPostcodeList(req, res, next) {
    try {
      const postcodes = await postcodeService.getPostcodeListAsync();
      res.json(postcodes);
    } catch (err) {
      next(err);
    }
  }

  async getPostcodeById(req, res, next) {
    try {
      const postcode = await postcodeService.getPostcodeByIdAsync(req.params.id);
      res.json(postcode);
    } catch (err) {
      next(err);
    }
  }

  async updatePostcode(req, res, next) {
    try {
      const postcode = await postcodeService.updatePostcodeAsync(req.params.id, req.body);
      res.json(postcode);
    } catch (err) {
      next(err);
    }
  }

  async deletePostcode(req, res, next) {
    try {
      const result = await postcodeService.deletePostcodeAsync(req.params.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new PostcodeController();
