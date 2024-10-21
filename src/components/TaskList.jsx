import { useTasks } from "../contexts/TasksContext";
import Task from "./Task";

const TaskList = () => {
  const tasks = useTasks();
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {" "}
          {/* Ensure task.id is unique */}
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
