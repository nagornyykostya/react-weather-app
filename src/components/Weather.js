import React from "react";


const Weather = props => (<div>
    {props.city &&
        <div className="results">
            <p>Location: {props.city}</p>
            <p>Temperature: {props.temp} </p>
            <p>Pressure: {props.pressure} </p>
            <p>Sunset: {props.sunset} </p>
        </div>
    }
    <p>{props.error}</p>
</div>
);


export default Weather;