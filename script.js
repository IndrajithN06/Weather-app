const cityName = document.getElementById('cityName');
const temp = document.getElementById('temp');
const feels_like = document.getElementById('feels_like');
const temp_min = document.getElementById('temp_min');
const temp_max = document.getElementById('temp_max');
const humidity = document.getElementById('humidity');
const speed = document.getElementById('speed');
const deg = document.getElementById('deg');
const tap = document.getElementById('tap');
const cityInput = document.getElementById('city-input');

async function getWeather(cityV) {
    cityName.innerHTML = cityV;
    const url = `https://openweather43.p.rapidapi.com/weather?q=${cityV}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '758ebfbef0msh03e92936cb3ef30p16302djsn046d973d6f8b',
            'X-RapidAPI-Host': 'openweather43.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        if (response.ok) {
            temp.innerHTML = result.main.temp;
            feels_like.innerHTML = result.main.feels_like;
            temp_min.innerHTML = result.main.temp_min;
            temp_max.innerHTML = result.main.temp_max;
            humidity.innerHTML = result.main.humidity;
            speed.innerHTML = result.wind.speed;
            deg.innerHTML = result.wind.deg;
        } else {
            alert('City not found! Please enter a valid city name.');
        }
    } catch (error) {
        console.error(error);
        alert('Failed to fetch weather data. Please try again later.');
    }
}

tap.addEventListener('click', (e) => {
    e.preventDefault();
    const city = cityInput.value;
    if (city) {
        getWeather(city);
    } else {
        alert('Please enter a city name');
    }
});
