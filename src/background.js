class Background {
  constructor() {
    this.x = 0;
    this.x1 = WIDTH;
  }

  setup() {
    // this.bgImg = loadImage("assets/bg.png");
  }

  draw() {
    
    
    fill("cyan");
    rect(0,0,WIDTH,HEIGHT);

    /*
    image(this.bgImg, this.x, 0, width, height);
    image(this.bgImg, this.x1, 0, width, height);

    this.x -= 5;
    this.x1 -= 5;

    if (this.x < -width) {
      this.x = width;
    }
    if (this.x1 < -width) {
      this.x1 = width;
    }
    */
  }
}