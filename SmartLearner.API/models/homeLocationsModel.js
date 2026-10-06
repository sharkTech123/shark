const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    subLocation: {
      type: String,
      required: true,
      trim: true,
    },
    link: {
      type: String,
      required: true,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  { _id: true },
);

const homeLocationSchema = new mongoose.Schema(
  {
    homeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Home",
      required: true,
      unique: true,
      index: true, // ✅ added so service can link it
    },

    subheading: {
      type: String,
      required: true,
      trim: true,
    },
    heading: {
      type: String,
      required: true,
      trim: true,
    },
    locations: {
      type: [locationSchema],
      default: [],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

const HomeLocation = mongoose.model("HomeLocation", homeLocationSchema);

module.exports = HomeLocation;
