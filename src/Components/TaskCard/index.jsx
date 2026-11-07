
import Button from "../../shared/Components/Button";
import "./taskcard.css";
import useTasks from "../../Context/TaskProvider";
export default function TaskCard({ task }) {

  const { deleteTask } = useTasks();

  function handleDelete(){
    deleteTask(task.id)
  }
   

function handleDragStart(e){
  e.dataTransfer.setData("taskId",task.id);
  e.dataTransfer.effectAllowed = "move";

}
  return (
    <div className="task-card"  draggable={true} onDragStart={handleDragStart}>

      <div className="task-card-header">
        <h3 className="task-title">{task.title}</h3>

        <span className={`priority-badge ${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>
      </div>

      <p className="task-description">
        {task.description}
      </p>

      <Button 
      text={"Delete Task"} 
      onClick={handleDelete} 
      className={"custom-btn"}
      variant={"delete"} />
    </div>
  );
}
