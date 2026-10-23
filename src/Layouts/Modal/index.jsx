import "./modal.css";
import Icon from  "../../shared/Components/Icon"
import Input from "../../shared/Components/Input";
import TextArea from "../../shared/Components/TextArea";
import DropDown from "../../shared/Components/Dropdown"
import Button from "../../shared/Components/Button"

export default function Modal(){
    return (

        <div className="blur-bg">

            <div className="new-task-modal">

                <header>
                    <div className="left-side">
                        <h1>Add New Task</h1>
                        <p>Create new Task for your board</p>
                    </div>

                    <div className="close-btn">
                        <Icon name={"RiCloseLine"}  />
                    </div>
                </header>

              <div className="inputs-wrapper">

              <Input type={"text"}  
                placeholder={"e.g. Design dashboard UI"}
                label={"Task title"}
                />

                <TextArea />

            <div className="dropdown-wrapper">
               <DropDown type={DropDown.Types.priority}/>
             <DropDown type={DropDown.Types.status}/>
            </div>
        

            <div className="button-wrapper">
                <Button variant={"secondary"} text={"Cancel"}/>
                 <Button  text={"Create Task"}/>
            </div>

              </div>

            </div>

        </div>
    )
}