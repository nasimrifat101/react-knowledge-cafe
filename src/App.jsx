import { useState } from "react";
import "./App.css";
import Blogs from "./components/blogs/blogs";
import Bookmarks from "./components/bookmarks/Bookmarks";
import Header from "./components/header/Header";

function App() {
  let [bookmarks, setBookmarks] = useState([]);

  let [readingTime, setReadingTime] = useState(0);

  let handleBookmark = (blog) => {
    let newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  let handleMarkAsRead = (time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  };

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-4xl mx-auto">
        <Blogs
          handleMarkAsRead={handleMarkAsRead}
          handleBookmark={handleBookmark}
        ></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;
