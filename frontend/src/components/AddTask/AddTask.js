import React from "react";
import "./index.css";
import add from "../../assests/add_4210903.png";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import { useTaskContext } from "../../context/TaskContext";
import Filter from "../Filter/Filter";
import { useFilterContext } from "../../context/FilterContext";
import Loading from "../../assests/Loading.gif";
function AddTask() {
  const { searchWord, isLoading } = useTaskContext();
  const { filteredData } = useFilterContext();
  let itemsToShow = filteredData();

  return isLoading ? (
    <img
      style={{ height: "15rem", width: "15rem" }}
      src={Loading}
      alt="Loading...."
    />
  ) : (
    <>
      <div className="dashboard">
        <Filter />
        <div className="content">
          <div className="AddTaskContainer">
            <Link to="/addTask" style={{ textDecoration: "none" }}>
              <div className="innerContainer">
                <img style={{ height: "100%" }} src={add} alt="add" />
              </div>
            </Link>
          </div>
          {itemsToShow.length>0 &&
          <div className="card-container">
            {itemsToShow
              .filter((item) => {
                return searchWord === ""
                  ? item
                  : item.title.toLowerCase().includes(searchWord) ||
                      item.details.toLowerCase().includes(searchWord);
              })
              .map((item) => {
                return <Card key={item._id} item={item} />;
              })}
          </div>
          }
        </div>
      </div>
    </>
  );
}

export default AddTask;
