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

  function renderMain() {
    if(tasks.length === 0) return <h1>No tasks yet</h1>
    return tasks.map(task => <TaskCard task={task} key={task.id} />);
  }

  return (
    <div>
      <h1>Tasks</h1>
      {renderMain()}
    </div>
  );
}

export default TaskPage;
