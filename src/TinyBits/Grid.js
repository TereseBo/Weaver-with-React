import Row from './Row';
import style from './Grid.css';
function Grid(props){
  
    
    let rows = [];
    let nrOfRows = props.spec.height;
    for(let i = 0; i < nrOfRows; i++){
        let key=props.spec.grid+"-row-"+i;
        rows.push(<Row y={i} x={props.spec.width} grid={props.spec.grid} key={key} />);
        console.log(key);
    }
    return <div className="grid" key={ props.spec.id} id={props.spec.grid+"-wrapper"}>{rows}</div>
}
export default Grid;