const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  firstName: { type: String, required: true, unique: false },
  orderNo: { type: String, required: true, unique: true },
  createdOn: { type: Date, required: true, default: Date.now },
  orderOn: { type: Date, required: true, default: Date.now },
  lastName: { type: String, required: true, unique: false },
  orderPaymentStatus: {
    type: String,
    required: false,
    unique: false,
    default: "Pending",
  },
  city: { type: String, required: true, unique: false },
  companyName: { type: String, required: false },
  extraCharges: { type: Number },
  county: { type: String, required: false },
  email: { type: String, required: true, unique: false },
  myCart: { type: Array, required: true, unique: false },
  ordernotes: { type: String, required: false },
  phoneNumber: { type: String, required: true, unique: false },
  postcode: { type: String, required: true, unique: false },
  serviceCharge: { type: Number, required: true, unique: false },
  streetAddress1: { type: String, required: true, unique: false },
  streetAddress2: { type: String, required: false, unique: false },
  subtotal: { type: Number, required: true, unique: false },
  total: { type: Number, required: true, unique: false },
  status: {
    type: String,
    enum: ["pending", "completed", "failed"],
    default: "pending",
  },
});

const Order = mongoose.model("order", orderSchema);
module.exports = Order;
