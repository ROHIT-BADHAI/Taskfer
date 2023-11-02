import "./Bookmark.css";
import React from "react";
import Card from "../../components/Card/Card";
import { useTaskContext } from "../../context/TaskContext";
import { useFilterContext } from "../../context/FilterContext";
function Bookmark() {
  const { searchWord } = useTaskContext();
  const { filteredData } = useFilterContext();
  const itemsToShow = filteredData().filter((item) => item.bookmark === true);
  console.log(itemsToShow);
  return (
    <>
      {
        <div className="Bookmarkdashboard">
          <div className="Bookmarkcontent">
            {itemsToShow.length > 0 ? (
              <div className="bookmark-card-container">
                {itemsToShow
                  .filter((item) => {
                    return searchWord === ""
                      ? item
                      : item.title.toLowerCase().includes(searchWord) ||
                          item.details.toLowerCase().includes(searchWord);
                  })
                  .map((item) => {
                    return <Card key={item._id} item={item} />;
                  })}
              </div>
            ) : (
              <div>NO BOOKMARKS</div>
            )}
          </div>
        </div>
      }
    </>
  );
}

export default Bookmark;
