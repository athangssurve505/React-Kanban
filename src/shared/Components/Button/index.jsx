import "./button.css"

export default function Button ({text,variant="primary",onClick , type="button" , className}){

    return (
        <button type={type} onClick={onClick} className={`btn btn-${variant} ${className}`}>{text}</button>
    )
}