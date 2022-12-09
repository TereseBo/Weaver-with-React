import Cell from "./Cell";
import style from "./Row.css";
function Row(props){
    let cells = [];
    for(let i = 0; i < props.x; i++){
        let key=props.grid.toString()+"-"+props.y.toString()+"-"+i.toString();
        cells.push(<Cell x={i} y={props.y} grid={props.grid} key={key}/>);
    }
    return <div className="row"  id={"row-"+props.y.toString()}>{cells} </div>
}

export default Row;