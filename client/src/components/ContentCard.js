import React from "react";
import { Card, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

function ContentCard({ blg, fetchBlogs, setEditBlog }) {
  async function deleteBlog(_id) {
    if (!window.confirm("Are you sure")) return;
    const res = await fetch(`http://localhost:4000/blog/${_id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      fetchBlogs();
      window.alert("Deleted Successfully");
    }
  }

  return (
    <Card
      key={blg._id}
      title={blg.title}
      extra={
        <>
          <Button
            onClick={() => setEditBlog(blg)}
            type="text"
            icon={<EditOutlined />}
          />
          <Button
            onClick={() => deleteBlog(blg._id)}
            type="text"
            icon={<DeleteOutlined />}
            danger
          />
        </>
      }
      // style={{
      //   width: 300,
      // }}
    >
      <p>{blg.contentTxt}</p>
    </Card>
  );
}

export default ContentCard;
