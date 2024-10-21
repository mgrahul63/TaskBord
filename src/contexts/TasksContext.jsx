/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import { initialTasks } from "../assets/data";
import TaskReducer from "../reducers/TaskReducer";

//create context
export const taskContext = createContext(null);
export const taskDispatchContext = createContext(null);

//use context another component
export function useTasks() {
  return useContext(taskContext);
}
export function useTasksDispatch() {
  return useContext(taskDispatchContext);
}

const TasksProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(TaskReducer, initialTasks);
  return (
    <taskContext.Provider value={tasks}>
      <taskDispatchContext.Provider value={dispatch}>
        {children}
      </taskDispatchContext.Provider>
    </taskContext.Provider>
  );
};

export default TasksProvider;
