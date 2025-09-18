const Blog = require("../models/Blog");

// Get all published blogs or a single published blog by ID
const getPublishedBlogs = async (req, res) => {
  try {
    const { id } = req.query;

    if (id) {
      const blog = await Blog.findById(id);
      if (!blog || blog.status !== "published") {
        return res.status(404).json({ success: false, message: "Published blog not found" });
      }
      return res.status(200).json(blog);
    }

    const publishedBlogs = await Blog.find({ status: "published" }).sort({ createdAt: -1 });
    res.status(200).json(publishedBlogs);
  } catch (error) {
    console.error("Error fetching published blogs:", error);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

// Create a published blog
const createPublishedBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    const publishedBlog = await Blog.create({
      title: title || "Untitled Blog",
      content: content || "",
      status: "published",
    });
    res.status(201).json(publishedBlog);
  } catch (error) {
    console.error("Error creating published blog:", error);
    res.status(400).json({ success: false, error });
  }
};

// Update a published blog by ID
const updatePublishedBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, content, status: "published" },
      { new: true, runValidators: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ success: false, message: "Published blog not found" });
    }

    res.status(200).json(updatedBlog);
  } catch (error) {
    console.error("Error updating published blog:", error);
    res.status(400).json({ success: false, error });
  }
};

// Delete a published blog by ID
const deletePublishedBlog = async (req, res) => {
  try {
    const { id } = req.params;
    await Blog.findByIdAndDelete(id);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error deleting published blog:", error);
    res.status(400).json({ success: false });
  }
};

module.exports = {
  getPublishedBlogs,
  createPublishedBlog,
  updatePublishedBlog,
  deletePublishedBlog,
};
