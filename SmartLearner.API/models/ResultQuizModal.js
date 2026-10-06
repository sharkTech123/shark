const mongoose = require("mongoose");

const ResultQuizQuestionSchema = new mongoose.Schema({
  questionId: { type: mongoose.Schema.Types.ObjectId, ref: "quizquestions" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  answer: { type: String, required: true },
  answerAttempt: { type: String, required: true },
  createdOn: { type: Date, required: true, default: Date.now },
  
});
ResultQuizQuestionSchema.index({ userId: 1, createdOn: -1 });
ResultQuizQuestionSchema.index({ questionId: 1 });

const ResultQuizQuestion = mongoose.model(
  "resultQuizQuestion",
  ResultQuizQuestionSchema
);
module.exports = ResultQuizQuestion;
