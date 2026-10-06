const roleService = require("../services/roleService");


class RoleController {
  async createRole(req, res, next) {
    try {
      const { name } = req.body;
      const lowerCaseName = name.toLowerCase();
      const role = await roleService.createRoleAsync({ name: lowerCaseName });
      res.status(201).json(role);
    } catch (err) {
      next(err);
    }
  }

  async getRoles(req, res, next) {
    try {
      const { page, pagesize, search } = req.query;
      const roles = await roleService.getRolesAsync(page, pagesize, search);
      res.json(roles);
    } catch (err) {
      next(err);
    }
  }

  async getRoleList(req, res, next) {
    try {
      const roles = await roleService.getRoleListAsync();
      res.json(roles);
    } catch (err) {
      next(err);
    }
  }

  async getRoleById(req, res, next) {
    try {
      const role = await roleService.getRoleByIdAsync(req.params.id);
      res.json(role);
    } catch (err) {
      next(err);
    }
  }

  async updateRole(req, res, next) {
    try {
      const role = await roleService.updateRoleAsync(req.params.id, req.body);
      res.json(role);
    } catch (err) {
      next(err);
    }
  }

  async deleteRole(req, res, next) {
    try {
      const result = await roleService.deleteRoleAsync(req.params.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
  
}

module.exports = new RoleController();
