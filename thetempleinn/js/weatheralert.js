
/*banner at the top of webpage */
const today = now.getDay();
const weatheralert = document.getElementById("weatheralert");

/* API to gove website */


/*if click on the X in the banner is closes it */
const closems = document.querySelector("#closems");

closems.addEventListener("click", () => {
    weatheralert.style.display = "none";
});


