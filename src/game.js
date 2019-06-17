class Game {
  constructor() {
    this.bg = new Background();
    this.buoy1 = new Buoy(WIDTH/2,HEIGHT-100);
    this.buoy2 = new Buoy(WIDTH/2,200);
    this.buoy3 = new Buoy(100,HEIGHT/2);
    this.yacht1 = new Yacht();
    this.raceCommittee = new RaceCommittee(WIDTH/2 +200,HEIGHT-100-(YACHTSIZE/2));
    /*
    this.obstacles = [];
    */
  }
  setup() {
    /*
    this.topPipe = loadImage("assets/obstacle_top.png");
    this.bottomPipe = loadImage("assets/obstacle_bottom.png");
    this.bg.setup();
    this.bird.setup();
    */
    this.bg.setup();
    this.yacht1.setup();
    this.raceCommittee.setup();
  }

  draw() {
    
    this.bg.draw();
    this.buoy1.draw();
    this.buoy2.draw();
    this.buoy3.draw();
    this.yacht1.draw();
    this.raceCommittee.draw();
    /*
    this.bird.draw();

    if (frameCount % 100 === 0) {
      this.obstacles.push(new Obstacle());
    }

    this.obstacles.forEach(obstacle => {
      obstacle.draw();
    });
    */
  }

  gameOver() {
    console.log("GAME OVER");
    noLoop();
  }
}
