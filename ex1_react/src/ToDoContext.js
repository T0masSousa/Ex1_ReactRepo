import React, { createContext, useState, useEffect } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
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
    console.log(tasks)

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

  const toggleTaskCompleted = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const editTask = (taskId, newName) => {
    const editedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTasks);
  };

  const deleteTask = (taskId) => {
    const remainingTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(remainingTasks);
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

  return (
    <TodoContext.Provider value={{
      tasks,
      addTask,
      toggleTaskCompleted,
      editTask,
      deleteTask,
      searchTerm,
      setSearchTerm,
      filter,
      setFilter,
      searchTasks,
      filterTasks
    }}>
      {children}
    </TodoContext.Provider>
  );
};