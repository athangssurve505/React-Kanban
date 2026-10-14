import BoardsList from "../../Components/BoardsList";
import Logo from "../../shared/Components/Logo";
import "./sidebar.css"

export default function SideBar() {
  return (
    <div className="sidebar">
       <Logo/>
       <BoardsList/>
    </div>
  )
}
