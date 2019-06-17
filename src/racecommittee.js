let timer = 5;
let parentNode = document.getElementsByTagName("H1");
let childNode = document.createElement("H3");

class RaceCommittee {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.course = "up";
    this.regattaStarted = false;
    this.rect = {
      left: this.x,
      right: this.x + YACHTSIZE,
      top: this.y,
      bottom: this.y + YACHTSIZE
    }
    this.imaginaryLine = {};

  }

  setup() {
    this.img = loadImage("/assets/yacht.jpg");
  }

  draw() {
    image(this.img,this.x,this.y,YACHTSIZE,YACHTSIZE);
    this.checkCommitteeCollision();
    fill("orange");
    textSize(70);
    if (timer === 0) {
      text("GO",WIDTH/2,HEIGHT/2);
      this.regattaStarted = true;
    }
    else if (timer === -1) {
      text("",WIDTH/2,HEIGHT/2);
    }
    else {
      text(timer,WIDTH/2,HEIGHT/2);
      // childNode.innerText = timer;
      // parentNode.appendChild(childNode);
      this.drawImaginaryLine();
    }
      
    if (frameCount % 60 == 0 && timer > -1) timer --;
  }
  
  checkCommitteeCollision() {
    if (this.intersectRect(this.rect,game.yacht1.rect)) game.gameOver(); 
    console.log(game.yacht1.rect);
    // if (!(this.regattaStarted) && this.intersectRect(this.imaginaryLine,game.yacht1.rect)) game.gameOver(); 
  }

  intersectRect(rectA, rectB) {
    return !(
      rectA.left > rectB.right ||
      rectA.right < rectB.left ||
      rectA.top >= rectB.bottom ||
      rectA.bottom <= rectB.top
    );
  }

  drawImaginaryLine () {
    stroke("red");
    line(game.buoy1.rect.right,game.buoy1.y,this.rect.left,this.y+(YACHTSIZE/2));
    
    this.imaginaryLine = {
      left: game.buoy1.rect.right,
      right: this.rect.left,
      top: game.buoy1.y,
      bottom: this.y+(YACHTSIZE/2)
    }
    
    console.log(this.imaginaryLine);
  }

}
