const mongoose = require("mongoose");

const notepadAnswereSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  notepadQuestionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "NotepadUserQuestion",
  },
  notepadAnswere: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const NotepadAnswere = mongoose.model("NotepadAnswere", notepadAnswereSchema);
module.exports = NotepadAnswere;
