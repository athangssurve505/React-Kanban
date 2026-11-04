import { useState,createContext,useContext } from "react";



const TaskContext = createContext(null);

export function TaskProvider({ children }){

    const [tasks, setTasks] = useState([]);


    function addTasks(taskData){
        const task = {
            ...taskData,
            id:crypto.randomUUID()
        }

        setTasks((prev)=>{
            return [...prev,task]
        })
    }

return(

    <TaskContext.Provider value={{addTasks,tasks}}>
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