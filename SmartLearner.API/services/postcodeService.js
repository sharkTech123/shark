const Postcode = require("../models/postcodeModel");

class PostcodeService {
  async createPostcodeAsync(postcodeData) {
    try {
      const postcode = await Postcode.create(postcodeData);
      const totalCount = await Postcode.countDocuments();
      const resultObject = {
        message: "Added successfully",
        statusCode: 201,
        success: true,
        data: { postcode, totalCount }
      };
      return resultObject;
    } catch (err) {
      throw new Error("Could not create postcode");
    }
  }

  async getPostcodesAsync(pageNumber, pageSize, query) {
    try {
      const skip = (pageNumber - 1) * (pageSize || 20);
      let filter = {};
      if (query) {
        const regex = new RegExp(query, "i");
        filter.$or = [{ code: regex }, { area: regex }];
      }
      const totalCount = await Postcode.countDocuments(filter);
      const postcodes = await Postcode.find(filter).skip(skip).limit(pageSize || 20);

      const resultObject = {
        message: "Fetched successfully",
        statusCode: 201,
        success: true,
        data: { postcodes, totalCount },
      };

      return resultObject;
    } catch (err) {
      throw new Error("Could not fetch postcodes");
    }
  }

  async getPostcodeListAsync() {
    try {
      const postcodes = await Postcode.find();

      const resultObject = {
        success: true,
        message: "All postcodes fetched successfully",
        data: postcodes,
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

  async getPostcodeByIdAsync(postcodeId) {
    try {
      const postcode = await Postcode.findById(postcodeId);
      const resultObject = {
        success: true,
        message: "",
        data: postcode,
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

  async updatePostcodeAsync(postcodeId, postcodeData) {
    try {
      const postcode = await Postcode.findByIdAndUpdate(postcodeId, postcodeData, { new: true });
      const resultObject = {
        message: "Updated successfully",
        statusCode: 201,
        success: true,
        data: { postcode },
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

  async deletePostcodeAsync(postcodeId) {
    try {
      await Postcode.findByIdAndDelete(postcodeId);
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

module.exports = new PostcodeService();
