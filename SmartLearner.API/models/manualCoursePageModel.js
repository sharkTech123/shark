const mongoose = require("mongoose");

/*
|--------------------------------------------------------------------------
| SUB-SCHEMAS
|--------------------------------------------------------------------------
*/

const infoCardSchema = new mongoose.Schema(
  {
    icon: {
      type: String,
      enum: ["Clock", "ShieldCheck", "CircleCheck", "Award", "Star", "MapPin"],
      default: "Clock",
    },
    label: { type: String, default: "" }, // e.g. "Duration"
    value: { type: String, default: "" }, // e.g. "5 hours"
  },
  { _id: false },
);

const relatedCourseSchema = new mongoose.Schema(
  {
    category: { type: String, default: "" }, // "Manual", "Automatic", "Instructor"...
    tag: { type: String, default: "" }, // "Popular" — leave blank to hide
    title: { type: String, required: true },
    description: { type: String, default: "" },
    price: { type: String, required: true },
    originalPrice: { type: String, default: "" },
    duration: { type: String, default: "" },
    link: { type: String, default: "/courses" }, // e.g. "/courses/manual-taster"
  },
  { _id: false },
);

const buttonSchema = new mongoose.Schema(
  {
    text: { type: String, default: "" },
    link: { type: String, default: "" },
  },
  { _id: false },
);

/*
|--------------------------------------------------------------------------
| COURSE PAGE SCHEMA
|--------------------------------------------------------------------------
| One document per course detail page (e.g. slug: "manual-beginner").
| Covers every static field seen across all course HTML pages.
*/

const manualCoursePageSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      index: true,
      trim: true,
      lowercase: true,
    },

    isActive: { type: Boolean, default: true },

    // ---- Back link ----
    backLink: {
      type: buttonSchema,
      default: () => ({ text: "Back to courses", link: "/courses" }),
    },

    // ---- Hero ----
    category: { type: String, default: "" }, // pill text e.g. "Manual"
    title: { type: String, required: true },
    description: { type: String, default: "" },

    // ---- What's included ----
    includesLabel: { type: String, default: "What's included" },
    includes: { type: [String], default: [] },

    // ---- Info cards row (Duration / Cover / Refundable etc.) ----
    infoCards: { type: [infoCardSchema], default: [] },

    // ---- Pricing sidebar ----
    price: { type: String, default: "" }, // "£90"
    originalPrice: { type: String, default: "" }, // "£190"
    savingsBadge: { type: String, default: "" }, // "Save £100"

    // Product/package reference for "Add to cart" — intentionally left
    // empty here. The storefront's existing product API supplies this
    // at render time; the CMS never creates or edits product data.
    productId: { type: String, default: "" },

    primaryButtonText: { type: String, default: "Add to cart" },
    secondaryButton: {
      type: buttonSchema,
      default: () => ({ text: "Ask a question", link: "/contact" }),
    },
    footnote: {
      type: String,
      default:
        "Secure checkout. We'll phone within one working day to arrange your first lesson.",
    },

    // ---- Related / "You might also like" ----
    relatedLabel: { type: String, default: "You might also like" },
    relatedHeading: { type: String, default: "More options" },
    relatedCourses: { type: [relatedCourseSchema], default: [] },
  },
  { timestamps: true },
);

const ManualCoursePage = mongoose.model(
  "ManualCoursePage",
  manualCoursePageSchema,
);

module.exports = ManualCoursePage;
