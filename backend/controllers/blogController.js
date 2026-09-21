import Blog from "../models/Blog.js";

/**
 * @desc    Get all blogs or a single blog by query ID: /api/getblog?id=xxx
 * @route   GET /api/getblog
 * @access  Public
 */
export const getBlogs = async (req, res) => {
  try {
    const { id } = req.query;
    if (id) {
      const blog = await Blog.findById(id);
      if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });
      return res.status(200).json(blog);
    }
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

/**
 * @desc    Create a basic blog entry
 * @route   POST /api/createblog
 * @access  Public / Admin
 */
export const createBlog = async (req, res) => {
  try {
    const { title, content, status = "draft" } = req.body;
    const blog = await Blog.create({ title, content, status });
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

/**
 * @desc    Update a blog entry by ID
 * @route   PUT /api/updateblog/:id
 * @access  Public / Admin
 */
export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, status } = req.body;
    const updated = await Blog.findByIdAndUpdate(id, { title, content, status }, { new: true, runValidators: true });
    if (!updated) return res.status(404).json({ success: false, message: "Blog not found" });
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

/**
 * @desc    Delete a blog entry by ID
 * @route   DELETE /api/deleteblog/:id
 * @access  Public / Admin
 */
export const deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};


