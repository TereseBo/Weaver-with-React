

import "./Cell.css";


function Cell(props){
    function clickHandler(){
        console.log(props.color);
    }


    return <div className="cell" data-column={props.x} data-row={props.y} data-grid={props.grid} onClick={props.func}></div>
}
export default Cell;