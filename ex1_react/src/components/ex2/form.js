import React, { useState, useContext } from "react";
import { TodoContext } from "../../ToDoContext";

function Form() {
  const { addTask, searchTerm, setSearchTerm } = useContext(TodoContext);
  const [TaskName, setTaskName] = useState("");
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    addTask(TaskName);
    setTaskName(""); // Limpar input
  };

  const handleInputChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(localSearchTerm);
  };

  const handleSearchInputChange = (event) => {
    setLocalSearchTerm(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <h2 className="label-wrapper">
          <label className="label__lg">What needs to be done?</label>
          <input
            type="text"
            className="input input__lg"
            name="text"
            value={TaskName}
            onChange={handleInputChange}
          />
          <button type="submit" className="btn btn__primary btn__lg">
            Add
          </button>
        </h2>
      </form>
      <form onSubmit={handleSearchSubmit}>
        <h2 className="label-wrapper">
          <input
            type="text"
            className="input input__lg"
            style={{ marginTop: "1rem" }}
            placeholder="Search tasks"
            value={localSearchTerm}
            onChange={handleSearchInputChange}
          />
          <button type="submit" className="btn btn__primary btn__lg">
            Search
          </button>
        </h2>
      </form>
    </div>
  );
}

export default Form;