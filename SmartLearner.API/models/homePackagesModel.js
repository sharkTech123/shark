const mongoose = require("mongoose");

const packageItemSchema = new mongoose.Schema(
  {
    category: { type: String, default: "" }, // "Automatic", "Manual", "Instructor", "Intensive"
    tag: { type: String, default: "" }, // "POPULAR" — leave blank to hide
    featured: { type: Boolean, default: false }, // true = amber glow highlight (like PDI card)
    title: { type: String, required: true },
    description: { type: String, default: "" },
    price: { type: String, required: true }, // "£120"
    originalPrice: { type: String, default: "" }, // "£180" — leave blank to hide strikethrough
    duration: { type: String, default: "" }, // "5 hours"
    link: { type: String, default: "/courses" },
  },
  { _id: false },
);

const homePackagesSchema = new mongoose.Schema(
  {
    homeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Home",
      required: true,
      unique: true,
      index: true,
    },

    subHeading: { type: String, default: "Our packages" },
    heading: { type: String, default: "Pick the way that suits you." },
    description: {
      type: String,
      default:
        "Whether you want to take your time, hit it hard in a week, or hop into an automatic — there's a package for it.",
    },
    buttonText: { type: String, default: "See all packages →" },
    buttonLink: { type: String, default: "/courses" },

    packages: { type: [packageItemSchema], default: [] },
  },
  { timestamps: true },
);

const HomePackages = mongoose.model("HomePackages", homePackagesSchema);
module.exports = HomePackages;
