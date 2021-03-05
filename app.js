// Color Switcher Main Function

// Global Variables

document.getElementById("orange").onclick = switchOrange; //Orange Color Tab

document.getElementById("yellow").onclick = switchYellow; //Yellow Color Tab

document.getElementById("blue").onclick = switchBlue; //Blue Color Tab

document.getElementById("purple").onclick = switchPurple; //Purple Color Tab

document.getElementById("black").onclick = switchBlack; //Black Color Tab

// Switch Functions

// Orange Color
function switchOrange() {
  document.getElementsByTagName("body")[0].style.backgroundColor = "#ff6347";
  document.getElementsByTagName("body")[0].style.color = "#ffffff";
  document.getElementsByTagName("h1")[0].style.color = "#ffffff";
  document.getElementsByTagName("h2")[0].style.color = "#ffffff";
}

// Yellow Color
function switchYellow() {
  document.getElementsByTagName("body")[0].style.backgroundColor = "#fff347";
  document.getElementsByTagName("body")[0].style.color = "#2f2f2f";
  document.getElementsByTagName("h1")[0].style.color = "#2f2f2f";
  document.getElementsByTagName("h2")[0].style.color = "#2f2f2f";
}

// Blue Color
function switchBlue() {
  document.getElementsByTagName("body")[0].style.backgroundColor = "#267bfa";
  document.getElementsByTagName("body")[0].style.color = "#ffffff";
  document.getElementsByTagName("h1")[0].style.color = "#ffffff";
  document.getElementsByTagName("h2")[0].style.color = "#ffffff";
}

// Purple Color
function switchPurple() {
  document.getElementsByTagName("body")[0].style.backgroundColor = "#9c31ff";
  document.getElementsByTagName("body")[0].style.color = "#ffffff";
  document.getElementsByTagName("h1")[0].style.color = "#ffffff";
  document.getElementsByTagName("h2")[0].style.color = "#ffffff";
}

// Black Color
function switchBlack() {
  document.getElementsByTagName("body")[0].style.backgroundColor = "#333333";
  document.getElementsByTagName("body")[0].style.color = "#ffffff";
  document.getElementsByTagName("h1")[0].style.color = "#ffffff";
  document.getElementsByTagName("h2")[0].style.color = "#ffffff";
}

// ### Display Current Year on Footer Credit ###

// Initialize the Date Function
let getYear = new Date();

// Get Current Year
let thisYear = getYear.getFullYear();

// Year Container
const yearContainer = document.getElementById("year");

// Show Current Year in The Page
yearContainer.innerHTML = thisYear;
