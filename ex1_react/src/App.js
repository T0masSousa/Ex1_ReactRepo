import React, { useState, useEffect } from "react";
import "./App.css";

//Components
import Form from "./components/form";
import FilterButtons from "./components/filterbuttons";
import ListTasksAndState from "./components/listtasksandstate";

function App() {
  const [tasks, setTasks] = useState(() =>{
     // Carregar tarefas do localStorage
     const savedTasks = localStorage.getItem('tasks');
     return savedTasks ? JSON.parse(savedTasks) : [
       { id: "todo-0", name: "Eat", completed: true },
       { id: "todo-1", name: "Sleep", completed: false },
       { id: "todo-2", name: "Repeat", completed: false },
     ];
   });

  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Salvar tarefas no localStorage sempre que elas forem atualizadas
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskName) => {
    const newTask = {
      id: `todo-${tasks.length}`,
      name: taskName,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const searchTasks = (tasks, searchTerm) => {
    if (!searchTerm) {
      return tasks;
    }
    return tasks.filter((task) =>
      task.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filterTasks = (tasks, filter) => {
    switch (filter) {
      case "Active":
        return tasks.filter((task) => !task.completed);
      case "Completed":
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  };

  const toggleTaskCompleted = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const editTask = (taskId, Newname) => {
    const EditedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, name: Newname };
      }
      return task;
    });
    setTasks(EditedTasks);
  };

  const DeleteTask = (taskId) => {
    const remainingTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(remainingTasks);
  };

  const filteredTasks = filterTasks(tasks, filter);
  const searchedTasks = searchTasks(filteredTasks, searchTerm);

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form
        addTask={addTask}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <FilterButtons setFilter={setFilter} />
      <ListTasksAndState
        tasks={searchedTasks}
        toggleTaskCompleted={toggleTaskCompleted}
        editTask={editTask}
        deleteTask={DeleteTask}
      />
    </div>
  );
}

export default App;
