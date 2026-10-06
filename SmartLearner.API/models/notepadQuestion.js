const mongoose = require("mongoose");

const notepadQuestionSchema = new mongoose.Schema({
  module: { type: String },
  notepadQuestion: { type: String },
});

const NotepadUserQuestion = mongoose.model(
  "NotepadUserQuestion",
  notepadQuestionSchema
);
module.exports = NotepadUserQuestion;
