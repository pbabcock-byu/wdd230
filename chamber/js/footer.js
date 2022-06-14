const now = new Date();
const fullDate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
const currentYear = now.getFullYear();

/*this is for the join page to add the date when when someone loads the page
NOTE THIS FIELD IS HIDDEN*/


document.querySelector(".currentdate").innerHTML = fullDate;
document.querySelector("#copyrightupdatesmall_year").innerHTML = currentYear;
document.getElementById("copyrightupdatesmall_lastup").innerHTML = document.lastModified;
document.querySelector("#copyrightupdatemedium_year").innerHTML = currentYear;
document.getElementById("copyrightupdatemedium_lastup").innerHTML = document.lastModified;
document.querySelector("#copyrightupdatelarge_year").innerHTML = currentYear;
document.getElementById("copyrightupdatelarge_lastup").innerHTML = document.lastModified;


function toggleMenu() {
    document.getElementById("hamburgernav").classList.toggle("open");
    document.getElementById("hamburgerbtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerbtn");

x.onclick = toggleMenu; 

/*banner at the top of webpage 
const today = now.getDay();
const chambermeeting = document.getElementById("chambermeeting");
if(today === 1 || today === 2) {
    chambermeeting.style.display = "block";
}
else {
    chambermeeting.style.display = "none";
}

if click on the X in the banner is closes it 
const closems = document.querySelector("#closems");

closems.addEventListener("click", () => {
    chambermeeting.style.display = "none";
});*/


