import React from "react";
import edit from "../../assests/edit.png";
import "./Card.css";
import Delete from "../../assests/delete.js";
import { useTaskContext } from "../../context/TaskContext";
import { Link } from "react-router-dom";
import Badge from "../Badge/Badge";
import pending from "../../assests/pending.png";
import completed from "../../assests/completed.png";
import Bookmark from "../../assests/Bookmark";
import { useBookmarkContext } from "../../context/BookmarkContext";
function Card({ item }) {
  const { removeTask } = useTaskContext();
  const { addBookmark, removeBookmark } = useBookmarkContext();
  let statusImg = pending;
  if (item.status === "completed") statusImg = completed;
  return (
    <div className="card">
      <div>
        <span style={{ fontSize: "1.5rem" }}>{item.title}</span>
        <span style={{ fontSize: "0.6rem" }}>{item.date}</span>
        <span style={{ fontSize: "0.6rem" }}>
          <i>Deadline </i>- {item.deadline}
        </span>
      </div>
      <div style={{ fontSize: "1rem" }}>{item.details}</div>
      <hr></hr>
      <div className="editdelete">
        <Link to="/updateTask" state={item}>
          <div className="edit">
            <img
              src={edit}
              style={{ filter: "invert(100%)", height: "100%" }}
              alt="edit"
            />
          </div>
        </Link>

        <div
          style={{ cursor: "pointer" }}
          onClick={(e) => {
            item.bookmark ? removeBookmark(item) : addBookmark(item);
          }}
        >
          <Bookmark fill={!item.bookmark ? "none" : "#e5e5e5"} />
        </div>

        <div
          style={{ cursor: "pointer" }}
          className="delete"
          onClick={() => {
            removeTask(item._id);
          }}
        >
          <Delete />
        </div>
      </div>
      <Badge priority={item.priority} />
      <img className="status" src={statusImg} alt="status"></img>
    </div>
  );
}

export default Card;
