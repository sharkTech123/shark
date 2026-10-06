const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
  planname: { type: String, required: true, },
  price: { type: Number, required: true },
  planCategory: { type: String, required: true },
  duration: { type: Number, required: true },
  features: { type: Array,  },
});

const Plans = mongoose.model("Plans", planSchema);
module.exports = Plans;
