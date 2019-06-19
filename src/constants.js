// Global Constants

const WIDTH = 800;
const HEIGHT = 600;
const SAILSPEED = 1;
const WAVESPEED = SAILSPEED * 0.2;
const YACHTSIZE = 50;
const BUOYSIZE = 26;


// Global Variables

let startTimer = 1;
let gameCredits = 100;
let regattaStarted = false;
let regattaStep = 0;
let parentNode = document.getElementById("game-pannel");
let creditsNode = document.createElement("H2");
let instructionsNode =document.createElement("H2");

creditsNode.innerHTML = "Game Credits "+ gameCredits;
instructionsNode.innerHTML = "Wait behind the start line"
document.body.appendChild(creditsNode);
document.body.appendChild(instructionsNode);

/*
var node = document.createElement("LI");                 // Create a <li> node
var textnode = document.createTextNode("Water");         // Create a text node
node.appendChild(textnode);                              // Append the text to <li>
document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"

*/

