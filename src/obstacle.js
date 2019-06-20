class Obstacle {
    constructor() {
      this.x = WIDTH;
      this.x1 = 0;
      this.y = 125;
    }

    setup() {
    }

    draw() {
      image(game.motorBoatLeft,this.x*1.2,this.y +5,50,50);
      image(game.motorBoatLeft,(this.x + 200)*1.8,this.y + 100,50,50);
      image(game.motorBoatLeft,(this.x + 100)*1.2,this.y + 200,50,50);
      image(game.motorBoatRight,(this.x1 - 200)*1.4,this.y + 410,50,50);
      image(game.motorBoatRight,(this.x1 - 100)*1.8,this.y + 300,50,50);
      image(game.motorBoatRight,this.x1,this.y+ 160,50,50);

      this.x --
      this.x1 ++
    }

}