/* eslint-disable react/prop-types */

import { useState } from "react";

const Task = ({ task, onChange, onDelete }) => {
  const [isEdiitng, setIsEditing] = useState(false);
  const [text, setText] = useState(task.text);
  let taskContent;
  if (isEdiitng) {
    taskContent = (
      <>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={() => {
            setIsEditing(false);
            onChange({
              ...task,
              text,
            });
          }}
        >
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onChange({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      <span className="btn">
        {" "}
        {taskContent} <button onClick={() => onDelete(task.id)}>Delete</button>
      </span>
    </label>
  );
};

export default Task;
