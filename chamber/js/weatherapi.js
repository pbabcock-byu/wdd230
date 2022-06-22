// select HTML elements to edit
const currentTemp = document.querySelector('#temperature');
const windspeed = document.querySelector('#windspeed');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-33.9258&lon=18.4232&appid=c19f1da1cd37c68484ca5bb501e2b781';



fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // this is temporary for development only
    currentTemp.innerHTML = `<strong>${data.main.temp.toFixed(0)}</strong>`;
    windspeed.innerHTML = `<strong>${data.wind.speed.toFixed(2)}</strong>`;


    
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;
    
    weatherIcon.setAttribute('src', iconsrc);weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    
  });


  