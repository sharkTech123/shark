const mongoose = require("mongoose");

const blogsSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  blogName: {
    type: String,
    required: true,
   
  },
  description: {
    type: String,
    required: true,
   
  },
  content: {
    type: String,
    required: true,
  },
  shortContent: {
    type: String,
    required: true,
   
  },
  image: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

const Blogs = mongoose.model("Blogs", blogsSchema);

module.exports = Blogs;
