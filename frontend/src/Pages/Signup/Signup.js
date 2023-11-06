import axios from "axios";
import './Signup.css'
import { Toast } from "../../components/Toast/Toast";
import React, { useState } from "react";
import { useAuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";
function SignUp() {
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
      /^\s*$/.test(user.name) ||
      /^\s*$/.test(user.email) ||
      /^\s*$/.test(user.password)
    ) {
      Toast("Pease fill all the details!", "error");
      return;
    }
    try{
    const response = await axios.post("http://localhost:3000/signup", user);
      login(user);
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    catch(err){
    Toast(err.response.data.err,"error")
    }
  };
  return (
    <div className="addForm">
      <div className="form-container" onSubmit={handleSubmit}>
        <form>
        <div className="form-item">
            <label> Name - </label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>
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
            <button type="Submit">SignUp</button>
          </div>
          <div style={{marginTop:"0.5rem",textAlign:"center"}}> <Link style={{textDecoration:"none",color:"var(--text-color)"}} to='/login'>Already Signed up click here to Login?</Link></div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
