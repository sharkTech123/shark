const mongoose = require("mongoose");

const homeWhySmartLearnerSchema = new mongoose.Schema(
  {
    homeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Home",
      required: true,
      unique: true,
      index: true,
    },

    subHeading: {
      type: String,
      default: "Why SmartLearner",
    },

    heading: {
      type: String,
      default: "The only driving school you'll need.",
    },

    description: {
      type: String,
      default:
        "Built around how learners actually learn — clear pricing, patient instructors, and tools to practise theory whenever you want.",
    },

    features: [
      {
        title: String,
        description: String,
        icon: String,
        order: Number,
      },
    ],
  },
  {
    timestamps: true,
  },
);

const HomeWhySmartLearner = mongoose.model(
  "HomeWhySmartLearner",
  homeWhySmartLearnerSchema,
);

module.exports = HomeWhySmartLearner;
