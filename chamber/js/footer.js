const format = {year: "numeric"}
const currentyear = new Date().toLocaleDateString("en-US",format);

/* This adds the copyright symbol and will update to the current year */
document.getElementById("currentyear").innerHTML= `&copy; ${currentyear} Kempton Park Chamber .:|:. Peter Babcock .:|:.  WDD 230  .:|:.  Last Updated: ${document.lastModified}`;

/*This adds the date and time when the document was last modified
document.getElementById("lastupdate").innerHTML = document.lastModified;*/

/* for menu bar */
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;