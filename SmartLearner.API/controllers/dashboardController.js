const { request } = require("express");
const accountService = require("../services/accountService");
const dashboardService = require("../services/dashboardService");
const quizService = require("../services/quizService");
const roleService = require("../services/roleService");
const userRoleServices = require("../services/userRoleService");

class dashboardController {
  async getDashboardCards(req, res, next) {
    try {
      const { page, pagesize, search } = req.query;
      const response = await dashboardService.getDashboardCards();
      res.status(201).json(response);
    } catch (err) {
      next(err);
    }
  }
  async getCategoryCards(req, res, next) {
    try {

      
      const response = await quizService.getQuizCategoryAsync();
      res.status(201).json(response);
    } catch (err) {
      next(err);
    }
  }



  
  async getCategoryCardsByQuestion(req, res, next) {
    try {

      
      const response = await quizService.getQuizCategoryByQuestionAsync();
      res.status(201).json(response);
    } catch (err) {
      next(err);
    }
  }
  async getModuleCards(req, res, next) {
    try {
      
      const response = await quizService.getQuizModuleAsync(req.params.id);
      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }
  async getMySubsciption(req, res, next) {
    try {
      
      const response = await accountService.getUserSubscription(req.userId);
      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }
  async CheckoutMySubsciption(req, res, next) {
    try {

      const reqData=req.body
      
      const response = await accountService.checkoutUserSubscription(req.userId,reqData);
      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }
  async getMySubscriptionType(req, res, next) {
    try {
      
      const response = await accountService.getUserSubscriptionType(req.userId);
      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }

}

module.exports = new dashboardController();
