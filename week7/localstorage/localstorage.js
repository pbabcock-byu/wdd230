document.getElementById('storevar').addEventListener('click', function() {
  window.localStorage.setItem('Storemydata', document.getElementById("name").value);
});

document.getElementById('getdata').addEventListener('click', function() {
  const readmydata = window.localStorage.getItem("Storemydata");
  document.getElementById("showls").innerHTML= readmydata
});

document.getElementById('Delete').addEventListener('click', function() {
  window.localStorage.removeItem('Storemydata');
});


document.getElementById('2ndvar').addEventListener('click', function() {
  window.localStorage.setItem('Storemydata2', document.getElementById("name").value);
});

document.getElementById('lsobject').addEventListener('click', function() {

  const me = {name: document.getElementById("name").value,
   location: document.getElementById("location").value, 
   score: document.getElementById("Score").value};
   window.localStorage.setItem('userinfo', JSON.stringify(me));
});

document.getElementById('lsobjectshow').addEventListener('click', function() {
  const readmydata = window.localStorage.getItem("userinfo");
  document.getElementById("showls").innerHTML= readmydata
});

document.getElementById('lsobjectlocation').addEventListener('click', function() {
  const readmydata = JSON.parse(window.localStorage.getItem('userinfo'));
  document.getElementById("showls").innerHTML= readmydata.location
});


document.getElementById('clearall').addEventListener('click', function() {
  window.localStorage.clear()
});