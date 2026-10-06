const mongoose = require("mongoose");

const onboardingNodeSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },
    type: {
      type: String,
      enum: ["category", "quiz", "product"],
      required: true,
      index: true,
    },
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "OnboardingNode",
      default: null,
      index: true,
    },
    // Only present on leaf nodes (type: 'quiz' | 'product').
    // MUST be a relative, internal path — validated again server-side
    // before it is ever sent to the client. Never store absolute/external URLs here.
    redirectPath: {
      type: String,
      trim: true,
      validate: {
        validator: function (value) {
          if (this.type === "category") return true; // categories don't redirect
          return (
            typeof value === "string" && /^\/[a-zA-Z0-9\-_/]*$/.test(value)
          );
        },
        message:
          'redirectPath must be a relative internal path starting with "/"',
      },
    },
    order: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
      index: true,
    },
    // Optional reference to the real Quiz/Product document, useful if you
    // want richer data (thumbnail, price, difficulty) later without changing this schema.
    refId: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: "refModel",
    },
    refModel: {
      type: String,
      enum: ["Quiz", "Product"],
    },
  },
  { timestamps: true },
);

onboardingNodeSchema.index({ parentId: 1, isActive: 1, order: 1 });


const OnboardingNode = mongoose.model(
  "OnboardingNode",
  onboardingNodeSchema
);


module.exports = OnboardingNode;
