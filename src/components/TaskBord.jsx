import { useState } from "react";

import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

import { initialTasks } from "../assets/data";

const TaskBord = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const nextTaskId = (tasks) => {
    return tasks[tasks.length - 1].id + 1;
  };

  // handler
  const handleAddTask = (task) => {
    setTasks([
      ...tasks,
      {
        id: nextTaskId(tasks),
        text: task,
        done: false,
      },
    ]);
  };

  const handleChangeTask = (task) => {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else return t;
      })
    );
  };

  const handleTaskDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="body">
      <h1>Prague itinerary</h1>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleTaskDelete}
      />
    </div>
  );
};

export default TaskBord;
