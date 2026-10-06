const mongoose = require("mongoose");

const quizModuleModel = new mongoose.Schema({
  moduleName: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'quizCategory' },
  createdOn: { type: Date, required: true, default: Date.now },
});
const QuizModuleModel = mongoose.model("quizModule", quizModuleModel);
module.exports = QuizModuleModel;
