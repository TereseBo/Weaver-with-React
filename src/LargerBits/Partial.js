import Grid from '../Grid';

function Partial(props){
    return (

            <div className="Partial">
            <Grid key={props.props1.id} spec={props.props1} /><Grid key={props.props2.id} spec={props.props2}/>

        </div>
    )
}
export default Partial;