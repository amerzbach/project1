class Yacht {
  constructor() {
    this.x = WIDTH / 2 + 100 ;
    this.y = HEIGHT -75;
    this.course = "up";
    this.rect = {
      left: this.x,
      right: this.x + YACHTSIZE,
      top: this.y,
      bottom: this.y + YACHTSIZE
    }
  }

  setup() {
    this.img = loadImage("assets/red-sail-boat.gif");
  }

  draw() {
    image(this.img,this.x,this.y,YACHTSIZE,YACHTSIZE);
    this.rect = {
      left: this.x,
      right: this.x + YACHTSIZE,
      top: this.y,
      bottom: this.y + YACHTSIZE
    }
  }

  sail(course) {
    //Controls the sailing course using keys combinations from main.js draw function
    if (course == "upLeft") {
      this.x = (this.x - (1*SAILSPEED));
      this.y = (this.y - (1*SAILSPEED));
    }
    else if (course == "upRight") {
      this.x = (this.x + (1*SAILSPEED));
      this.y = (this.y - (1*SAILSPEED));
    }
    else if (course == "downLeft") {
      this.x = (this.x - (1*SAILSPEED));
      this.y = (this.y + (1*SAILSPEED));
    }
    else if (course == "downRight") {
      this.x = (this.x + (1*SAILSPEED));
      this.y = (this.y + (1*SAILSPEED));
    }
    else if (course == "left") {
      this.x = (this.x - (1*SAILSPEED));
    }
    else if (course == "right") {
      this.x = (this.x + (1*SAILSPEED));
    }
    else if (course == "down") {
      this.y = (this.y + (1*SAILSPEED));
    }
    // In case tries to sail against the wind the yacht will sail back slowly
    else if (course == "up") {
      this.y = (this.y + WAVESPEED);
    }

    // Control that the yacht does not sail out from any of the 4 canvas boundaries
    // Top limit is y = 128 due to the sea image - sea-sky limit
    if (this.x<0) this.x = this.x + YACHTSIZE/4;
    else if (this.x> (WIDTH - YACHTSIZE)) this.x = this.x - YACHTSIZE/4;
    else if (this.y<=118) this.y = 118;
    else if (this.y > (HEIGHT - YACHTSIZE)) this.y = HEIGHT - YACHTSIZE;
   
    //Control the regatta steps and guide the user with messages
    if ((regattaStep === 0) && (this.x < game.buoy2.x) && (this.y < game.buoy2.y)) {
      text("GO TO BUOY 3",WIDTH/3,HEIGHT/2);
      instructionsNode.innerHTML = "Sail to buoy 3"
      regattaStep++;
      noLoop();
      setTimeout(loop,1000);
    }
    else if ((regattaStep === 1) && (this.x < game.buoy3.x) && (this.y > game.buoy3.y)) {
      text("GO TO BUOY 1",WIDTH/3,HEIGHT/2);
      instructionsNode.innerHTML = "Sail to buoy 1"
      regattaStep++;
      noLoop();
      setTimeout(loop,1000);
    }
    else if ((regattaStep === 2) && (this.x > game.buoy1.x) && (this.y > game.buoy1.y)) {
      text("GO TO BUOY 2",WIDTH/3,HEIGHT/2);
      instructionsNode.innerHTML = "Sail to buoy 2"
      regattaStep++;
      noLoop();
      setTimeout(loop,1000);
    }
    else if ((regattaStep === 3) && (this.x < game.buoy2.x) && (this.y < game.buoy2.y)) {
      text("GO TO BUOY 1",WIDTH/3,HEIGHT/2);
      instructionsNode.innerHTML = "Sail to buoy 1"
      regattaStep++;
      noLoop();
      setTimeout(loop,1000);
    }
    else if ((regattaStep === 4) && (this.x > game.buoy1.x) && (this.y > game.buoy1.y)) {
      text("GO TO FINISH",WIDTH/3,HEIGHT/2);
      instructionsNode.innerHTML = "Sail to cross finish line"
      regattaStep++;
      noLoop();
      setTimeout(loop,1000);
    }
    else if ((regattaStep === 5) && (this.y < game.buoy1.y) && (this.y < game.raceCommittee.y) && (this.x > game.buoy1.x) && (this.x < game.raceCommittee.x)) {
      text("CONGRATS YOU FINISH",WIDTH/4,HEIGHT/2);
      instructionsNode.innerHTML = "Regatta Finished - <a href=''>Click here to restart</a>"
      regattaStep++;
      noLoop();
      setTimeout(loop,3000);
    }
}
}
