import "./column.css"

import TaskCard from "../TaskCard"
export default function Column({colName,color,tasks}){




    return (
        <div className="column">
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