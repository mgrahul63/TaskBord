const TaskReducer = (tasks, action) => {
  const nextTaskId = (tasks) => {
    return tasks[tasks.length - 1].id + 1;
  };

  switch (action.type) {
    case "added": {
      // Return the new state with the added task
      return [
        ...tasks,
        {
          id: nextTaskId(tasks),
          text: action.task,
          done: false,
        },
      ];
    }

    case "changed": {
      // Return the new state with the updated task
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else return t;
      });
    }

    case "deleted": {
      // Return the new state with the filtered tasks
      return tasks.filter((task) => task.id !== action.id);
    }

    default:
      throw new Error(`No action matched with ${action.type}`);
  }
};

export default TaskReducer;
