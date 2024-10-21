/* eslint-disable react/prop-types */

import { useState } from "react";
import { useTasksDispatch } from "../contexts/TasksContext";

const Task = ({ task }) => {
  const [isEdiitng, setIsEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const dispatch = useTasksDispatch();

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

            dispatch({
              type: "changed",
              task: {
                ...task,
                text,
              },
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
          dispatch({
            type: "changed",
            task: {
              ...task,
              done: e.target.checked,
            },
          });
        }}
      />
      <span className="btn">
        {" "}
        {taskContent}{" "}
        <button
          onClick={() => {
            if (confirm("Are you sure?")) {
              dispatch({
                type: "deleted",
                id: task.id,
              });
            }
          }}
        >
          Delete
        </button>
      </span>
    </label>
  );
};

export default Task;
