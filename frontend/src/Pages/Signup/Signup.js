import axios from "axios";
import './Signup.css'
import { Toast } from "../../components/Toast/Toast";
import React, { useState } from "react";
import { useAuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";
import Loading from '../../assests/Loading.gif'
const taskferServer="https://taskferserver.vercel.app"
function SignUp() {
  const { login } = useAuthContext();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [isLoading,setIsLoading]=useState(false)
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
      setIsLoading(true)
    const response = await axios.post(taskferServer+"/signup", user);
      login(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      setIsLoading(false)
      Toast("Login Successful!","success")
    }
    catch(err){
      setIsLoading(false)
    Toast(err.response.data.err,"error")
    }
  };
  return (
    isLoading===false ? <div className="addForm">
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
    :
    <img style={{height:"15rem",width:"15rem"}} src={Loading} alt="Loading..."/>
  );
}

export default SignUp;
