import React from "react";
import { useSelector } from "react-redux";
import { getAllBlogs } from "../features/blog/blogSlice";
import BlogCard from "./BlogCard";


export default function BlogListing() {
  const blogs = useSelector(getAllBlogs);
  let renderBlogs = "";
  renderBlogs = blogs.map((blog, index) => {
    <BlogCard key={index} data={blog}/>
  })

  return (
    <div>
        <div>{renderBlogs}</div>
    </div>
  )
}
