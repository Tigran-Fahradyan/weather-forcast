import './Cities.css'
import Select from "react-select";
import {useState} from "react";
import WeatherResult from "../WeatherResultComponent/WeatherResult";

function Cities() {
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    const cities = [
        {value: "40.19_44.50", label: "Yerevan"},
        {value: "55.75_37.62", label: "Moscow"},
        {value: "35.69_51.42", label: "Tehran"}
    ]
    const handleSelectChange = (selection) => {
        if (selection.hasOwnProperty('value') && selection.value.length > 0) {
            let splitCoordinates = selection.value.split('_')
            setLatitude(splitCoordinates[0])
            setLongitude(splitCoordinates[1])
        }
    }

    return (
        <div className={'cities'}>
            <Select className={'selectBox'} placeholder={"Select a city"} onChange={handleSelectChange} options={cities}/>
            <WeatherResult latitude={latitude} longitude={longitude} />
        </div>
    )
}

export default Cities;