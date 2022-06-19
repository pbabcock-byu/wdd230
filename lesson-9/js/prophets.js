const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

async function getProphet() {
  let response = await fetch(requestURL);
  if (response.ok) {
    let data = await response.json()
    //console.log(data);
    displayProphetCards(data)
    
  } else {
    throw Error(response.statusText);
  }
}

function displayProphetCards(data) {
  data.prophets.forEach(prophet => {

    let card = document.createElement("section");
    let Profname = document.createElement("h2"); 
    let profBirthDate = document.createElement("p")
    let profBirthPlace = document.createElement("p")
    let profImage = document.createElement("img")


    
    Profname.innerHTML = prophet.name + " " + prophet.lastname;
    profBirthDate.innerHTML = "Date of Birth: " + prophet.birthdate;
    profBirthPlace.innerHTML = "Place of Birth: " + prophet.birthplace;

    profImage.setAttribute("src", prophet.imageurl);
    profImage.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
    profImage.setAttribute("loading", "lazy");

  
    card.append(Profname);
    card.append(profBirthDate);
    card.append(profBirthPlace);
    card.append(profImage);

    cards.append(card) // appends everything to the .card as declared at the top
  })
}





getProphet();