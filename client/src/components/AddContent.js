import React, { useEffect, useState } from "react";
import { Input, Button, Card } from "antd";
import "antd/dist/antd.css";

const { TextArea } = Input;

function AddContent({ fetchBlogs, editBlog }) {
  const InitialContent = {
    title: "",
    contentTxt: "",
  };

  const [content, setContent] = useState(InitialContent);

  useEffect(() => {
    if (editBlog.title !== undefined) {
      setContent(editBlog);
    }
  }, [editBlog]);

  const contentHandler = (e) => {
    setContent({ ...content, [e.target.name]: e.target.value });
  };

  const saveData = async (e) => {
    e.preventDefault();
    const res = editBlog.title === undefined ? createBlog() : updateBlog();
  };

  function reload(res) {
    if (res.ok) {
      setContent(InitialContent);
      fetchBlogs();
    }
  }

  async function createBlog() {
    const res = await fetch("http://localhost:4000/blog", {
      method: "POST",
      body: JSON.stringify(content),
      headers: {
        "content-type": "application/json",
      },
    });
    reload(res);
  }

  async function updateBlog() {
    const res = await fetch(`http://localhost:4000/blog/${editBlog._id}`, {
      method: "PATCH",
      body: JSON.stringify(content),
      headers: {
        "content-type": "application/json",
      },
    });
    reload(res);
  }

  return (
    <Card
      title="Add New Blog "
      // extra={<a href="#">More</a>}
      // style={{
      //   width: 1200,
      // }}
    >
      <Input
        onChange={contentHandler}
        name="title"
        value={content.title}
        placeholder="Title"
      />
      <TextArea
        onChange={contentHandler}
        name="contentTxt"
        value={content.contentTxt}
        rows={8}
        placeholder="Your thoughts here"
      />

      {editBlog.title !== undefined && (
        <Button onClick={saveData}>Update</Button>
      )}
      {editBlog.title === undefined && (
        <Button onClick={saveData} type="primary">
          Submit
        </Button>
      )}
    </Card>
  );
}

export default AddContent;
