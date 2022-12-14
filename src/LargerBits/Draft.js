import Grid from './../TinyBits/Grid';
import './Draft.css';
import spec from '../TinyBits/data';
function Draft(props) {
    
    return (
        <div className="Draft">
            <div className="Partial">
                <Grid key="result" spec={spec.result} /><Grid key="tredles" spec={spec.tredles} color={props.color}/>

            </div>
            <div className="Partial">
                <Grid key="shafts" spec={spec.shafts} color={props.color}/><Grid key="tie-up" spec={spec.tieup} color='#000000'/>
            </div>
        </div>
    )
}

export default Draft;