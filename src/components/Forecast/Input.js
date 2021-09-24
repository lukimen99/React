import React from "react";
import "./Inputstyle.css"

const Input =(props)=>{
    return(
    <div>
        <h2>Sprawdź aktualną pogodę</h2>
            <form onSubmit={props.getForecast}>
                <input
                    type="text"
                    placeholder="Wprowadź miasto"
                    maxLength="25"
                    value={props.city}
                    onChange={(e) => props.setCity(e.target.value)}
                    className="TextInput"
                    />
                <label className="Radio">
                    <input 
                        type="radio"
                        name="units"
                        checked={props.unit==="metric"}
                        value="metric"
                        onChange={(e)=> props.setUnit(e.target.value)}
                        className="TextInput"
                        />
                        Celsjusz
                </label>
                <label className="Radio">
                    <input 
                        type="radio"
                        name="units"
                        checked={props.unit==="imperial"}
                        value="imperial"
                        onChange={(e)=> props.setUnit(e.target.value)}
                        className="TextInput"
                        />
                        Fahrenheit
                </label>
                <button className="Button" type="submit">Sprawdź</button>
            </form>
            {/* <form onSubmit={props.getLocation}>
                <button className="Button1" type="submit" >Sprawdź pogodę w aktualnej lokalizacji</button>
            </form> */}
            </div>
    )
}
export default Input;