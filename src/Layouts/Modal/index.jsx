import "./modal.css";
import Icon from  "../../shared/Components/Icon"
import Input from "../../shared/Components/Input";
import TextArea from "../../shared/Components/TextArea";
import DropDown from "../../shared/Components/Dropdown"
import Button from "../../shared/Components/Button"

import useTasks from "../../Context/TaskProvider";
import { useForm } from "react-hook-form";

export default function Modal({modalsetter}){
    const { addTasks, tasks } = useTasks();

    const {
        register,
        handleSubmit,
        reset,
        formState: {  isSubmitting }
    } = useForm({
         defaultValues: {
         priority: "Medium",
         status: "Todo",
  },
});
     function onSubmit(data) {
     try {
     addTasks(data);

        reset();

        modalsetter(false);

  } catch (error) {
    console.log(error);
  }
}

    return (

        <div className="blur-bg">

            <form className="new-task-modal" onSubmit={handleSubmit(onSubmit)}>

                <header>
                    <div className="left-side">
                        <h1>Add New Task</h1>
                        <p>Create new Task for your board</p>
                    </div>

                    <div className="close-btn" onClick={()=>modalsetter(false)}>
                        <Icon name={"RiCloseLine"}    />
                    </div>
                </header>

              <div className="inputs-wrapper">

              <Input type={"text"}  
                placeholder={"e.g. Design dashboard UI"}
                label={"Task title"}
                          { ...register("title",{
                         required: "Title is required"})}
                />

                <TextArea  { ...register("description",{
             required: "Description is required"})} />

            <div className="dropdown-wrapper">
               <DropDown type={DropDown.Types.priority}
               { ...register("priority")}
               />
             <DropDown type={DropDown.Types.status}
             { ...register("status")}/>
            </div>
        

            <div className="button-wrapper">
                <Button variant={"secondary"} text={"Cancel"} 
                onClick={()=>modalsetter(false)}/>
                 <Button  text={isSubmitting?"Creating":"Create Task"} type={"submit"}/>
            </div>

              </div>

            </form>

        </div>
    )
}