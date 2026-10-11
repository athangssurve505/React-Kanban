import "./button.css"

export default function Button ({text,variant="primary"}){

    return (
        <button className={`btn btn-${variant}`}>{text}</button>
    )
}