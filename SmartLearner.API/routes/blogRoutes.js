const express = require("express");
const blogController = require("../controllers/blogController");
const { requireAuth } = require("../middlewares/authMiddleware");
const multer = require("multer");
const { imageSaverMiddleware } = require("../middlewares/imageSaverMiddleware");
const router = express.Router();

// Route to create a blog
router.post(
  "/create-blog",
  imageSaverMiddleware,
 
  blogController.createBlog
);

router.get("/all-blogs", blogController.getBlogs);
router.get("/all-blogsData", blogController.getBlogsData);

router.get("/blog-list", blogController.getBlogList);

// Route to get a blog by its ID
router.get("/blog/:id", blogController.getBlogById);

// Route to update a blog by its ID
router.post(
  "/update-blog/:id",
  imageSaverMiddleware,

  blogController.updateBlog
);

// Route to delete a blog by its ID
router.post("/delete-blog/:id", blogController.deleteBlog);

router.get("/fetched-news", blogController.newsfetch);

module.exports = router;
