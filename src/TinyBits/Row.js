import Cell from "./Cell";
import "./Row.css";
function testis(e){
    console.log(e.target);
}


function Row(props){
    
    let cells = [];
    for(let i = 0; i < props.x; i++){
        let key=props.grid.toString()+"-"+props.y.toString()+"-"+i.toString();
        cells.push(<Cell x={i} y={props.y} grid={props.grid} key={key} color={props.color} func={props.func}/>);
    }
    return <div className="row"  id={"row-"+props.y.toString()}>{cells} </div>
} 

export default Row;