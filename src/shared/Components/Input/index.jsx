import "./input.css";

export default function Input({label , type , placeholder}) {
  return (
   <div className='input-wrapper'>

    <label>{label}</label>
    <input type={type} 
    placeholder={placeholder}
    />
   </div>
  )
}
