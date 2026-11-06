import { useState,createContext,useContext, useEffect } from "react";



const TaskContext = createContext(null);

export function TaskProvider({ children }){

    const [tasks, setTasks] = useState(()=>{
        const savedTasks = localStorage.getItem("tasks");

        return savedTasks?JSON.parse(savedTasks):[];
    });


    function addTasks(taskData){
        const task = {
            ...taskData,
            id:crypto.randomUUID()
        }

        setTasks((prev)=>{
            return [...prev,task]
        })
    }

    function deleteTask(id){
        setTasks((prev)=>{
            return prev.filter((task)=>task.id!=id);
        })
    }


    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    
    }, [tasks])
    

return(

    <TaskContext.Provider value={{addTasks,tasks , deleteTask}}>
        {children}
    </TaskContext.Provider>
)

}


export default function useTasks(){
    const context = useContext(TaskContext);

    if(!context){
        throw new Error("Use this inside children wrapped inside respective provider");
    }

    return context;
}