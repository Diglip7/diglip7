const Blog = require("../models/Blog");

// Get all draft blogs or a single draft by ID
const getDrafts = async (req, res) => {
  try {
    const { id } = req.query;

    if (id) {
      const draft = await Blog.findById(id);
      if (!draft || draft.status !== "draft") {
        return res.status(404).json({ success: false, message: "Draft not found" });
      }
      return res.status(200).json(draft);
    }

    const drafts = await Blog.find({ status: "draft" }).sort({ createdAt: -1 });
    res.status(200).json(drafts);
  } catch (error) {
    console.error("Error fetching drafts:", error);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

// Create a new draft blog
const createDraft = async (req, res) => {
  try {
    const { title, content } = req.body;
    const draft = await Blog.create({
      title: title || "Untitled Draft",
      content: content || "",
      status: "draft",
    });
    res.status(201).json(draft);
  } catch (error) {
    console.error("Error creating draft:", error);
    res.status(400).json({ success: false, error });
  }
};

// Update a draft blog by ID
const updateDraft = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const updatedDraft = await Blog.findByIdAndUpdate(
      id,
      { title, content, status: "draft" },
      { new: true, runValidators: true }
    );

    if (!updatedDraft) {
      return res.status(404).json({ success: false, message: "Draft not found" });
    }

    res.status(200).json(updatedDraft);
  } catch (error) {
    console.error("Error updating draft:", error);
    res.status(400).json({ success: false, error });
  }
};

// Delete a draft blog by ID
const deleteDraft = async (req, res) => {
  try {
    const { id } = req.params;
    await Blog.findByIdAndDelete(id);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error deleting draft:", error);
    res.status(400).json({ success: false });
  }
};

module.exports = {
  getDrafts,
  createDraft,
  updateDraft,
  deleteDraft,
};
