class Yacht {
  constructor() {
    this.x = WIDTH / 2 + 100 ;
    this.y = HEIGHT -75;
    this.course = "";
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
    else if (course == "up") {
      this.y = (this.y + WAVESPEED);
    }

    if (this.x<0 || this.x> (WIDTH - YACHTSIZE)) game.gameOver();
    else if ((this.y<0) || this.y > (HEIGHT - YACHTSIZE)) game.gameOver();
  }

}
