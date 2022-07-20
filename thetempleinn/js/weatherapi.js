// select HTML elements to edit
const currentTemp = document.querySelector('#temperature');
const windspeed = document.querySelector('#windspeed');
const weatherIcon = document.querySelector('#weather-icon');

const weatherIcon1 = document.querySelector('#weather-iconday1');
const Hightemperature1 = document.querySelector("#weathertemphi_1");
const Lowtemperature1 = document.querySelector("#weathertemplow_1");
const descday1 = document.querySelector('#descday1');

const weatherIcon2 = document.querySelector('#weather-iconday2');
const Hightemperature2 = document.querySelector("#weathertemphi_2");
const Lowtemperature2 = document.querySelector("#weathertemplow_2");
const descday2 = document.querySelector('#descday2');

const weatherIcon3 = document.querySelector('#weather-iconday3');
const Hightemperature3 = document.querySelector("#weathertemphi_3");
const Lowtemperature3 = document.querySelector("#weathertemplow_3");
const descday3 = document.querySelector('#descday3');

const captionDesc = document.querySelector('figcaption');
const Humidity= document.querySelector("#Humidity");
const Hightemperature = document.querySelector("#Hightemperature");
const Lowtemperature = document.querySelector("#Lowtemperature");
 
const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=-33.9258&lon=18.4232&exclude=hourly,minutely&appid=c19f1da1cd37c68484ca5bb501e2b781&units=imperial';
            
function getDayName(dt)
{
    var date = new Date(dt * 1000);
    return date.toLocaleDateString(getDayName, { weekday: 'long' });    
}


fetch(url)
  .then((response) => response.json())
  .then((data) => {
    //console.log(data); 


    currentTemp.innerHTML = `<strong>${(data.current.temp).toFixed(2)}</strong>`;
    windspeed.innerHTML = `<strong>${data.current.wind_speed.toFixed(2)}</strong>`;
    Humidity.innerHTML = `<strong>${data.current.humidity.toFixed(2)}</strong>`;

    /*
    Hightemperature.innerHTML = `<strong>${(data.current.temp_max * 9/5 + 32).toFixed(2)}</strong>`;
    Lowtemperature.innerHTML = `<strong>${(data.main.temp_min * 9/5 + 32).toFixed(2)}</strong>`;
    'https://api.openweathermap.org/data/2.5/onecall?lat=-33.9258&lon=18.4232&exclude=hourly,minutely&units=Metric&appid=c19f1da1cd37c68484ca5bb501e2b781';
*/
    
    const iconsrc = `https://openweathermap.org/img/w/${data.current.weather[0].icon}.png`;
    const desc = data.current.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;


    /* three day forecast*/

    let weatherdayname1 = getDayName(data.daily[0].dt);
    document.querySelector("#weatherdayname1").textContent = weatherdayname1;
    const iconsrc1 = `https://openweathermap.org/img/w/${data.daily[0].weather[0].icon}.png`;
    const desc1 = data.daily[0].weather[0].description;
    weatherIcon1.setAttribute('src', iconsrc1);
    weatherIcon1.setAttribute('alt', desc1);
    Hightemperature1.innerHTML = `<strong>${(data.daily[0].temp.max).toFixed(2)}</strong>`;
    Lowtemperature1.innerHTML = `<strong>${(data.daily[0].temp.min).toFixed(2)}</strong>`;
    descday1.textContent = desc1;



    let weatherdayname2 = getDayName(data.daily[1].dt);
    document.querySelector("#weatherdayname2").textContent = weatherdayname2;
    const iconsrc2 = `https://openweathermap.org/img/w/${data.daily[1].weather[0].icon}.png`;
    const desc2 = data.daily[1].weather[0].description;
    weatherIcon2.setAttribute('src', iconsrc2);
    weatherIcon2.setAttribute('alt', desc2);
    Hightemperature2.innerHTML = `<strong>${(data.daily[1].temp.max).toFixed(2)}</strong>`;
    Lowtemperature2.innerHTML = `<strong>${(data.daily[1].temp.min).toFixed(2)}</strong>`;
    descday2.textContent = desc2;


    let weatherdayname3 = getDayName(data.daily[2].dt);
    document.querySelector("#weatherdayname3").textContent = weatherdayname2;
    const iconsrc3 = `https://openweathermap.org/img/w/${data.daily[2].weather[0].icon}.png`;
    const desc3 = data.daily[2].weather[0].description;
    weatherIcon3.setAttribute('src', iconsrc3);
    weatherIcon3.setAttribute('alt', desc3);
    Hightemperature3.innerHTML = `<strong>${(data.daily[2].temp.max).toFixed(2)}</strong>`;
    Lowtemperature3.innerHTML = `<strong>${(data.daily[2].temp.min).toFixed(2)}</strong>`;
    descday3.textContent = desc3;








    
  });


  