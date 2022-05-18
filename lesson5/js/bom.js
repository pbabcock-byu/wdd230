document.querySelector('#submitbutton').addEventListener('click', submitbutton);


/*function submitbutton() {
  let favchap = parseInt(document.querySelector('#favchap').value);
  let result = "test"
  document.querySelector('#favchap').value = result;

}

function submitbutton() {
  let favchap = (document.querySelector('#favchap').value;
  const newDiv = document.createElement("list");
  newDiv.innerHTML = "<li>nooooo</li>";
  document.body.appendChild(newDiv);
}
function submitbutton() {
  const link = document.getElementById('favchap');
  link.placeholder = "LOL"
  document.getElementById('favchap').append 
}

function submitbutton() {
  const sect = document.querySelector('section');
  const para = document.createElement('p');
  para.textContent = 'We hope you enjoyed the ride.';
  sect.appendChild(para);
}
*/

function submitbutton() {

 /* creates access to the text box */
  const favchap = document.getElementById('#favchap');

  /* creates access to the ul section */
  const sect = document.querySelector('ul');
  /* creates the li and the button under the ul */
  const para = document.createElement('li');
  const newbutton = document.createElement("BUTTON");

  /* loads the content of the txt box into a favchap1 */
  let favchap1 = document.querySelector('#favchap').value;

  para.textContent = favchap1 ;
  newbutton.textContent = "X";
  /* updates the list part (li) and adds the button in too */
  sect.appendChild(para);
  sect.appendChild(newbutton);

  /*const listdiv = document.getElementById('#listcontainer');
  

   code not working
  
  favchap.placeholder = "Alma 6";
  favchap.textContent = ""
  document.getElementById('favchap').append; */

}

/*
  
let favchaptxt = document.querySelector('#favchap').value;
newbutton.id= favchaptxt;

*/