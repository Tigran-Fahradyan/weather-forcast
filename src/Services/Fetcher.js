export default function Fetcher(lat, lng) {
    const url = "https://api.open-meteo.com/v1/forecast?latitude="+lat+"&longitude="+lng+"&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m"
    return fetch(url)
        .then(response => {
            return response.json()
        })
}

