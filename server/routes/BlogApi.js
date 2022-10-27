import { Router } from "express";
import Blog from "../models/Blog.js";

const router = Router();

router.get("/", async (req, res) => {
  const blog = await Blog.find({}).sort({ createdAt: -1 });
  console.log(blog);
  res.json({ data: blog });
});

router.post("/", async (req, res) => {
  const { title, contentTxt } = req.body;
  const blog = new Blog({
    title,
    contentTxt,
  });
  await blog.save();
  res.json({ message: "Success" });
});

router.patch("/:id", async (req, res) => {
  const _id = req.params.id;
  const updateBlog = await Blog.findByIdAndUpdate(_id, req.body, {
    new: true,
  });
  res.json({ message: "success" });
});

router.delete("/:id", async (req, res) => {
  const _id = req.params.id;
  const deleteBlog = await Blog.findByIdAndDelete(_id);
  res.json({ message: "success" });
});

export default router;
