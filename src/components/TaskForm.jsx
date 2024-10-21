import { useState } from "react";
import { useTasksDispatch } from "../contexts/TasksContext";
const TaskForm = () => {
  const [task, setTask] = useState("");

  const dispatch = useTasksDispatch();

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
                dispatch({
                  type: "added",
                  task,
                });

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
