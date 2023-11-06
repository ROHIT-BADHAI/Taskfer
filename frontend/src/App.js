import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import AddTask from "./components/AddTask/AddTask";
import AddTaskForm from "./components/AddTask/AddTaskForm";
import Header from "./components/header/Header";
import UpdateTask from "./components/UpdateTask/UpdateTask";
import { Route, Routes ,Navigate} from "react-router-dom";
import { TaskContextProvider } from "./context/TaskContext";
import { ToastContainer } from "react-toastify";
import { FilterContextProvider } from "./context/FilterContext";
import Bookmark from "./Pages/Bookmar/Bookmark";
import { BookmarkContextProvider } from "./context/BookmarkContext";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Signup/Signup";
import { useAuthContext } from "./context/authContext";

function App() {
  const {user}=useAuthContext();
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
                <Route exact path="/" element={user?<AddTask />:<Navigate to='/login'/>} />
                <Route exact path="/addTask" element={user?<AddTaskForm />:<Navigate to='/login'/>} />
                <Route exact path="/updateTask" element={user?<UpdateTask />:<Navigate to='/login'/>} />
                <Route exact path="/bookmark" element={user?<Bookmark />:<Navigate to='/login'/>} />
                <Route exact path="/login" element={user?<Navigate to='/'/>:<Login />} />
                <Route exact path="/signup" element={user?<Navigate to='/'/>:<SignUp />} />
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
