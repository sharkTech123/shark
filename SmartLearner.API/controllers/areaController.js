const areaService = require('../services/areaService');

class AreaController {
  async createArea(req, res, next) {
    try {
      const { name } = req.body;
      const lowerCaseName = name.toLowerCase();
      const area = await areaService.createAreaAsync({ name: lowerCaseName });
      res.status(201).json(area);
    } catch (err) {
      next(err);
    }
  }

  async getAreas(req, res, next) {
    try {
      const { page, pagesize, search } = req.query;
      const areas = await areaService.getAreasAsync(page, pagesize, search);
      res.json(areas);
    } catch (err) {
      next(err);
    }
  }

  async getAreaList(req, res, next) {
    try {
      const areas = await areaService.getAreaListAsync();
      res.json(areas);
    } catch (err) {
      next(err);
    }
  }

  async getAreaById(req, res, next) {
    try {
      const area = await areaService.getAreaByIdAsync(req.params.id);
      res.json(area);
    } catch (err) {
      next(err);
    }
  }

  async updateArea(req, res, next) {
    try {
      const area = await areaService.updateAreaAsync(req.params.id, req.body);
      res.json(area);
    } catch (err) {
      next(err);
    }
  }

  async deleteArea(req, res, next) {
    try {
      const result = await areaService.deleteAreaAsync(req.params.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new AreaController();
