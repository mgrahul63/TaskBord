/* eslint-disable react/prop-types */
import { useState } from "react";
const TaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState("");
  return (
    <div className="form">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        onClick={
          task.trim().length > 0
            ? () => {
                onAddTask(task);
                setTask("");
              }
            : () => setTask("")
        }
      >
        Add
      </button>
    </div>
  );
};

export default TaskForm;
