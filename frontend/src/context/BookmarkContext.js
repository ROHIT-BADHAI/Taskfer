import { createContext, useContext} from "react";
import { Toast } from "../components/Toast/Toast";
import { useTaskContext } from "./TaskContext";
const bookmarkContext = createContext({
  addBookmark: () => {},
  removeBookmark: () => {},
});
export function BookmarkContextProvider({ children }) {
  const { editTask } = useTaskContext();

  async function addBookmark(item) {
    item.bookmark = true;
    editTask(item);
    Toast("Bookmarked!!", "success");
  }
  async function removeBookmark(item) {
    item.bookmark = false;
    editTask(item);
    Toast("Removed from Bookmarked!!", "success");
  }

  return (
    <bookmarkContext.Provider
      value={{
        addBookmark,
        removeBookmark,
      }}
    >
      {children}
    </bookmarkContext.Provider>
  );
}

export function useBookmarkContext() {
  const { addBookmark, removeBookmark } = useContext(bookmarkContext);
  return {
    addBookmark,
    removeBookmark,
  };
}
