import Bookmark from "../bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-100 rounded-lg m-4">
        <div className="m-4">
            <h2 className="text-2xl">Reading Time: {readingTime}</h2>
        </div>
      <h3 className="text-2xl text-center ">Bookmarked Blogs: {bookmarks.length}</h3>
      {
      bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

export default Bookmarks;
