import "./column.css"


export default function Column({colName, child,color}){
    return (
        <div className="column">
            <div className="col-name-wrapper">
                <div className="circle" style={{backgroundColor:color}}></div>
                <p>{colName}</p>
            </div>
            {child}
            
        </div>

    )
}