/* eslint-disable react/prop-types */
import Task from "./Task";

const TaskList = ({ tasks, onChangeTask, onDeleteTask }) => {
  

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {" "}
          {/* Ensure task.id is unique */}
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
