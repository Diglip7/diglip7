import express from "express";
import {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog
} from "../controllers/blogController.js";

import {
  getDrafts,
  createDraft,
  updateDraft,
  deleteDraft
} from "../controllers/DraftController.js";

import {
  getPublishedBlogs,
  createPublishedBlog,
  updatePublishedBlog,
  deletePublishedBlog
} from "../controllers/PublishedBlogController.js";

const router = express.Router();

/* ----------------- Blog Routes ----------------- */
router.get("/getblog", getBlogs);
router.post("/createblog", createBlog);
router.put("/updateblog/:id", updateBlog);
router.delete("/deleteblog/:id", deleteBlog);

/* ----------------- Draft Routes ---------------- */
router.get("/getdraft", getDrafts);                // GET /api/drafts
router.post("/createdraft", createDraft);          // POST /api/drafts
router.put("/updatedraft/:id", updateDraft);       // PUT /api/drafts/:id
router.delete("/deletedraft/:id", deleteDraft);    // DELETE /api/drafts/:id

/* ------------ Published Blog Routes ------------ */
router.get("/publishedblogs", getPublishedBlogs);                   // GET /api/published-blogs
router.post("/createpublishedblogs", createPublishedBlog);          // POST /api/published-blogs
router.put("/updatePublishedBlog/:id", updatePublishedBlog);        // PUT /api/published-blogs/:id
router.delete("/deletePublishedBlog/:id", deletePublishedBlog);     // DELETE /api/published-blogs/:id

// ✅ Export router as default
export default router;
