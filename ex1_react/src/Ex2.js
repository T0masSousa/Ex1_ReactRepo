import React, { useContext } from "react";
import "./App.css";
import { TodoContext } from "./ToDoContext";

// Components
import Form from "./components/ex2/form";
import FilterButtons from "./components/ex2/filterbuttons";
import ListTasksAndState from "./components/ex2/listtasksandstate";

function Ex2() {
  const { tasks, searchTerm, filter, searchTasks, filterTasks } = useContext(TodoContext);

  const filteredTasks = filterTasks(tasks, filter);
  const searchedTasks = searchTasks(filteredTasks, searchTerm);

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form />
      <FilterButtons />
      <ListTasksAndState tasks={searchedTasks} />
    </div>
  );
}

export default Ex2;