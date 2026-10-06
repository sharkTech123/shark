const mongoose = require('mongoose');

const discountCouponSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  discountPercentage: { type: Number, required: true }, // 50% off would be 50
  isActive: { type: Boolean, default: true }, // if the coupon is still active
  expiryDate: { type: Date}, // expiration date
});

const DiscountCoupon = mongoose.model('DiscountCoupon', discountCouponSchema);

module.exports = DiscountCoupon;
