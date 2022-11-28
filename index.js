// fetch api

function getMake() {
  document.getElementsByTagName("h2").innerHTML;
}

function getDetails(model, year, transmission) {
  let model = document.getElementById("li1").innerHTML;
  let year = document.getElementById("li2").innerHTML;
  let transmission = document.getElementById("li3");
}

fetch("./index.json")
  .then((response) => {
    console.log("resolved", response);
  })
  .catch((err) => {
    console.log("rejected", err);
  });
