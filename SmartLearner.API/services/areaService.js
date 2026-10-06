const Area = require("../models/areaModal");

class AreaService {
  async createAreaAsync(areaData) {
    try {
      const area = await Area.create(areaData);
      const totalCount = await Area.countDocuments();
      const resultObject = {
        message: "Added successfully",
        statusCode: 201,
        success: true,
        data: { area, totalCount }
      };
      return resultObject;
    } catch (err) {
      throw new Error("Could not create area");
    }
  }

  async getAreasAsync(pageNumber, pageSize, query) {
    try {
      const skip = (pageNumber - 1) * (pageSize || 20);
      let filter = {};
      if (query) {
        const regex = new RegExp(query, "i");
        filter.$or = [{ name: regex }, { description: regex }];
      }
      const totalCount = await Area.countDocuments(filter);
      const areas = await Area.find(filter).skip(skip).limit(pageSize || 20);

      const resultObject = {
        message: "Fetched successfully",
        statusCode: 201,
        success: true,
        data: { areas, totalCount },
      };

      return resultObject;
    } catch (err) {
      throw new Error("Could not fetch areas");
    }
  }

  async getAreaListAsync() {
    try {
      const areas = await Area.find();

      const resultObject = {
        success: true,
        message: "All areas fetched successfully",
        data: areas,
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

  async getAreaByIdAsync(areaId) {
    try {
      const area = await Area.findById(areaId);
      const resultObject = {
        success: true,
        message: "",
        data: area,
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

  async updateAreaAsync(areaId, areaData) {
    try {
      const area = await Area.findByIdAndUpdate(areaId, areaData, { new: true });
      const resultObject = {
        message: "Updated successfully",
        statusCode: 201,
        success: true,
        data: { area },
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

  async deleteAreaAsync(areaId) {
    try {
      await Area.findByIdAndDelete(areaId);
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

module.exports = new AreaService();
