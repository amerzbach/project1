class Background {
  constructor() {
  }

  setup() {
    this.bgImg = loadImage("assets/seafoto_reduced.jpg");
  }

  draw() {
    image(this.bgImg,0,0,WIDTH,HEIGHT);        
  }
}
