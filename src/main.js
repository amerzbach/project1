const game = new Game();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  // DOM Parent node where the game board will appear
  canvas.parent("game-board");
  game.setup();
}

function draw() {
  game.draw();
  //Controls the sailing course using keys combinations. By default the boat
  //sails Up - Moving Down simulating a real boat
  game.yacht1.sail("up");
  if (keyIsDown(LEFT_ARROW) && keyIsDown(UP_ARROW)) game.yacht1.sail("upLeft");   
  else if (keyIsDown(RIGHT_ARROW) && keyIsDown(UP_ARROW)) game.yacht1.sail("upRight"); 
  else if (keyIsDown(LEFT_ARROW) && keyIsDown(DOWN_ARROW)) game.yacht1.sail("downLeft"); 
  else if (keyIsDown(RIGHT_ARROW) && keyIsDown(DOWN_ARROW)) game.yacht1.sail("downRight"); 
  else if (keyIsDown(LEFT_ARROW)) game.yacht1.sail("left"); 
  else if (keyIsDown(RIGHT_ARROW)) game.yacht1.sail("right"); 
  else if (keyIsDown(DOWN_ARROW)) game.yacht1.sail("down"); 
  else if (keyIsDown(UP_ARROW)) game.yacht1.sail("up"); 
}
