const mongoose = require("mongoose");

const homeCtaSchema = new mongoose.Schema(
  {
    homeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Home",
      required: true,
      unique: true,
      index: true,
    },

    subHeading: String,

    heading: String,

    description: String,

    primaryButton: {
      text: String,
      link: String,
    },

    secondaryButton: {
      text: String,
      link: String,
    },
  },
  {
    timestamps: true,
  },
);

const HomeCTA = mongoose.model("HomeCTA", homeCtaSchema);

module.exports = HomeCTA;
