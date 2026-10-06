const mongoose = require("mongoose");

const QuizQuestionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  questionImage: { type: String },
  description: { type: String },
  option: { type: Array, required: true },
  optionImage: { type: Array, required: true },
  band: { type: String}, 
  answer: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'quizCategory' },
});
const QuizQuestion = mongoose.model("quizQuestion", QuizQuestionSchema);
module.exports = QuizQuestion;
