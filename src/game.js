class Game {
  constructor() {
    this.bg = new Background();
    this.buoy1 = new Buoy(WIDTH/2,HEIGHT-100,1);
    this.buoy2 = new Buoy(WIDTH/2,200,2);
    this.buoy3 = new Buoy(100,HEIGHT/2,3);
    this.yacht1 = new Yacht();
    this.raceCommittee = new RaceCommittee(WIDTH/2 +200,HEIGHT-100-(YACHTSIZE/2));
    this.obstacles = [];
  }
  setup() {
    this.bg.setup();
    this.yacht1.setup();
    this.raceCommittee.setup();
    this.motorBoatRight = loadImage("assets/motorBoatRight.png");
    this.motorBoatLeft = loadImage("assets/motorBoatLeft.png");
  }

  draw() {
    this.bg.draw();
    this.buoy1.draw();
    this.buoy2.draw();
    this.buoy3.draw();
    this.yacht1.draw();
    this.raceCommittee.draw();
    this.checkGameStatus();
    
    if (frameCount % 500 === 0) {
      this.obstacles.push(new Obstacle());
    }
    this.obstacles.forEach(obstacle => {obstacle.draw();});
  
  }

  checkGameStatus() {
    if (gameCredits<=0) this.gameOver();
  }

  gameOver() {
    console.log("GAME OVER");
    creditsNode.innerHTML = "Game Credits "+ gameCredits + " GAME OVER";
    instructionsNode.innerHTML = "<a href=''>Click here to restart</a>"
    noLoop();
  }

}

