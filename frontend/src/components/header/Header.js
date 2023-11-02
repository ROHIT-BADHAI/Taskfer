import React from "react";
import "./index.css";
import Searchbar from "./Searchbar";
import { Link, useNavigate } from "react-router-dom";
import BookmarkNav from "../../assests/BookmarkNav";
import Explore from "../../assests/Explore";
function Header() {
  const navigate = useNavigate();

  return (
    <div className="Navbar">
      <div className="logo" onClick={() => navigate("/")}>
        🦄TASKFER
      </div>
      <div
        style={{
          display: "flex",
          width: "700px",
          justifyContent: "space-evenly",
          marginLeft: "200px",
        }}
      >
        <Link to={"/"}>
          <Explore />
        </Link>
        <Link to={"/bookmark"}>
          <BookmarkNav />
        </Link>
        <Searchbar />
      </div>
      <div className="history">Login/Register</div>
    </div>
  );
}

export default Header;
