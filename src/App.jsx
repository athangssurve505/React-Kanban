import { useState } from "react";
import "./App.css"
import Navbar from "./Components/Navbar"
import SideBar from "./Layouts/Sidebar"
import Board from "./Layouts/Board";
import Modal from "./Layouts/Modal";



export default function App() {
const [theme, setTheme] = useState("dark");
const [showModal, setShowModal] = useState(false);



function changeTheme (){
    setTheme((prev)=>{
        return prev === "dark"?"light":"dark"
    }
    )
}

function toggleModal(){

  setShowModal((prev)=>{
    return !prev;
  })
}

  return (
    <div className="main-app" data-theme={theme}>
      <SideBar/>
      <div className="main-content">
        <Navbar themeChanger={changeTheme} theme={theme} modalToggler={toggleModal}  />
      <Board/>
      </div>

   {showModal &&   <Modal modalsetter={setShowModal}/>}
    </div>
  )
}
