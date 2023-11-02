import React from "react";
import { useFilterContext } from "../../context/FilterContext";
import "./Filter.css";

const FilterByCategory = ({handleOptionChange,selectedCategory}) => {
  const filters = ["Pending", "Completed", "Low", "Medium", "High", "Critical"];

  const handleCategoryChange = (filter) => {
    handleOptionChange("category",filter)
  };

  return (
    <div className="filter">
      <h3>Filter by-</h3>
      <div className="filterItem">
        {filters.map((filter, key) => (
          <div key={key}>
          {key===0 && <h4 style={{marginBottom:"0.6rem"}}>Status</h4>}
          {key===2 && <h4 style={{margin:"0.6rem 0rem"}}>Priority</h4>}
            <label>
              <input
              className="filterInput"
                type="checkbox"
                value={filter.toLowerCase()}
                checked={selectedCategory.includes(filter.toLowerCase())}
                onChange={() => handleCategoryChange(filter.toLowerCase())}
              />
              {filter}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};



const SortBy = ({ handleOptionChange, sort }) => {
  const handleChangeSort = (event) => {
    handleOptionChange("sort", event.target.value);
  };

  return (
    <div className="sort">
      <h3>Sort by</h3>
      <div className="sortItem">
        <label>
          <input
          className="sortInput"
            type="radio"
            name="sort"
            value="none"
            checked={sort === "none"}
            onChange={handleChangeSort}
          />
          none
        </label>
        <label>
          <input
          className="sortInput"
            type="radio"
            name="sort"
            value="deadline"
            checked={sort === "deadline"}
            onChange={handleChangeSort}
          />
          Deadline
        </label>
        <label>
          <input
          className="sortInput"
            type="radio"
            name="sort"
            value="status"
            checked={sort === "status"}
            onChange={handleChangeSort}
          />
          Status
        </label>
        <label>
          <input
          className="sortInput"
            type="radio"
            name="sort"
            value="priorityLow"
            checked={sort === "priorityLow"}
            onChange={handleChangeSort}
          />
          Priority - low to high
        </label>
        <label>
          <input
          className="sortInput"
            type="radio"
            name="sort"
            value="priorityHigh"
            checked={sort === "priorityHigh"}
            onChange={handleChangeSort}
          />
          Priority - high to low
        </label>
      </div>
    </div>
  );
};

function Filter() {
  const { handleOptionChange, sort,selectedCategory } = useFilterContext();
  return (
    <div className="filterSort">
      <FilterByCategory handleOptionChange={handleOptionChange} selectedCategory={selectedCategory}/>
      <SortBy handleOptionChange={handleOptionChange} sort={sort} />
    </div>
  );
}

export default Filter;
