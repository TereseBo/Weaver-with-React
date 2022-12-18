import Grid from './../TinyBits/Grid';
import './Draft.css';
import spec from '../TinyBits/data';
import { useState } from 'react';
function Draft(props) {
    let nrOfShafts=spec.shafts.height;
    let shaftsObj={};
    let nrOfColumns=spec.result.width;
    let warpColorsObj={};

    for(let i=0; i<nrOfShafts; i++){
        shaftsObj['shaft'+i]=[];
    }
    for(let i=0; i<nrOfColumns; i++){
        warpColorsObj['column'+i]='';
    }



    const[tiedUp, settiedUp]=useState(shaftsObj);
    const[warpColors, setWarpColors]=useState(warpColorsObj);
    console.log(warpColors);

    function onClickPick(e){
        console.log(e.target.dataset.grid);
        let grid=e.target.dataset.grid;
        switch(grid){
            case "shafts":
                console.log("shafts");
                break;
            case "tredles":
                console.log("tredles");
                break;
            case "tie-up":
                console.log("tie-up");
                break;
            case "result":
                console.log("result");
                break;
        }
    }

    
    return (
        <div className="Draft">
            <div className="Partial">
                <Grid func={onClickPick} warpColors={warpColors} key="result" spec={spec.result} /><Grid func={onClickPick}  key="tredles" spec={spec.tredles} color={props.color} tiedUp={tiedUp}/>

            </div>
            <div className="Partial">
                <Grid func={onClickPick}  setWarp={setWarpColors} key="shafts" spec={spec.shafts} color={props.color}/><Grid func={onClickPick}  settiedUp={settiedUp} key="tie-up" spec={spec.tieup} color='#000000'/>
            </div>
        </div>
    )
}

export default Draft;