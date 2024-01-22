import { createContext, useContext, useState } from "react";
import { getTasksRequest, deleteTaskRequest, createTaskRequest } from "../api/task.api";
import { TaskContext } from "./taskContext";

export const useTask = () => {
    const context = useContext(TaskContext)
    if(!context){
        throw new Error("useTask must be used within a TaskContextProvider")
    }
    return context;
};

export const TaskContextProvider = ({ children }) => {

  const [tasks, setTasks] = useState([])

  async function loadTasks() {
    try {
      const data = await getTasksRequest()
      setTasks(data);
    } catch (error) {
      console.error("Error al obtener las tareas:", error)
    }
  }

  const deleteTask = async (id) => {
    try {
        const response = await deleteTaskRequest(id);
        setTasks(tasks.filter(task => task.id !== id))

        console.log(response)

    } catch (error) {
        console.log(error)
    }
}

  const createTask = async (task) => {
    try {
      const response = await createTaskRequest(task);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <TaskContext.Provider value={{ tasks, loadTasks, deleteTask, createTask }}>
      {children}
    </TaskContext.Provider>
  );
};
