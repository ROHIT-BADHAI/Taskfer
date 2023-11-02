import React from "react";
function Login() {
  return (
    <div className="addForm">
    <div className="form-container">
      <form>
        <div className="form-item">
          <label> Email - </label>
          <input
            type="email"
            name="email"
            // value={task.title}
            // onChange={handleChange}
            placeholder="Enter email"
          />
        </div><div className="form-item">
          <label> Password - </label>
          <input
            type="password"
            name="password"
            // value={task.title}
            // onChange={handleChange}
            placeholder="Enter Password"
          />
        </div>
        <div className="form-item">
          <button type="Submit">Login</button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Login;
