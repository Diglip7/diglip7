const Blog = require("../models/Blog");

// Get all blogs or single blog by ID
const getBlogs = async (req, res) => {
  try {
    const { id } = req.query;
    if (id) {
      const blog = await Blog.findById(id);
      if (!blog) {
        return res.status(404).json({ success: false, message: "Blog not found" });
      }
      return res.status(200).json(blog);
    }
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Create a new blog
const createBlog = async (req, res) => {
  try {
    const { title, content, status = "draft" } = req.body;
    const blog = await Blog.create({ title, content, status });
    res.status(201).json(blog);
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(400).json({ success: false, error });
  }
};

// Update a blog by ID
const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, status } = req.body;

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, content, status },
      { new: true, runValidators: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ success: false, message: "Blog not found" });
    }

    res.status(200).json(updatedBlog);
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(400).json({ success: false, error });
  }
};

// Delete a blog by ID
const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    await Blog.findByIdAndDelete(id);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(400).json({ success: false });
  }
};

module.exports = {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
};
