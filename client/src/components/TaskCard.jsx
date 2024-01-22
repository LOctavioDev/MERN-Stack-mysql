import {useTask} from '../context/taskProvider'

const TaskCard = ({task}) => {

    const {deleteTask} = useTask()
 

    return (
        <div>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <span>{task.done === 1 ? "👌" : "🤐"}</span>
          <span>{task.createAt}</span>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
          <button>Editar</button>
        </div>
    );
}

export default TaskCard;
