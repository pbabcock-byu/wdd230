// Get temperature from webpage
const temp = parseFloat(document.getElementById('temperature').textContent);
const windspeedmph = parseInt(document.getElementById('windspeed').textContent);


function wind(temperature, windspeedmph) {
  document.getElementById("windchill").innerHTML =  (35.74 + (0.6215 * temperature) - (35.75 * (windspeedmph ** 0.16)) + (0.4275 * temperature * (windspeedmph ** 0.16))).toFixed(2);
} 


if (temp <= 50 && windspeedmph > 3.0) {
   wind(temp,windspeedmph)}
else {
  document.getElementById("windchill").innerHTML= "N/A "
}

