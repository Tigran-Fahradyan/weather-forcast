import {useEffect, useState} from "react";
import Fetcher from "../../Services/Fetcher";


function WeatherResult(coordinates) {
    const [weather, setWeather] = useState({})

    useEffect(() => {
        if (coordinates.latitude && coordinates.longitude) {
            Fetcher(coordinates.latitude, coordinates.longitude)
                .then(data => {
                    setWeather(data)
                })
        }
    })

    return (
        <div>
            {
                weather.current_weather && (
                    <div>
                        <div>
                            <p>{weather.current_weather.temperature}<span> {weather.hourly_units.temperature_2m}</span></p>
                            <p>{weather.current_weather.time}<span> {weather.timezone_abbreviation}</span></p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default WeatherResult;