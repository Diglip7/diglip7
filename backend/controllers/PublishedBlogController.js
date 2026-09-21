import mongoose from "mongoose";
import Blog, { generateSlug } from "../models/Blog.js";

/**
 * Helper: Find a published blog by slug OR MongoDB ObjectId with title fallback
 */
const findPublishedByIdentifier = async (id) => {
  const clean = decodeURIComponent(id).trim().toLowerCase();

  // 1. Try finding by slug (case-insensitive regex)
  let blog = await Blog.findOne({ status: "published", slug: { $regex: new RegExp(`^${clean}$`, "i") } });

  // 2. If not found and id is valid Mongo ObjectId, query by _id
  if (!blog && mongoose.Types.ObjectId.isValid(id)) {
    blog = await Blog.findById(id);
  }

  // 3. Fallback: Check title-based slug matching across published collection
  if (!blog) {
    const list = await Blog.find({ status: "published" });
    blog = list.find((b) => {
      const s = (b.slug || "").toLowerCase();
      const gen = generateSlug(b.title || "").toLowerCase();
      return s === clean || b._id.toString() === clean || gen === clean || (clean.length > 5 && (clean.startsWith(gen) || gen.startsWith(clean)));
    });
    // Auto backfill slug if missing
    if (blog && !blog.slug) {
      blog.slug = generateSlug(blog.title);
      await blog.save().catch(() => {});
    }
  }

  return blog?.status === "published" ? blog : null;
};

/**
 * @desc    Get all published blogs (or single blog if id/slug query or param provided)
 * @route   GET /api/publishedblogs
 * @access  Public
 */
export const getPublishedBlogs = async (req, res) => {
  try {
    const id = req.params.slug || req.params.id || req.query.slug || req.query.id;
    if (id) {
      const blog = await findPublishedByIdentifier(id);
      if (!blog) return res.status(404).json({ success: false, message: "Published blog not found" });
      return res.status(200).json(blog);
    }
    const blogs = await Blog.find({ status: "published" }).sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

/**
 * @desc    Create and immediately publish a new blog article
 * @route   POST /api/createpublishedblog
 * @access  Protected / Admin
 */
export const createPublishedBlog = async (req, res) => {
  try {
    const { title, content, category, coverImage, author, slug } = req.body;
    const blog = await Blog.create({
      title: title || "Untitled Blog",
      slug: slug || generateSlug(title || "untitled-article"),
      content: content || "",
      category: category || "Digital Marketing",
      coverImage: coverImage || "",
      author: author || "DigLip7 Editorial Team",
      status: "published",
    });
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

/**
 * @desc    Update an existing published blog by ID or Slug
 * @route   PUT /api/updatepublishedblog/:id
 * @access  Protected / Admin
 */
export const updatePublishedBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, category, coverImage, author, slug } = req.body;
    const updateData = { status: "published" };

    if (title !== undefined) {
      updateData.title = title;
      updateData.slug = slug || generateSlug(title);
    }
    if (content !== undefined) updateData.content = content;
    if (category !== undefined) updateData.category = category;
    if (coverImage !== undefined) updateData.coverImage = coverImage;
    if (author !== undefined) updateData.author = author;

    const query = mongoose.Types.ObjectId.isValid(id) ? { _id: id } : { slug: id };
    const updated = await Blog.findOneAndUpdate(query, updateData, { new: true, runValidators: true });

    if (!updated) return res.status(404).json({ success: false, message: "Published blog not found" });
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

/**
 * @desc    Delete a published blog by ID or Slug
 * @route   DELETE /api/deletepublishedblog/:id
 * @access  Protected / Admin
 */
export const deletePublishedBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const query = mongoose.Types.ObjectId.isValid(id) ? { _id: id } : { slug: id };
    await Blog.findOneAndDelete(query);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};


