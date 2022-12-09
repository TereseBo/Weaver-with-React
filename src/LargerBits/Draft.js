import Grid from './../TinyBits/Grid';
import style from './Draft.css';
import spec from '../TinyBits/data';
function Draft() {
    
    return (
        <div className="Draft">
            <div className="Partial">
                <Grid key="result" spec={spec.result} /><Grid key="tredles" spec={spec.tredles}/>

            </div>
            <div className="Partial">
                <Grid key="shafts" spec={spec.shafts} /><Grid key="tie-up" spec={spec.tieup}/>
            </div>
        </div>
    )
}

export default Draft;