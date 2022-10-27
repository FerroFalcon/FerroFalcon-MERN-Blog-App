import mongoose from "mongoose";
const { Schema } = mongoose;

const blogSchema = new Schema({
  // author: String,
  title: String,
  contentTxt: String,
  createdAt: { type: Date, default: Date.now },
});

export default new mongoose.model("Blog", blogSchema);
