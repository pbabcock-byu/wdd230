const now = new Date();
const fullDate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
const currentYear = now.getFullYear();

document.querySelector("#copyrightupdate_year").innerHTML = currentYear;
document.getElementById("copyrightupdate").innerHTML = document.lastModified;