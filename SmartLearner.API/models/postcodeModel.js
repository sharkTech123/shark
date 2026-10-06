const mongoose = require("mongoose");

const postcodeSchema = new mongoose.Schema({
  postcode: { type: String },
  city: { type: String },
  country: { type: String },
});

const Postcode = mongoose.model("Postcode", postcodeSchema);

module.exports = Postcode;
