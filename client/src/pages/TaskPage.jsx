import { useEffect, useState } from "react";
import { getTasksRequest } from "../api/task.api";
import TaskCard from "../components/TaskCard";

function TaskPage() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    async function loadTasks() {
      try {
        const data = await getTasksRequest()
        setTasks(data);
      } catch (error) {
        console.error("Error al obtener las tareas:", error)
      }
    }
    loadTasks();
  }, []);

  return (
    <div>
      <h1>Tasks</h1>
      {tasks.map(task => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
}

export default TaskPage;
