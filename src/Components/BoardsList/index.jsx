import { useState } from "react";
import "./boardlist.css";



const boards = [
  { id: 1, title: "Platform Launch", status: "Pending" },
  { id: 2, title: "Marketing Plan ", status: "Completed" },
  { id: 3, title: "RoadMap", status: "Pending" },
];

export default function BoardsList() {
  const [activeBoard, setsetActiveBoard] = useState("Platform Launch")

  return (
    <div className="board-wrapper">
      <p>{`All Boards (${boards.length})`}</p>
      { 
        
        boards.map((board)=>{
          
          return<div key={board.id} className={`board-item ${activeBoard === board.title?"active":""}`}
          onClick={()=>setsetActiveBoard(board.title)}> 
            <p >{board.title}</p> 
            </div>
        })
       
      }
    </div>
  )
}
