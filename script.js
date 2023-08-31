const options = {
    method: 'GET',
    headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': '285aa2a762msh04dc16c00d7beacp1ca2b6jsn7309cfe8a7bf',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city)=>{

    cityName.innerHTML = city

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(Response => Response.json())
    .then((Response) => {


        console.log(Response)
        temp.innerHTML = Response.temp
        temp2.innerHTML = Response.temp
        feels_like.innerHTML = Response.feels_like
        humidity.innerHTML = Response.humidity
        humidity2.innerHTML = Response.humidity
        min_temp.innerHTML = Response.min_temp
        max_temp.innerHTML = Response.max_temp
        wind_speed.innerHTML = Response.wind_speed
        wind_speed2.innerHTML = Response.wind_speed
        wind_degrees.innerHTML = Response.wind_degrees
        sunrise.innerHTML = Response.sunrise
        sunset.innerHTML = Response.sunset

    })
    .catch(err => console.error(err));
}

Submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")