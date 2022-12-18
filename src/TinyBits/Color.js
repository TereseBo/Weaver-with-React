function Color({setColor, color}) {
    return (
        <div>
            <label htmlFor='color'>Pick a color   </label>
            <input type='color' onChange= {e=> setColor(e.target.value)}></input>
        </div>
    )
}
export default Color;