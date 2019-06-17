class Buoy {
  constructor(x,y,radius) {
      this.x = x;
      this.y = y;
      this.radius = BUOYSIZE/2;
  }

  draw () {
    fill ("orange");
    circle (this.x,this.y,BUOYSIZE);
    this.rect = {
      left: this.x - this.radius,
      right: this.x + this.radius,
      top: this.y - this.radius,
      bottom: this.y + this.radius
    }
    this.checkBuoyCollision();
  }

  checkBuoyCollision() {
    if (this.intersectRect(this.rect,game.yacht1.rect)) game.gameOver(); 
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