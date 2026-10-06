const Role = require("../models/roleModel");

class RoleService {
  async createRoleAsync(roleData) {
    try {
      const role = await Role.create(roleData);
      const totalCount = await Role.countDocuments();
      const resultObject = {
        message: "Added successfully",
        statusCode: 201,
        success: true,
        data: { role, totalCount }
      };
      return resultObject;
    } catch (err) {
      throw new Error("Could not create role");
    }
  }

  async getRolesAsync(pageNumber, pagesize, query) {
    try {
      const skip = (pageNumber - 1) * (pagesize || 20);
      let filter = {};
      if (query) {
        const regex = new RegExp(query, "i");
        filter.$or = [{ name: regex }];
      }
      const totalCount = await Role.countDocuments(filter);
      const roles = await Role.find(filter).skip(skip).limit(pagesize || 20);

      const resultObject = {
        message: "Fetched successfully",
        statusCode: 201,
        success: true,
        data: { roles, totalCount },
      };

      return resultObject;
    } catch (err) {
      throw new Error("Could not fetch roles");
    }
  }

  async getRoleListAsync() {
    try {
      const roles = await Role.find();

      const resultObject = {
        success: true,
        message: "All roles fetched successfully",
        data: roles,
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

  async getRoleByIdAsync(roleId) {
    try {
      const role = await Role.findById(roleId);
      const resultObject = {
        success: true,
        message: "",
        data: role,
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

  async getRoleByNameAsync(roleName) {
    try {
      const role = await Role.findOne({ name: roleName });
      return role;
    } catch (err) {
      throw new Error("Could not fetch role");
    }
  }

  async updateRoleAsync(roleId, roleData) {
    try {
      const role = await Role.findByIdAndUpdate(roleId, { name: roleData.name }, {
        new: true,
      });
      const resultObject = {
        message: "Updated successfully",
        statusCode: 201,
        success: true,
        data: { role },
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

  async deleteRoleAsync(roleId) {
    try {
      await Role.findByIdAndDelete(roleId);
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

module.exports = new RoleService();
