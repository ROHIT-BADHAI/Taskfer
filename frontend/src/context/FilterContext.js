import { createContext, useContext, useState } from "react";
import { useTaskContext } from "./TaskContext";
const filterContext = createContext({
  sort: "none",
  selectedCategory: [],
});
export function FilterContextProvider({ children }) {
  const { task } = useTaskContext();
  const [sort, setSort] = useState("none");
  const [selectedCategory, setSelectedCategory] = useState([]);

  function filteredData() {
    let temp = [...task];
    let order = {
      low: 1,
      medium: 2,
      high: 3,
      critical: 4,
      pending: 5,
      completed: 6,
    };
    if (sort === "none") {
      temp = [...task];
    } else if (sort === "priorityLow") {
      temp.sort(function (a, b) {
        return (
          order[a.priority.toLowerCase()] - order[b.priority.toLowerCase()]
        );
      });
    } else if (sort === "priorityHigh") {
      temp.sort(function (a, b) {
        return order[b.priority] - order[a.priority];
      });
    } else if (sort === "status") {
      temp.sort(function (a, b) {
        return order[a.status.toLowerCase()] - order[b.status.toLowerCase()];
      });
    }

    if (selectedCategory.length > 0) {
      temp = temp.filter((item) =>
        selectedCategory.includes(item.status.toLowerCase()) || selectedCategory.includes(item.priority)
      );
    }
    return temp;
  }

  function handleOptionChange(type, value) {
    switch (type) {
      case "sort":
        setSort(value);
        break;
      case "category":
        if (selectedCategory.includes(value)) {
          setSelectedCategory(
            selectedCategory.filter((category) => category !== value)
          );
        } else {
          setSelectedCategory([...selectedCategory, value.toLowerCase()]);
        }
        break;
      default:break;  
    }
  }

  return (
    <filterContext.Provider value={{ handleOptionChange, filteredData, sort,selectedCategory }}>
      {children}
    </filterContext.Provider>
  );
}

export function useFilterContext() {
  const { handleOptionChange, filteredData, sort ,selectedCategory} = useContext(filterContext);
  return { handleOptionChange, filteredData, sort ,selectedCategory};
}
