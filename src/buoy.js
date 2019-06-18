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
    if (this.intersectRect(this.rect,game.yacht1.rect)) {
      gameCredits = gameCredits - 20;
      console.log(gameCredits);
      textSize(20);
      fill("red");
      text("Bouy Touched",this.x,this.y-50);
      game.yacht1.x = game.yacht1.x + BUOYSIZE;
      game.yacht1.y = game.yacht1.y + BUOYSIZE;
      noLoop();
      setTimeout(loop,1000);
      return true;
    } 
    return false;
    // if (this.intersectCircRect(this,game.yacht1.rect)) game.gameOver(); 
  }

  intersectRect(rectA, rectB) {
    return !(
      rectA.left > rectB.right ||
      rectA.right < rectB.left ||
      rectA.top > rectB.bottom ||
      rectA.bottom < rectB.top
    );
  }

  intersectCircRect(circle,rect) {

    if      (sqrt((rect.right - this.x)^2 + (rect.bottom - this.y)^2) < this.radius) return true;
    else if (sqrt((rect.right - this.x)^2 + (rect.top - this.y)^2) < this.radius) return true;
    else if (sqrt((rect.left - this.x)^2 + (rect.top - this.y)^2) < this.radius) return true;
    else if (sqrt((rect.left - this.x)^2 + (rect.bottom - this.y)^2) < this.radius) return true;
    return false;
  }
  
}