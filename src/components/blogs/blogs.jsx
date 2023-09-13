import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
  let [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <h1>hi</h1>
      {
        blogs.map(blog=>)
      }
    </div>
  );
};

export default Blogs;
