import React, { useEffect } from 'react'
import BlogListing from '../components/BlogListing'
import { useDispatch } from "react-redux";
import {
  fetchAsyncAllBlogs,
} from "../features/blog/blogSlice";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncAllBlogs());
  }, [dispatch]);

  return (
    <div>
      <BlogListing />
    </div>
  )
}
