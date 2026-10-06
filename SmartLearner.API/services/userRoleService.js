const UserRole = require("../models/userRoleModel");

class UserRoleService {
  async assignRoleToUserAsync(userId, roleId) {
    try {
      await UserRole.create({ userId, roleId });
    } catch (err) {
      throw new Error("Could not assign role to user");
    }
  }

  async getUserRoleAsync(userId) {
    try {
      const userRole = await UserRole.findOne({ userId });
      return userRole;
    } catch (err) {
      throw new Error("Could not fetch user roles");
    }
  }

  async removeUserRole(userId, roleId) {
    try {
      await UserRole.deleteOne({ userId, roleId });
    } catch (err) {
      throw new Error("Could not remove user role");
    }
  }
}

module.exports = new UserRoleService();
