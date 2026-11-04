// import { useState } from "react";
import "./themetoggler.css";
import Icon from "../Icon";



export default function ThemeToggler({themeChanger , theme}) {
  return (

    <div  className={`toggler-wrapper ${theme === "dark"?"active-bg":""}`}  onClick={themeChanger}>
        <div className={`switch ${theme === "dark"?"active":""}`}>
            <Icon name={theme === "dark"?"RiSunFill":"RiMoonFill"} />
        </div>

    </div>
  )
}
