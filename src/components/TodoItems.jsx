import React from 'react';
import tick from '../assets/tick.png';
import not_tick from '../assets/not_tick.png';
import delete_icon from '../assets/delete.png';

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      {/* Task and Complete Toggle */}
      <div
        className="flex flex-1 items-center cursor-pointer"
        onClick={() => toggle(id)}
        role="button"
        aria-pressed={isComplete}
        tabIndex="0" // Makes it focusable
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') toggle(id); // Accessible toggle with keyboard
        }}
      >
        <img
          src={isComplete ? tick : not_tick}
          alt={isComplete ? 'Completed task' : 'Incomplete task'}
          className="w-7"
        />
        <p
          className={`ml-4 text-[17px] ${
            isComplete ? 'line-through text-gray-500' : 'text-slate-700'
          }`}
        >
          {text}
        </p>
      </div>

      {/* Delete Icon */}
      <img
        onClick={() => deleteTodo(id)}
        src={delete_icon}
        alt="Delete task"
        className="w-3.5 cursor-pointer"
        role="button"
        tabIndex="0"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') deleteTodo(id); // Accessible delete with keyboard
        }}
      />
    </div>
  );
};

export default TodoItems;
