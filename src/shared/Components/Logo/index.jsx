import logo from "../../../assets/logo.png"
import "./logo.css"


export default function Logo(){

    return (
        <div className="logo-wrapper">
        <img className="logo-img" src={logo}/>
        <h1>kanban</h1>
        </div>
    )
}