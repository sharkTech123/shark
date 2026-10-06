const express = require("express");
const router = express.Router();
const { chatbot } = require("../controllers/openAiController");
const botChatMessage = require("../models/botChatMessage");

console.log("chatbot:", chatbot);

router.post("/chat", chatbot);
router.get("/messages/:sessionId", async (req, res) => {
  try {
    const { sessionId } = req.params;
    const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);

    const messages = await botChatMessage
      .find({
        sessionId,
        timestamp: { $gte: tenMinutesAgo },
      })
      .sort({ timestamp: 1 });

    res.json({ messages });
  } catch (err) { 
    console.error("Error fetching chat history:", err);
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

module.exports = router;
