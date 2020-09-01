async function SearchWeather(city){
  const apiId = 'f0d1ff8a8da6c76d85abdf337247ba5b';
  const units = 'metric';

  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiId}&units=${units}`);
  
  return response.json();  
}


function ShowWeatherInfo(info){
  document.getElementById('city-name').innerText = info.name;
  document.getElementById('temperature').innerText = info.main.temp;  
  document.getElementById('humidity').innerText = info.main.humidity + "%";
  document.getElementById('wind-speed').innerText = info.wind.speed + " Km/h";
  document.getElementById('country-flag').src = `https://www.countryflags.io/${info.sys.country}/flat/64.png`;

  switch(info.weather[0].main){
    case 'Clear':
      document.getElementById('weather-animation').src = "./animations/night.svg";
      document.body.style.backgroundImage = "url(./images/clear.jpg)";
      document.getElementById('weather-description').innerText = "Tempo Aberto";
    break;
    case 'Clouds':
      document.getElementById('weather-animation').src = "./animations/cloudy.svg";
      document.body.style.backgroundImage = "url(./images/clouds.jpg)";
      document.getElementById('weather-description').innerText = "Tem com Nuvens";
    break;
    case 'Rain':
    case 'Mist':
      document.getElementById('weather-animation').src = "./animations/rainy.svg";
      document.body.style.backgroundImage = "url(./images/rain.jpg)";
      document.getElementById('weather-description').innerText = "Chuva";
    break;
    case 'Thunderstorm':
      document.getElementById('weather-animation').src = "./animations/thunder.svg";
      document.body.style.backgroundImage = "url(./images/storm.jpg)";
      document.getElementById('weather-description').innerText = "Raios e Trovões";
    break;
    case 'Snow':
      document.getElementById('weather-animation').src = "./animations/snowy.svg";
      document.body.style.backgroundImage = "url(./images/snow.jpg)";
      document.getElementById('weather-description').innerText = "Neve";
    break;
  }
}


async function handleSearch(city){
  if(city){
    const data = await SearchWeather(city);
    ShowWeatherInfo(data);
  }
  else
    alert('Digite o nome da cidade!');
}


document.getElementById('button-search').addEventListener('click', () => handleSearch(document.getElementById('input-search').value));
