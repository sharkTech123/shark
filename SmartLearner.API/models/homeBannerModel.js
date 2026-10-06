const mongoose = require("mongoose");

const homeBannerSchema = new mongoose.Schema(
  {
    homeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Home",
      required: true,
      unique: true,
      index: true,
    },

    badge: {
      type: String,
      default: "Award-winning · West Midlands · Since 2004",
    },

    heading: {
      type: String,
      default: "A quieter season to learn.",
    },

    description: {
      type: String,
      default:
        "Empty roads, patient instructors, and longer evenings ahead. Lock your spot in for the new year.",
    },

    primaryButton: {
      text: {
        type: String,
        default: "Reserve a package",
      },
      link: {
        type: String,
        default: "/courses",
      },
    },

    secondaryButton: {
      text: {
        type: String,
        default: "Talk to us first",
      },
      link: {
        type: String,
        default: "/contact",
      },
    },

    stats: [
      {
        value: String,
        label: String,
      },
    ],

    contactInfo: {
      heading: {
        type: String,
        default: "Bought a package?",
      },

      description: {
        type: String,
        default:
          "We phone within one working day to arrange lessons. No calendar maths, no scheduling apps.",
      },
    },

    trustItems: [
      {
        value: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  },
);

const HomeBanner = mongoose.model("HomeBanner", homeBannerSchema);

module.exports = HomeBanner;
