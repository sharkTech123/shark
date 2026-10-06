const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "SmartLearner Homepage",
      trim: true,
    },

    slug: {
      type: String,
      default: "home",
      unique: true,
      trim: true,
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

homeSchema.virtual("banner", {
  ref: "HomeBanner",
  localField: "_id",
  foreignField: "homeId",
  justOne: true,
});

homeSchema.virtual("howItWorks", {
  ref: "HomeHowItWorks",
  localField: "_id",
  foreignField: "homeId",
  justOne: true, // ✅ added — service treats it as single
});

homeSchema.virtual("packagesSection", {
  // ✅ renamed to match service
  ref: "HomePackages",
  localField: "_id",
  foreignField: "homeId",
  justOne: true,
});

homeSchema.virtual("whySmartLearner", {
  ref: "HomeWhySmartLearner",
  localField: "_id",
  foreignField: "homeId",
  justOne: true,
});

homeSchema.virtual("locations", {
  ref: "HomeLocation", // ✅ fixed to match model
  localField: "_id",
  foreignField: "homeId",
  justOne: true,
});

homeSchema.virtual("recentPasses", {
  ref: "HomeRecentPasses",
  localField: "_id",
  foreignField: "homeId",
  justOne: true,
});

homeSchema.virtual("testimonials", {
  ref: "HomeTestimonials",
  localField: "_id",
  foreignField: "homeId",
  justOne: true,
});

homeSchema.virtual("cta", {
  ref: "HomeCTA",
  localField: "_id",
  foreignField: "homeId",
  justOne: true,
});

homeSchema.set("toObject", {
  virtuals: true,
});

homeSchema.set("toJSON", {
  virtuals: true,
});

const Home = mongoose.model("Home", homeSchema);

module.exports = Home;
