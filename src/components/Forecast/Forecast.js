import React, {useState} from "react";
import Conditions from "../Condiditons/Conditions";
import Input from "./Input";

const Forecast = () => {
    let [city,setCity]=useState('');
    let [unit,setUnit]=useState('metric');
    let [responseObj,setResponseObj]=useState({});
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);
    const uriEncodedCity=encodeURIComponent(city);
    let [cor,setCor]=useState('');
    function getForecast (e) {
        e.preventDefault();
        if (city.length===0){
            return setError(true)
        }
        setError(false);
        setResponseObj({});
        setLoading(true);
        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${uriEncodedCity}&lat=0&lon=0&lang=pl&units=${unit}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "cbbaf7bccfmshff81740c62e5099p181a54jsn113cd033739b",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
    })
    .then(response => response.json())
    .then(response => {
        if (response.cod !== 200) {
            throw new Error()
        }
        console.log(response)
        setResponseObj(response);
        setLoading(false);
    })
    .catch(err => {
        setError(true);
        setLoading(false);
        console.log(err.message);
    });
    }
    function getLocation(e){
        e.preventDefault();
        window.navigator.geolocation.getCurrentPosition(
        position =>{
            setCor(position.coords)
        },
        err=>{
            setError(true);
        }
    )
    setError(false);
        setResponseObj({});
        setLoading(true);
        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=&lat=${cor.latitude}&lon=${cor.longitude}&lang=pl&units=${unit}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "cbbaf7bccfmshff81740c62e5099p181a54jsn113cd033739b",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
    })
    .then(response => response.json())
    .then(response => {
        if (response.cod !== 200) {
            throw new Error()
        }
        console.log(response)
        setResponseObj(response);
        setLoading(false);
    })
    .catch(err => {
        setError(true);
        setLoading(false);
        console.log(err.message);
    });
    }

    return (
        <div>
            <Input 
            getForecast={getForecast}
            getLocation={getLocation}
            setCity={setCity}
            setUnit={setUnit}
            unit={unit}
            city={city}
            />
            <Conditions 
            responseObj={responseObj}
            error={error}
            loading={loading} 
            />
        </div>
    )
}

export default Forecast;