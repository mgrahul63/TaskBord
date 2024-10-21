import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

import TasksProvider from "../contexts/TasksContext";

const TaskBord = () => {
  return (
    <TasksProvider>
      <h1>Prague itinerary</h1>
      <TaskForm />
      <TaskList />
    </TasksProvider>
  );
};

export default TaskBord;
