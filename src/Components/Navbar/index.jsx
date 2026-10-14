import Button from "../../shared/Components/Button"
import ThemeToggler from "../../shared/Components/ThemeToggler"
import "./navbar.css"


export default function Navbar({themeChanger, theme}) {
  return (
    <div className="navbar-wrapper">
        <h1>Platform Launch</h1>
       <div className="buttons-wrapper">
         <Button text={"Add New Task +"} />
        <ThemeToggler themeChanger={themeChanger} theme ={theme}/>
       </div>
    </div>
  )
}
