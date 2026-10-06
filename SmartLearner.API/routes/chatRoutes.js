const express = require("express");
const router = express.Router();

const LiveChatSession = require("../models/LiveChatSession");
const ChatMessage = require("../models/chatMessage");

router.get("/chats", async (req, res) => {
  try {
    const sessions = await LiveChatSession.find();
    res.json(sessions);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch sessions" });
  }
});

router.get("/:sessionId", async (req, res) => {
  const { sessionId } = req.params;
  try {
    const messages = await ChatMessage.find({ sessionId }).sort({
      timestamp: 1,
    });
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

router.post("/end", async (req, res) => {
  const { sessionId } = req.body;
  try {
    await LiveChatSession.deleteOne({ sessionId });
    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Error ending chat:", err);
    res.status(500).json({ error: "Failed to end chat" });
  }
});

module.exports = router;
