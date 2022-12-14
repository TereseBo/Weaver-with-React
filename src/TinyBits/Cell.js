

import "./Cell.css";

function Cell(props){
    function clickHandler(){
        console.log(props.color);
    }


    return <div className="cell" dataset-column={props.x} dataset-row={props.y} dataset-grid={props.grid} onClick={clickHandler}></div>
}
export default Cell;