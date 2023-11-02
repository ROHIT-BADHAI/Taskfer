import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import AddTask from "./components/AddTask/AddTask";
import AddTaskForm from "./components/AddTask/AddTaskForm";
import Header from "./components/header/Header";
import UpdateTask from "./components/UpdateTask/UpdateTask";
import { Route, Routes } from "react-router-dom";
import { TaskContextProvider } from "./context/TaskContext";
import { ToastContainer } from "react-toastify";
import { FilterContextProvider } from "./context/FilterContext";
import Bookmark from "./Pages/Bookmar/Bookmark";
import { BookmarkContextProvider } from "./context/BookmarkContext";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Signup/Signup";
function App() {
  return (
    <TaskContextProvider>
      <FilterContextProvider>
      <BookmarkContextProvider>
        <div>
          <Header />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
              <Routes>
                {/* <Route exact path="/" element={<AddTask />} />
                <Route exact path="/addTask" element={<AddTaskForm />} />
                <Route exact path="/updateTask" element={<UpdateTask />} />
                <Route exact path="/bookmark" element={<Bookmark />} /> */}
                <Route exact path="/login" element={<SignUp />} />
              </Routes>
          </div>
        </div>
        </BookmarkContextProvider>
        <ToastContainer />
      </FilterContextProvider>
    </TaskContextProvider>
  );
}

export default App;
