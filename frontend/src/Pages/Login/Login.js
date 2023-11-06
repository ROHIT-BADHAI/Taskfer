import axios from "axios";
import { Toast } from "../../components/Toast/Toast";
import React, { useState } from "react";
import { useAuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";
const taskferServer="https://taskferserver.vercel.app"
function Login() {
  const { login } = useAuthContext();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      /^\s*$/.test(user.password) ||
      /^\s*$/.test(user.email) 
    ) {
      Toast("Pease fill all the details!", "error");
      return;
    }
    try{
    const response = await axios.post(taskferServer+"/login ", user);
      login(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    catch(err){
      Toast(err.response.data.err,"error")
    }
  };
  return (
    <div className="addForm" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
    <span>For Guest Login Email: admin@admin.com & Password: admin</span>
      <div className="form-container" onSubmit={handleSubmit}>
        <form>
          <div className="form-item">
            <label> Email - </label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>
          <div className="form-item">
            <label> Password - </label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Enter Password"
            />
          </div>
          <div className="form-item">
            <button type="Submit">Login</button>
          </div>
          <div style={{marginTop:"0.5rem",textAlign:"center"}}> <Link style={{textDecoration:"none",color:"var(--text-color)"}} to='/signup'>New User?</Link></div>
        </form>
      </div>
    </div>
  );
}

export default Login;
