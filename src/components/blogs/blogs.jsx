import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/blog";

const Blogs = ({handleBookmark, handleMarkAsRead}) => {
  let [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3">
      <h1 className="text-3xl rounded-xl my-2 p-3 bg-gray-200">Blogs: {blogs.length}</h1>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} 
        handleBookmark={handleBookmark}
        handleMarkAsRead={handleMarkAsRead}
        ></Blog>
      ))}
    </div>
  );
};

export default Blogs;
