import React, { useState } from 'react';
import './style.css'

function List({ tasks }) {

  return (
    <div>
      <ul className="task-list">
        {tasks ? (
          tasks.map((task) => (
            <li key={task.id} className="task-item">
              {Task(task)}
            </li>
          ))
        ) : (
          <p>Hey let's start</p>
        )}
      </ul>
    </div>
  );
}

function Task(task) {
    let [checking, setChecked] = useState(false)

  return (
    <label className="task">
      <input type="checkbox" checked={checking} className="checkbox" onChange={()=>setChecked(true)}/>
      <span className="task-text">{task.text}</span>
      <button className="delete-btn">Delete</button>
    </label>
  );
}

export default List;
