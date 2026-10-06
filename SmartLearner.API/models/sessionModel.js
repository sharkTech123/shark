const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  sessionId: { type: String, required: true, unique: true },
  step: { type: String, default: "askEmail" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  guestEmail: { type: String },
});

const Session = mongoose.model("Session", sessionSchema);
module.exports = Session;
