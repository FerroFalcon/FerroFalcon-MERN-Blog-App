import BlogCard from "../components/BlogContent";
import BlogTitle from "../components/BlogTitle";
import SubmitButton from "../components/SubmitButton";

function AddBlog() {
  return (
    <div className="App">
      <BlogTitle />
      <BlogCard />
      <SubmitButton />
    </div>
  );
}

export default AddBlog;
