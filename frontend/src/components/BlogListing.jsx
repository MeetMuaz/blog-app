import React from "react";
import { useSelector } from "react-redux";
import { getAllBlogs } from "../features/blog/blogSlice";
import BlogCard from "./BlogCard";


export default function BlogListing() {
  const blogs = useSelector(getAllBlogs);
  let renderBlogs = "";

  renderBlogs = 

  <div>
    {Object.keys(blogs).length === 0 ? (
      <div>...Loading</div>
    ) : (
      blogs.message === "Blogs fetch successfully!" ? (
        blogs.result.map((blog, index) => (
          <BlogCard key={index} data={blog} />
        ))
        ) : (
          <div>{blogs.message}</div>
        )
    )}
  </div>

  return (
    <div>{renderBlogs}</div>
  )
}
