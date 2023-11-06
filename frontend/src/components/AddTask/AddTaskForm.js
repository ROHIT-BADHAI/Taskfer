import React, { useState } from "react";
import { Toast } from "../Toast/Toast";
import { useTaskContext } from "../../context/TaskContext";
import { v4 as uuid } from "uuid";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";
function AddTaskForm() {
  const navigate = useNavigate();
  const { addTask } = useTaskContext();
  const [task, setTask] = useState({
    title: "",
    deadline: "",
    details: "",
    priority: "low",
    status:"Pending",
    bookmark:false,
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
    const formattedDate = moment().format("MMMM Do YYYY, h:mm a");
    addTask({ _id: uuid(), ...task, date: formattedDate });
    
    navigate('/')
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  }
  return (
    <div className="addForm">
    <div className="ad">Manage Your <br/>TASK<br/>Efficiently</div>
    <div className="form-container">
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
        <div  className="form-item">
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
            <option value="high">High</option>
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
          <button type="Submit">ADD</button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default AddTaskForm;
