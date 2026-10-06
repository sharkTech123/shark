const mongoose = require("mongoose");

const ChatMessageSchema = new mongoose.Schema({
  sessionId: String,
  sender: String,
  content: String,
  email: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ChatMessage", ChatMessageSchema);
