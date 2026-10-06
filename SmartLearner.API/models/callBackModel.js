const mongoose = require("mongoose");

const CallBackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  message: { type: String, required: true },
});
const CallBack = mongoose.model("CallBack", CallBackSchema);
module.exports = CallBack;
