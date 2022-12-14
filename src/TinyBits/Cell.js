import style from "./Cell.css";


function Cell(props){
    return <div className="cell" dataset-column={props.x} dataset-row={props.y} dataset-grid={props.grid} ></div>
}
export default Cell;