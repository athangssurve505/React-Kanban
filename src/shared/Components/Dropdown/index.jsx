import { useState } from "react";
import { RiArrowDownSLine } from "@remixicon/react";

import "./dropdown.css";




export default function DropDown({type,...props}) {
 const [value, setValue] = useState(type.data[0]);
  return (

      <div className="form-group">
        <label >{type.name}</label>

        <div className="select-wrapper">
          <span className={`status-dot ${value.toLowerCase()}`} />

          <select
            id="priority"
           {...props}
          >
            {
                type.data.map((item)=>{
                     return <option key={item} value={item}>{item}</option>;
                })
            }
           
          </select>

          <RiArrowDownSLine className="select-icon" size={20} />
        </div>
      </div>
      
      

      )}

      DropDown.Types = {
         priority: {
                name: "Priority",
        data: ["Low", "Medium", "High"],
      },
         status: {
            name: "Status",
            data: ["Todo", "Doing", "Done"],
             },
        };

      