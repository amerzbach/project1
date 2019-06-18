class Buoy {
  constructor(x,y,buoyNumber) {
      this.x = x;
      this.y = y;
      this.radius = BUOYSIZE/2;
      this.buoyNumber = buoyNumber;
  }

  draw () {
    fill ("orange");
    // this.x = this.x + Math.floor(Math.random()*1.2) - Math.floor(Math.random()*1.2);
    circle (this.x,this.y,BUOYSIZE);
    textSize(10);
    fill("black");
    text(this.buoyNumber,this.x,this.y);
    this.rect = {
      left: this.x - this.radius,
      right: this.x + this.radius,
      top: this.y - this.radius,
      bottom: this.y + this.radius
    }
    this.checkBuoyCollision();

  }

  checkBuoyCollision() {
    if (this.intersectCircle(this,game.yacht1)) {
      gameCredits = gameCredits - 20;
      textSize(20);
      fill("red");
      text("Bouy Touched",this.x,this.y-50);
      game.yacht1.x = game.yacht1.x + BUOYSIZE;
      game.yacht1.y = game.yacht1.y + BUOYSIZE;
      noLoop();
      setTimeout(loop,1000);
    } 
  }

  intersectCircle(c1,c2) {
    let circle1 = {radius: c1.radius, x: c1.x, y: c1.y};
    let circle2 = {radius: YACHTSIZE/2, x:c2.x + (YACHTSIZE/2), y: c2.y + (YACHTSIZE/2)};
    
    let dx = circle1.x - circle2.x;
    let dy = circle1.y - circle2.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance < circle1.radius + circle2.radius) {
        return true;
    }
    return false;
  }
  
}