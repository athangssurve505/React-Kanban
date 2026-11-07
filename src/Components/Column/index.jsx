import "./column.css"

import TaskCard from "../TaskCard"
export default function Column({colName,color,tasks , onDropTask}){

  function handleDragOver(e) {
  e.preventDefault();
}

function handleDrop(e){
  e.preventDefault();

  const taskId = e.dataTransfer.getData("taskId");

  if(taskId){
    onDropTask(taskId,colName);
  }
}




    return (
        <div className="column"
          onDragOver={handleDragOver}
          onDrop={handleDrop}>
            <div className="col-name-wrapper">
                <div className="circle" style={{backgroundColor:color}}></div>
                <p>{colName}</p>
            </div>
             <div className="column-tasks">

            {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))
        ) : (
          null
        )}

      </div>
            
        </div>

    )
}