import { useState, useEffect } from "react";
import AddContent from "./components/AddContent.js";
import ContentCard from "./components/ContentCard.js";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [editBlog, setEditBlog] = useState({});
  useEffect(() => {
    fetchBlogs();
  }, []);

  async function fetchBlogs() {
    const res = await fetch("http://localhost:4000/blog");
    const { data } = await res.json();
    setBlogs(data);
  }

  return (
    <div className="App">
      <AddContent fetchBlogs={fetchBlogs} editBlog={editBlog} />
      <br />
      {blogs.map((blg) => (
        <ContentCard
          blg={blg}
          fetchBlogs={fetchBlogs}
          setEditBlog={setEditBlog}
        />
      ))}
    </div>
  );
}

export default App;
