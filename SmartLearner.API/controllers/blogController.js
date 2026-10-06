const blogService = require("../services/blogService");

class BlogController {
  // Create a new blog
  async createBlog(req, res, next) {
    try {
      const result = await blogService.createBlogAsync(req.body);
      res.status(201).json(result);
    } catch (err) {
      next(err);
    }
  }

  // Get paginated blogs with search (if any)
  async getBlogs(req, res, next) {
    try {
      const { page, pageSize, search } = req.query;
      const blogs = await blogService.getBlogsAsync(page, pageSize, search);
      res.json(blogs);
    } catch (err) {
      next(err);
    }
  }
  async getBlogsData(req, res, next) {
    try {
      const blogs = await blogService.getBlogs();
      res.json(blogs);
    } catch (err) {
      next(err);
    }
  }

  // Get a list of all blogs (no pagination)
  async getBlogList(req, res, next) {
    try {
      const blogs = await blogService.getBlogListAsync();
      res.json(blogs);
    } catch (err) {
      next(err);
    }
  }

  // Get a blog by its ID
  async getBlogById(req, res, next) {
    try {
      const blog = await blogService.getBlogByIdAsync(req.params.id);
      res.json(blog);
    } catch (err) {
      next(err);
    }
  }

  // Update a blog by its ID
  async updateBlog(req, res, next) {
    try {
      console.log(req.body);
      const blog = await blogService.updateBlogAsync(req.params.id, req.body);
      res.json(blog);
    } catch (err) {
      next(err);
    }
  }

  // Delete a blog by its ID
  async deleteBlog(req, res, next) {
    try {
      const result = await blogService.deleteBlogAsync(req.params.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async newsfetch(req, res, next) {
    try {
      const result = await blogService.newsAsync();
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new BlogController();
