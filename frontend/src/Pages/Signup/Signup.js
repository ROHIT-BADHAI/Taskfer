import React, { useState } from "react";
function SignUp() {
  const [user, setUser] = useState({
    email: "ww",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setUser({
      ...user,
      [name]: [value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user);
  };
  return (
    <div className="addForm">
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
            <button type="Submit">SignUp</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
