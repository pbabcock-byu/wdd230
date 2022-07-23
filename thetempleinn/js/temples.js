const requestURL = 'datafile/data.JSON';
const cards = document.querySelector('.templecards');

async function getTemples() {
  let response = await fetch(requestURL);
  if (response.ok) {
    let data = await response.json()
    //console.log(data);
    displayTempleCards(data)
    
  } else {
    throw Error(response.statusText);
  }
}

function displayTempleCards(data) {
  data.temples.forEach(temple => {

    let card = document.createElement("section");
    let templename = document.createElement("h2");
    let templeImage = document.createElement("img") 

    let templeHistory = document.createElement("p")

    let templeAddress = document.createElement("p")
    let templecontactdetails = document.createElement("p")
    let templeservices = document.createElement("p")
    let templeclosures = document.createElement("p")
    let templeordinanceschedule  = document.createElement("p")
    let templesessionschedule = document.createElement("p")
    let Templelike = document.createElement('button');
    
  
    templename.innerHTML = temple.name;
    templeImage.setAttribute("src", temple.imageurl);
    templeImage.setAttribute("alt", `Image of ${temple.name}`);
    templeImage.setAttribute("loading", "lazy");
    Templelike.innerHTML="👍 Like";
    Templelike.setAttribute("id", temple.name);
    templeHistory.innerHTML = `Temple was announced on the <strong>${temple.milestones.announced}</strong> at General Conference. The ground breaking ceremony took place on the <strong>${temple.milestones.groundbreaking}</strong> and the <br> Temple was dedicated on <strong>${temple.milestones.dedicated}</strong>.`;
    templeAddress.innerHTML = `<strong>Address:</strong><br> ${temple.address[0]} <br> ${temple.address[1]} , ${temple.address[2]}`;
    templecontactdetails.innerHTML = `<strong>Contact Information:</strong><br> 📞 ${temple.contactinfo.phone} <br> 📨 <a href=${temple.contactinfo.email}> Email Address </a>`;
    templeservices.innerHTML = `<strong>Temple Services:</strong><br> ${temple.services[0]} <br> ${temple.services[1]} <br>  ${temple.services[2]} <br>  ${temple.services[3]}` ;
    
    templeclosures.innerHTML = "<strong>Temple Closures:</strong><br>";
    for (let i in temple.closures) {
      templeclosures.innerHTML +=  temple.closures[i] + "<br>" ;
    }

    templeordinanceschedule.innerHTML = `<a href=${temple.ordinanceschedule}><strong>Ordinance Schedule</strong></a>`;
    templesessionschedule.innerHTML = `<a href=${temple.sessionschedule}><strong>Session Schedule</strong></a>`;
  
    card.append(templename);
    card.append(templeImage);
    card.append(Templelike);
    card.append(templeHistory);
    card.append(templeAddress);
    card.append(templecontactdetails);
    card.append(templeservices);
    card.append(templeclosures);
    card.append(templeordinanceschedule);
    card.append(templesessionschedule);


    cards.append(card) // appends everything to the .card as declared at the top


    


  })

  const Praialiked = window.localStorage.getItem("Praia Cape Verde Temple");
  if (Praialiked == "LIKED 👍👍") {
    document.getElementById("Praia Cape Verde Temple").innerHTML= "LIKED 👍👍"
  }

  document.getElementById('Praia Cape Verde Temple').addEventListener('click', function() {
    const Praialiked = window.localStorage.getItem("Praia Cape Verde Temple");
    if (Praialiked == "LIKED 👍👍") {
      window.localStorage.setItem('Praia Cape Verde Temple', "👍 Like");
      document.getElementById("Praia Cape Verde Temple").innerHTML= "👍 Like"
    }
    else{
      window.localStorage.setItem('Praia Cape Verde Temple', "LIKED 👍👍");
      document.getElementById("Praia Cape Verde Temple").innerHTML= "LIKED 👍👍"
    }


  }); 
  

  const Yigoliked = window.localStorage.getItem("Yigo Guam Temple");
  if (Yigoliked == "LIKED 👍👍") {
    document.getElementById("Yigo Guam Temple").innerHTML= "LIKED 👍👍"
  }

  document.getElementById('Yigo Guam Temple').addEventListener('click', function() {
    const Yigoliked = window.localStorage.getItem("Yigo Guam Temple");
    if (Yigoliked == "LIKED 👍👍") {
      window.localStorage.setItem('Yigo Guam Temple', "👍 Like");
      document.getElementById("Yigo Guam Temple").innerHTML= "👍 Like"
    }
    else{
      window.localStorage.setItem('Yigo Guam Temple', "LIKED 👍👍");
      document.getElementById("Yigo Guam Temple").innerHTML= "LIKED 👍👍"
    }
  }); 


  const Rioliked = window.localStorage.getItem("Rio de Janeiro Brazil Temple");
  if (Rioliked == "LIKED 👍👍") {
    document.getElementById("Rio de Janeiro Brazil Temple").innerHTML= "LIKED 👍👍"
  }

  document.getElementById('Rio de Janeiro Brazil Temple').addEventListener('click', function() {
    const Rioliked = window.localStorage.getItem("Rio de Janeiro Brazil Temple");
    if (Rioliked == "LIKED 👍👍") {
      window.localStorage.setItem('Rio de Janeiro Brazil Temple', "👍 Like");
      document.getElementById("Rio de Janeiro Brazil Temple").innerHTML= "👍 Like"
    }
    else{
      window.localStorage.setItem('Rio de Janeiro Brazil Temple', "LIKED 👍👍");
      document.getElementById("Rio de Janeiro Brazil Temple").innerHTML= "LIKED 👍👍"
    }
  }); 


  const Pocatelloliked = window.localStorage.getItem("Pocatello Idaho Temple");
  if (Pocatelloliked == "LIKED 👍👍") {
    document.getElementById("Pocatello Idaho Temple").innerHTML= "LIKED 👍👍"
  }

  document.getElementById('Pocatello Idaho Temple').addEventListener('click', function() {
    const Pocatelloliked = window.localStorage.getItem("Pocatello Idaho Temple");
    if (Pocatelloliked == "LIKED 👍👍") {
      window.localStorage.setItem('Pocatello Idaho Temple', "👍 Like");
      document.getElementById("Pocatello Idaho Temple").innerHTML= "👍 Like"
    }
    else{
      window.localStorage.setItem('Pocatello Idaho Temple', "LIKED 👍👍");
      document.getElementById("Pocatello Idaho Temple").innerHTML= "LIKED 👍👍"
    }
  }); 



}

getTemples();
