const Plans = require("../models/planUserModel");
const subscriptionService = require("../services/subscriptionService");

class SubscriptionController {
  // Add a new subscription plan
  async createPlan(req, res) {
    try {
      const plan = await subscriptionService.createPlan(req.body);
      res.status(201).json(plan);
    } catch (err) {
      next(err);
    }
  }
  // Get all free trial plans
  async getPlanById(req, res) {
    try {
      const { id, couponCode } = req.params;

      const plan = await Plans.findById(id);
      if (!plan) {
        return res.status(404).json({ error: 'Plan not found' });
      }

      // If a coupon code is provided, apply the coupon
      let price = plan.price;
      if (couponCode) {
        const discountedPrice = await subscriptionService.applyCoupon(id, couponCode);
        price = discountedPrice; // Apply the discount
      }

      return res.status(200).json({ plan, price });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: error.message });
    }
  }

  async updatePlan(req, res) {
    try {
      const plan = await subscriptionService.updatePlan(req.params.id, req.body);
      res.status(200).json(plan);
    } catch (err) {
      next(err);
    }
  }


  async deletePlan(req, res) {
    try {
      const result=  await subscriptionService.deletePlan(req.params.id);
  res.json(result);
    } catch (err) { 
      next(err);
    }
  }
  
  async getAllPlan(req, res) {
    try {
      const plans = await subscriptionService.getAllPlans();
      res.status(200).json(plans);
    } catch (err) { 
      next(err);
    }
  }
// //////////////////////////////////////////////////////////////////////////
  
}

module.exports = new SubscriptionController();
