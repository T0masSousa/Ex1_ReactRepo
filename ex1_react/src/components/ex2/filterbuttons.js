import React, { useContext } from 'react';
import { TodoContext } from '../../ToDoContext';

function FilterButtons() {
  const { setFilter } = useContext(TodoContext);

  return (
    <div className='filter btn-group stack-exception'>
      <button type="button" className="btn toggle-btn" aria-pressed="true" onClick={() => setFilter('All')}>
        <span className="visually-hidden">Show </span><span>All</span><span className="visually-hidden"> tasks</span>
      </button>
      <button type="button" className="btn toggle-btn" aria-pressed="false" onClick={() => setFilter('Active')}>
        <span className="visually-hidden">Show </span><span>Active</span><span className="visually-hidden"> tasks</span>
      </button>
      <button type="button" className="btn toggle-btn" aria-pressed="false" onClick={() => setFilter('Completed')}>
        <span className="visually-hidden">Show </span><span>Completed</span><span className="visually-hidden"> tasks</span>
      </button>
    </div>
  );
}

export default FilterButtons;