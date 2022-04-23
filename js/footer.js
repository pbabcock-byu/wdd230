const format = {year: "numeric"}
const currentyear = new Date().toLocaleDateString("en-US",format);

/* This adds the copyright symbol and will update to the current year */
document.getElementById("currentyear").innerHTML= `&copy; ${currentyear} .:|:. Peter Babcock .:|:.  California`;

/* This adds the date and time when the document was last modified*/
document.getElementById("lastupdate").innerHTML = document.lastModified;