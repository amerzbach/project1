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
    this.img = loadImage("/assets/red-sail-boat.gif");
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
    console.log(regattaStep);
   
    //Control the regatta steps and guide the user with messages
    if ((this.x < game.buoy2.x) && (this.y < game.buoy2.y) && (regattaStep === 0)) {
      text("GO TO BUOY 3",WIDTH/3,HEIGHT/2);
      regattaStep++;
      noLoop();
      setTimeout(loop,1000);
    }
    else if ((this.x < game.buoy3.x) && (this.y > game.buoy3.y) && (regattaStep === 1)) {
      text("GO TO BUOY 1",WIDTH/3,HEIGHT/2);
      regattaStep++;
      noLoop();
      setTimeout(loop,1000);
    }
    else if ((this.x > game.buoy1.x) && (this.y > game.buoy1.y) && (regattaStep === 2)) {
      text("GO TO BUOY 2",WIDTH/3,HEIGHT/2);
      regattaStep++;
      noLoop();
      setTimeout(loop,1000);
    }
    else if ((this.x < game.buoy2.x) && (this.y < game.buoy2.y) && (regattaStep === 3)) {
      text("GO TO BUOY 1",WIDTH/3,HEIGHT/2);
      regattaStep++;
      noLoop();
      setTimeout(loop,1000);
    }
    else if ((this.x > game.buoy1.x) && (this.y > game.buoy1.y) && (regattaStep === 4)) {
      text("GO TO FINAL",WIDTH/3,HEIGHT/2);
      regattaStep++;
      noLoop();
      setTimeout(loop,1000);
    }
}
}
