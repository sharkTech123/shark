const mongoose = require("mongoose");

const paypalOrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  firstName: { type: String, required: true, unique: false },

  createdOn: { type: Date, default: Date.now },

  lastName: { type: String, required: true, unique: false },
  city: { type: String, required: true, unique: false },
  companyName: { type: String, required: false, unique: false },
  county: { type: String, required: false, unique: false },
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
  checkout_url: { type: String },
  paymentToken: { type: String },
  paymentMethod: { type: String, required: false },
  paymentDetails: { type: Object, required: false }, // To store payment details like Stripe response
  stripePaymentId: { type: String, required: false },
});

const Paypalorder = mongoose.model("paypalOrder", paypalOrderSchema);
module.exports = Paypalorder;
