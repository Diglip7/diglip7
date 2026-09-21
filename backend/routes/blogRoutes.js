import express from "express";
import { getBlogs, createBlog, updateBlog, deleteBlog } from "../controllers/blogController.js";
import { getDrafts, createDraft, updateDraft, deleteDraft } from "../controllers/DraftController.js";
import {
  getPublishedBlogs,
  createPublishedBlog,
  updatePublishedBlog,
  deletePublishedBlog,
} from "../controllers/PublishedBlogController.js";

const router = express.Router();

/* ================= 1. General Blog Routes ================= */
router.get("/getblog", getBlogs);
router.post("/createblog", createBlog);
router.put("/updateblog/:id", updateBlog);
router.delete("/deleteblog/:id", deleteBlog);

/* ================= 2. Draft Blog Routes (CMS) ================= */
router.get(["/getdraft", "/getdrafts"], getDrafts);
router.post(["/createdraft", "/createdrafts"], createDraft);
router.put(["/updatedraft/:id", "/updatedrafts/:id"], updateDraft);
router.delete(["/deletedraft/:id", "/deletedrafts/:id"], deleteDraft);

/* ================= 3. Published Blog Routes (Live Public & CMS) ================= */
router.get(["/publishedblogs", "/publishedblog", "/publishedblogs/:id", "/publishedblog/:id"], getPublishedBlogs);
router.post(["/createpublishedblog", "/createpublishedblogs"], createPublishedBlog);
router.put(["/updatepublishedblog/:id", "/updatePublishedBlog/:id"], updatePublishedBlog);
router.delete(["/deletepublishedblog/:id", "/deletePublishedBlog/:id"], deletePublishedBlog);

export default router;


