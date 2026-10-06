// 📁 models/ChatMessage.js
const mongoose = require("mongoose");

const ChatMessageSchema = new mongoose.Schema({
  sessionId: String,
  sender: String, // "user" or "admin"
  content: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("ChatMessage", ChatMessageSchema);
