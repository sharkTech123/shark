const mongoose = require('mongoose');

const drivenFormSchema = new mongoose.Schema({
  drivenBefore: { type: String, required: true },
  preferredType: { type: String, required: true },
  postcode: { type: String, required: true },
});

const DrivenBefore =  mongoose.model("DrivenBefore", drivenFormSchema);

module.exports = DrivenBefore;
