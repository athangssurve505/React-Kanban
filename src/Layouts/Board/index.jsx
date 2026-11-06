import Column from "../../Components/Column";
import "./board.css";
import useTasks from "../../Context/TaskProvider";

export default function Board(){
    const {tasks} = useTasks();
  
     const columns = [
    { name: "Todo", color: "cyan" },
    { name: "Doing", color: "purple" },
    { name: "Done", color: "green" }
  ];

    return(
        <div className="main-board">
     {
        columns.map((col)=>{
            const filteredTasks = tasks.filter(
                (task)=>{
                   return task.status === col.name ;
                }
            )
            return (
                <Column
                key={col.name}
                colName={col.name}
                color={col.color}
                tasks={filteredTasks}
             />
            )
        })
     }

        </div>
    )
}