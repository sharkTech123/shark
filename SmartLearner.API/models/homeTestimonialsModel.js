const mongoose = require("mongoose");

const homeTestimonialsSchema = new mongoose.Schema(
  {
    homeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Home",
      required: true,
      unique: true,
      index: true
    },

    subHeading: {
      type: String,
      default: "Testimonials"
    },

    heading: {
      type: String,
      default: "What our pupils say."
    },

    description: {
      type: String,
      default: ""
    },

    testimonials: [
      {
        name: String,
        location: String,
        message: String,
        rating: {
          type: Number,
          min: 1,
          max: 5,
          default: 5
        },
        avatar: String,
        order: Number
      }
    ]
  },
  {
    timestamps: true
  }
);



const HomeTestimonials = mongoose.model("HomeTestimonials", homeTestimonialsSchema);

module.exports = HomeTestimonials;