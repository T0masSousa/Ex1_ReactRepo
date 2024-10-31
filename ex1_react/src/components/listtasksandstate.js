import React, { useState } from "react";

function ListTasksAndState({ tasks, toggleTaskCompleted, editTask, deleteTask }) {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [newTaskName, setNewTaskName] = useState("");

  const handleEditClick = (taskId, currentName) => {
    setEditingTaskId(taskId);
    setNewTaskName(currentName);
  };

  const handleEditChange = (event) => {
    setNewTaskName(event.target.value);
  };

  const handleEditSubmit = (taskId) => {
    editTask(taskId, newTaskName);
    setEditingTaskId(null);
    setNewTaskName("");
  };

  return (
    <div>
      <h2 id="list-heading">{tasks.length} tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {tasks.map((task) => (
          <li key={task.id} className="todo">
            <div className="stack-small">
              <div className="c-cb">
                <input
                  id={task.id}
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompleted(task.id)}
                />
                {editingTaskId === task.id ? (
                  <input
                    type="text"
                    value={newTaskName}
                    onChange={handleEditChange}
                    onBlur={() => handleEditSubmit(task.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleEditSubmit(task.id);
                      }
                    }}
                  />
                ) : (
                  <label className="todo-label" htmlFor={task.id}>
                    {task.name}
                  </label>
                )}
              </div>
              <div className="btn-group">
                {editingTaskId === task.id ? (
                  <button
                    type="button"
                    className="btn"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => handleEditSubmit(task.id)}
                  >
                    Save <span className="visually-hidden">{task.name}</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn"
                    onClick={() => handleEditClick(task.id, task.name)}
                  >
                    Edit <span className="visually-hidden">{task.name}</span>
                  </button>
                )}
                <button
                  type="button"
                  className="btn btn__danger"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete <span className="visually-hidden">{task.name}</span>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListTasksAndState;