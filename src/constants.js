// Global Constants

const WIDTH = 800;
const HEIGHT = 600;
const SAILSPEED = 1;
const WAVESPEED = SAILSPEED * 0.2;
const YACHTSIZE = 50;
const BUOYSIZE = 26;


// Global Variables

let startTimer = 10;
let gameCredits = 100;
let regattaStarted = false;
let regattaStep = 0;


// DOM Manipulation Variables

let parentNode = document.getElementById("notifications");
let creditsNode = document.createElement("H4");
let instructionsNode =document.createElement("H4");

creditsNode.innerHTML = "Game Credits "+ gameCredits;
instructionsNode.innerHTML = "Wait behind the start line";
parentNode.appendChild(creditsNode);
parentNode.appendChild(instructionsNode);


