import Column from "../../Components/Column";
import "./board.css"

export default function Board(){

    return(
        <div className="main-board">
           <Column colName={"Todo"} color={"cyan"}/>
           <Column colName={"Doing"}/>
           <Column colName={"Done"} color={"green"}/>

        </div>
    )
}