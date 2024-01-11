async function getWeather(cityV){
    cityName.innerHTML=cityV;
    const url = `https://openweather43.p.rapidapi.com/weather?q=`+cityV;
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
            temp.innerHTML = result.main.temp;
            feels_like.innerHTML = result.main.feels_like;
            temp_min.innerHTML = result.main.temp_min;
            temp_max.innerHTML = result.main.temp_max;
            humidity.innerHTML = result.main.humidity;
            speed.innerHTML = result.wind.speed;
            deg.innerHTML = result.wind.deg;    
            // clouds      =result.clouds
        } catch (error) {
            console.error(error);
        }
    };

   tap.addEventListener("click",(e)=>{
    e.preventDefault();
    getWeather(city.value);
   
   }
   )
    getWeather('bengaluru');


