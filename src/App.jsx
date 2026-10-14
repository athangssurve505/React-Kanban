import { useState } from "react";
import "./App.css"
import Navbar from "./Components/Navbar"
import SideBar from "./Layouts/Sidebar"



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
      <Navbar themeChanger={changeTheme} theme={theme}/>
    </div>
  )
}
