setInterval(getDate, 1000);

function getDate() {
  let d = new Date();
  document.getElementById("relogio").innerHTML= d.getHours() + ":" + d.getMinutes();

}