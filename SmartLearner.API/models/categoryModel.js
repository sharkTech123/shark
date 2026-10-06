const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  createdOn: { type: Date },
  isDeleted: { type: Boolean, default: false },
  deletedOn: { type: Date },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
