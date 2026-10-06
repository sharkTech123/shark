const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
  service: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  postcode: [{ type: String, required: true }],
  message: { type: String, required: true },
});
const Service = mongoose.model("Service", ServiceSchema);
module.exports = Service;
