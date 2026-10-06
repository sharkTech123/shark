// models/ChatMessage.js
const mongoose = require("mongoose");

const botChatMessageSchema = new mongoose.Schema({
  sessionId: {
    type: String,
    required: true,
  },
  sender: {
    type: String,
    enum: ["user", "admin"],
    required: true,
  },
  joinAs: {
    type: String,
  },
  pass: {
    type: Boolean,
    default: false,
  },
  login: {
    type: Boolean,
    default: false,
  },
  content: {
    type: mongoose.Schema.Types.Mixed, // to allow both string and objects (like productList)
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("BotChatMessage", botChatMessageSchema);
