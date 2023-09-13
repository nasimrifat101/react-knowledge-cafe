import Bookmark from "../bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 ">
        <div className="bg-gray-100 rounded-lg m-2 text-center p-3">
            <h2 className="text-2xl">Reading Time: {readingTime} min</h2>
        </div>
     <div className="bg-gray-100 rounded-lg p-2 m-4">
     <h3 className="text-2xl text-center ">Bookmarked Blogs: {bookmarks.length}</h3>
      {
      bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
     </div>
    </div>
  );
};

export default Bookmarks;
