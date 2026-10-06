const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, },
  createdOn: { type: Date, required: true, default: Date.now },
  isEmailVerified: { type: Boolean, required: true, default: false },
  isActive: { type: Boolean, required: true, default: false },
  activatedOn: { type: Boolean },
  isUpdated: { type: Boolean, required: true, default: false },
  modifiedOn: { type: Date },
  isDeleted: { type: Boolean, required: true, default: false },
  subscription: { type: mongoose.Schema.Types.ObjectId,ref: "Plans"},
  deletedOn: { type: Date },
  isBcryptHashed: { type: Boolean, required: true, default: false },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date }, 
});
const User = mongoose.model("User", userSchema);
module.exports = User;
