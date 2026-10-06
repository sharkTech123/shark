const mongoose = require("mongoose");

const homeHowItWorksSchema = new mongoose.Schema(
  {
    homeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Home",
      required: true,
      index: true,
    },

    label: {
      type: String,
      default: "How it works",
    },

    heading: {
      type: String,
      default: "Three steps — and the last one is just answering the phone.",
    },

    steps: [
      {
        number: String,
        heading: String,
        description: String,
        order: Number,
      },
    ],
  },
  {
    timestamps: true,
  },
);

const HomeHowItWorks = mongoose.model("HomeHowItWorks", homeHowItWorksSchema);

module.exports = HomeHowItWorks;
