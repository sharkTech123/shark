const mongoose = require("mongoose");

const homeRecentPassesSchema = new mongoose.Schema(
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
      default: "Recent passes"
    },

    heading: {
      type: String,
      default: "Real pupils. Real passes."
    },

    description: {
      type: String,
      default:
        "A few of the latest faces to finish with us. Want yours up here next? Browse our packages and we'll be in touch."
    },

    students: [
      {
        name: String,
        location: String,
        message: String,
        image: String,
        order: Number
      }
    ]
  },
  {
    timestamps: true
  }
);



const HomeRecentPasses = mongoose.model("HomeRecentPasses", homeRecentPassesSchema);

module.exports = HomeRecentPasses;
