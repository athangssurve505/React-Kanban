import "./button.css"

export default function Button ({text,variant="primary",onClick , type="button"}){

    return (
        <button type={type} onClick={onClick} className={`btn btn-${variant}`}>{text}</button>
    )
}