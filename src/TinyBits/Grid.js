import Row from './Row';
import './Grid.css';
function Grid(props){
  
    
    let rows = [];
    let nrOfRows = props.spec.height;
    for(let i = 0; i < nrOfRows; i++){
        let key=props.spec.grid+"-row-"+i;
        rows.push(<Row y={i} x={props.spec.width} grid={props.spec.grid} key={key} color={props.color} func={props.func} />);
    }
    return <div className="grid" key={ props.spec.id} id={props.spec.grid+"-wrapper"}>{rows}</div>
}
export default Grid;