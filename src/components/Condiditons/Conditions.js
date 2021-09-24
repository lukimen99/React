import React from "react";
import './Conditionsstyle.css'

const Conditions =(props)=>{
    return(
        <div className="Wrapper">
            {props.error && <small className="Small">Wprowadź miasto.</small>}
            {props.loading && <div className="Loader">Ładowanie...</div>}
            {props.responseObj.cod===200?
                <div>
                    <p><strong>{props.responseObj.name}</strong></p>
                    <p>
                        Aktualnie {Math.round(props.responseObj.main.temp)} stopni i {props.responseObj.weather[0].description}.
                    </p>
                </div>
            :null
            }
        </div>
    )
}

export default Conditions;