import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Toast } from "../components/Toast/Toast";
const taskContext = createContext({
  task: [],
  editTask: () => {},
  removeTask: () => {},
  addTask: () => {},
  searchWord: "",
});
export function TaskContextProvider({ children }) {
  const [task, setTask] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  useEffect(() => {
    let getData = async () => {
      let data = await axios.get("http://localhost:3000/tasks");
      setTask(data.data);
    };
    getData();
  }, []);

  async function removeTask(_id) {
    await axios.delete(`http://localhost:3000/tasks/${_id}`);
    const newtask = task.filter((item) => {
      return item._id !== _id;
    });
    setTask(newtask);
    Toast("Task deleted Successfully!!", "error");
  }

  async function editTask(editedTask) {
    await axios.put(`http://localhost:3000/tasks/${editedTask._id}`, editedTask);
    setTask(
      task.map((item) => {
        return item._id === editedTask._id ? editedTask : item;
      })
    );
  }

  function addTask(taskItem) {
    const temp = task;
    temp.unshift(taskItem);
    setTask(temp);
    axios.post("http://localhost:3000/tasks", taskItem);
  }
  return (
    <taskContext.Provider
      value={{ task, editTask, removeTask, addTask, setSearchWord, searchWord,setTask }}
    >
      {children}
    </taskContext.Provider>
  );
}

export function useTaskContext() {
  const { task, editTask, removeTask, addTask, searchWord, setSearchWord ,setTask} =
    useContext(taskContext);
  return { task, editTask, removeTask, addTask, searchWord, setSearchWord,setTask };
}
