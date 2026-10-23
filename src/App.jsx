import { useState } from "react";
import "./App.css"
import Navbar from "./Components/Navbar"
import SideBar from "./Layouts/Sidebar"
import Board from "./Layouts/Board";
import Modal from "./Layouts/Modal";



export default function App() {
const [theme, setTheme] = useState("dark");

console.log("App runs")

function changeTheme (){
    setTheme((prev)=>{
        return prev === "dark"?"light":"dark"
    }
    )
}

  return (
    <div className="main-app" data-theme={theme}>
      <SideBar/>
      <div className="main-content">
        <Navbar themeChanger={changeTheme} theme={theme}/>
      <Board/>
      </div>

      <Modal/>
    </div>
  )
}
