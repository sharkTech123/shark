const mongoose = require("mongoose");

const LiveChatSessionSchema = new mongoose.Schema({
  sessionId: { type: String, required: true, unique: true },
  email: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("LiveChatSession", LiveChatSessionSchema);
