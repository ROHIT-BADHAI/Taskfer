import React from "react";
import "./index.css";
import Searchbar from "./Searchbar";
import { Link, useNavigate } from "react-router-dom";
import BookmarkNav from "../../assests/BookmarkNav";
import Explore from "../../assests/Explore";
import { useAuthContext } from "../../context/authContext";
function Header() {
  const navigate = useNavigate();
  const { user, logout } = useAuthContext();
  return (
    <div className="Navbar">
      <div className="logo" onClick={() => navigate("/")}>
        🦄TASKFER
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "200px",
          width: "150px",
        }}
      >
        <Link to={"/"}>
          <Explore />
        </Link>
        <Link to={"/bookmark"}>
          <BookmarkNav />
        </Link>
      </div>
      <Searchbar />
      {user ? (
        <div>
          <span>Welcome, {user.name}</span>
          <span
            style={{
              cursor: "pointer",
              backgroundColor: "var(--button-color)",
              padding: "0.5rem",
              color: "var(--text-color)",
              borderRadius: "10px",
              marginLeft: "10px",
            }}
            onClick={() => logout()}
          >
            Logout
          </span>
        </div>
      ) : (
        <div className="login">
          <Link style={{ textDecoration: "none" }} to={"/login"}>
            <span
              style={{
                border: "2px solid var(--text-color)",
                padding: "0.5rem",
                color: "var(--text-color)",
                borderRadius: "10px",
              }}
            >
              Login
            </span>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/signup"}>
            <span
              style={{
                backgroundColor: "var(--button-color)",
                padding: "0.5rem",
                color: "var(--text-color)",
                borderRadius: "10px",
                marginLeft: "10px",
              }}
            >
              Signup
            </span>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
