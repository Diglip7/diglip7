import mongoose from "mongoose";
import Blog, { generateSlug } from "../models/Blog.js";

/**
 * Helper: Find a draft blog by slug OR MongoDB ObjectId with title fallback
 */
const findDraftByIdentifier = async (id) => {
  const clean = decodeURIComponent(id).trim().toLowerCase();

  // 1. Try finding draft by slug (case-insensitive regex)
  let draft = await Blog.findOne({ status: "draft", slug: { $regex: new RegExp(`^${clean}$`, "i") } });

  // 2. If not found and id is valid Mongo ObjectId, query by _id
  if (!draft && mongoose.Types.ObjectId.isValid(id)) {
    draft = await Blog.findById(id);
  }

  // 3. Fallback: Check title-based slug matching across draft collection
  if (!draft) {
    const list = await Blog.find({ status: "draft" });
    draft = list.find((d) => {
      const s = (d.slug || "").toLowerCase();
      const gen = generateSlug(d.title || "").toLowerCase();
      return s === clean || d._id.toString() === clean || gen === clean || (clean.length > 5 && (clean.startsWith(gen) || gen.startsWith(clean)));
    });
    // Auto backfill slug if missing
    if (draft && !draft.slug) {
      draft.slug = generateSlug(draft.title);
      await draft.save().catch(() => {});
    }
  }
  return draft?.status === "draft" ? draft : null;
};

/**
 * @desc    Get all blog drafts (or single draft if id/slug query or param provided)
 * @route   GET /api/getdrafts
 * @access  Protected / Admin
 */
export const getDrafts = async (req, res) => {
  try {
    const id = req.params.slug || req.params.id || req.query.id || req.query.slug;
    if (id) {
      const draft = await findDraftByIdentifier(id);
      if (!draft) return res.status(404).json({ success: false, message: "Draft not found" });
      return res.status(200).json(draft);
    }
    const drafts = await Blog.find({ status: "draft" }).sort({ createdAt: -1 });
    res.status(200).json(drafts);
  } catch (error) {
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

/**
 * @desc    Save a new unpublished blog draft
 * @route   POST /api/createdraft
 * @access  Protected / Admin
 */

export const createDraft = async (req, res) => {
  try {
    const { title, content, category, coverImage, author, slug } = req.body;
    const draft = await Blog.create({
      title: title || "Untitled Draft",
      slug: slug || generateSlug(title || "untitled-draft"),
      content: content || "",
      category: category || "Digital Marketing",
      coverImage: coverImage || "",
      author: author || "DigLip7 Editorial Team",
      status: "draft",
    });
    res.status(201).json(draft);
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

/**
 * @desc    Update an existing blog draft by ID or Slug
 * @route   PUT /api/updatedraft/:id
 * @access  Protected / Admin
 */
export const updateDraft = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, category, coverImage, author, slug } = req.body;
    const updateData = { status: "draft" };

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

    if (!updated) return res.status(404).json({ success: false, message: "Draft not found" });
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

/**
 * @desc    Delete a blog draft by ID or Slug
 * @route   DELETE /api/deletedraft/:id
 * @access  Protected / Admin
 */
export const deleteDraft = async (req, res) => {
  try {
    const { id } = req.params;
    const query = mongoose.Types.ObjectId.isValid(id) ? { _id: id } : { slug: id };
    await Blog.findOneAndDelete(query);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};


