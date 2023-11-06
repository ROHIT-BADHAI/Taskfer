import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Toast } from "../Toast/Toast";
import { ToastContainer } from "react-toastify";
import { useTaskContext } from "../../context/TaskContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useBookmarkContext } from "../../context/BookmarkContext";
function UpdateTask() {
  const navigate = useNavigate();
  const { editTask } = useTaskContext();
  const location = useLocation();
  const { _id, date, deadline, details, title, priority, status, bookmark } =
    location.state;
  const [task, setTask] = useState({
    title: title,
    deadline: deadline,
    details: details,
    priority: priority,
    status: status,
    bookmark: bookmark,
  });
  function handleSubmit(e) {
    e.preventDefault();
    if (
      /^\s*$/.test(task.title) ||
      /^\s*$/.test(task.deadline) ||
      /^\s*$/.test(task.details)
    ) {
      Toast("Pease fill all the details!", "error");
      return;
    }
    Toast("Task Updated Successfully!!", "success");
    editTask({ _id: _id, ...task, date: date });
     navigate("/");
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  }
  return (
    <div className="form-container">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <label>Task Name - </label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            placeholder="Enter Task name"
          />
        </div>
        <div className="form-item">
          <label>DeadLine -</label>
          <input
            type="date"
            name="deadline"
            value={task.deadline}
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label>Task Detail-</label>
          <textarea
            rows={4}
            cols={30}
            name="details"
            value={task.details}
            onChange={handleChange}
            placeholder="Enter Task Detail"
          />
        </div>
        <div className="form-item">
          <label>Priority -</label>
          <select name="priority" value={task.priority} onChange={handleChange}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option high="high">High</option>
            <option value="critical">Critical</option>
          </select>
        </div>
        <div className="form-item">
          <label>Status -</label>
          <select name="status" value={task.status} onChange={handleChange}>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div className="form-item">
          <button type="Submit">UPDATE</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateTask;
