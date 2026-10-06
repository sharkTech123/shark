const chatMessage = require("../models/chatMessage");
const LiveChatSession = require("../models/LiveChatSession");

const chatSocket = (io) => {
  io.on("connection", (socket) => {
    console.log("🔌 New client connected");
    socket.on("joinRoom", ({ sessionId }) => {
      socket.join(sessionId);
      console.log(`User joined room: ${sessionId}`);
    });

    socket.on("adminJoin", ({ sessionId }) => {
      socket.join(sessionId);
      console.log(`Admin joined room: ${sessionId}`);
    });

    socket.on("sendMessage", async (msg) => {
      io.to(msg.sessionId).emit("receiveMessage", msg);

      // Save message in DB
      try {
        await chatMessage.create({
          sessionId: msg.sessionId,
          email: msg.email,
          sender: msg.sender,
          content: msg.content,
        });
      } catch (err) {
        console.error("❌ Failed to save chat message", err);
      }
    });

    socket.on("newChatRequest", async ({ sessionId, email }) => {
      try {
        await LiveChatSession.create({ sessionId, email });

        io.emit("newChatRequest", { sessionId, email });
      } catch (error) {
        console.error("❌ Failed to create session:", error);
      }
    });

    socket.on("endChates", ({ sessionId }) => {
      console.log("Server received endChates for session:", sessionId);
      const systemMsg = "Chat has ended.";
      io.to(sessionId).emit("chatEnded", { sessionId, message: systemMsg });
      io.emit("chatEndedAdmin", { sessionId, message: systemMsg }); // Notify admin
    });

    socket.on("endChat", async ({ sessionId }) => {
      try {
        await LiveChatSession.deleteOne({ sessionId });
        io.to(sessionId).emit("chatEnded", { sessionId });
        io.emit("chatEndedAdmin", { sessionId }); // Notify admin UI to remove
      } catch (err) {
        console.error("Error ending chat:", err);
      }
    });
  });
};

module.exports = chatSocket;
