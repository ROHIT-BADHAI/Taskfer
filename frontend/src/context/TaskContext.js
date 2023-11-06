import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Toast } from "../components/Toast/Toast";
import { useAuthContext } from "./authContext";
const taskferServer="https://taskferserver.vercel.app"
const taskContext = createContext({
  task: [],
  editTask: () => {},
  removeTask: () => {},
  addTask: () => {},
  searchWord: "",
});
export function TaskContextProvider({ children }) {
  const { user } = useAuthContext();
  const [task, setTask] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  useEffect(() => {
    
    
    let getData = async () => {
      let data = await axios.get(taskferServer+"/tasks", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setTask(data.data);
    };
    try {
      if (user?.token) getData();
    } catch (err) {
      console.log(err);
    }
  }, [user]);

  async function removeTask(_id) {
    if (user.token) {
      await axios.delete(taskferServer+`/tasks/${_id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const newtask = task.filter((item) => {
        return item._id !== _id;
      });
      setTask(newtask);
      Toast("Task deleted Successfully!!", "error");
    } else Toast("Please Login!", "warning");
  }

  async function editTask(editedTask) {
    if (user.token) {
      await axios.put(taskferServer+`/tasks/${editedTask._id}`,
        editedTask,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setTask(
        task.map((item) => {
          return item._id === editedTask._id ? editedTask : item;
        })
      );
    } else Toast("Please Login!", "warning");
  }

  function addTask(taskItem) {
    if (user.token) {
      axios.post(taskferServer+"/tasks", taskItem, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const temp = task;
      temp.unshift(taskItem);
      setTask(temp);
      Toast("Task Added Successfully!!", "success");
    } else Toast("Please Login!", "warning");
  }
  return (
    <taskContext.Provider
      value={{
        task,
        editTask,
        removeTask,
        addTask,
        setSearchWord,
        searchWord,
        setTask,
      }}
    >
      {children}
    </taskContext.Provider>
  );
}

export function useTaskContext() {
  const {
    task,
    editTask,
    removeTask,
    addTask,
    searchWord,
    setSearchWord,
    setTask,
  } = useContext(taskContext);
  return {
    task,
    editTask,
    removeTask,
    addTask,
    searchWord,
    setSearchWord,
    setTask,
  };
}
