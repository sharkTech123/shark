const mongoose = require("mongoose");

const quizCategoryModel = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  createdOn: { type: Date, required: true, default: Date.now }
});
const QuizCategoryModel = mongoose.model("quizCategory", quizCategoryModel);
module.exports = QuizCategoryModel;
