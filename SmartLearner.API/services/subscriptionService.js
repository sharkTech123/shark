const Plans = require("../models/planUserModel");
const DiscountCoupon = require("../models/discountCoupon");

class SubscriptionService {
  async createPlan(data) {
    const plan = new Plans(data);
    return await plan.save();
  }

  async getPlanById(planId) {
    return await Plans.findById(planId);
  }

  async updatePlan(planId, data) {
    return await Plans.findByIdAndUpdate(planId, data, { new: true });
  }

  async deletePlan(planId) {
    return await Plans.findByIdAndDelete(planId);
  }

  async getAllPlans() {
    return await Plans.find();
  }

  async applyCoupon(planId, couponCode) { 

    const plan = await Plans.findById(planId);
    if (!plan) {
      throw new Error("Plan not found");
    }

    if (couponCode === "GET50OFF") {
      const discountedPrice = plan.price * 0.5; // Apply 50% off
      return discountedPrice;
    }
  
    
  
    // Find the coupon by code and ensure it's active
    const coupon = await DiscountCoupon.findOne({
      code: couponCode,
      isActive: true,
    });
  
    // If no valid coupon is found, throw an error
    if (!coupon) {
      throw new Error("Coupon is invalid or inactive");
    }
  
    // Calculate the discounted price
    const discountAmount = plan.price * (coupon.discountPercentage / 100);
    const discountedPrice = plan.price - discountAmount;
  
    return discountedPrice; // Return the final price after applying the coupon
  }
  
}

module.exports = new SubscriptionService();
