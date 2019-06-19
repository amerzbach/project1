

class RaceCommittee {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.course = "up";
    this.rect = {
      left: this.x,
      right: this.x + YACHTSIZE,
      top: this.y,
      bottom: this.y + YACHTSIZE
    }
    // this.imaginaryLine = {};
  }

  setup() {
    this.img = loadImage("assets/racecommittee.png");
  }

  draw() {
    image(this.img,this.x,this.y,YACHTSIZE,YACHTSIZE);
    this.checkCommitteeCollision();
    fill("orange");
    textSize(50);
    
    if (startTimer === 0) {
      text("START - GO TO BUOY 2",WIDTH/4,HEIGHT/2);
      instructionsNode.innerHTML = "Sail to buoy 2"
      regattaStarted = true;
    }
    else if (startTimer === -1) {
      text("",WIDTH/2,HEIGHT/2);
    }
    else {
      text(startTimer,WIDTH/2,HEIGHT/2);
      // this.drawImaginaryLine();
    }  
    if (frameCount % 60 == 0 && startTimer > -1)  startTimer--;
    
    // Committee boat starts to sail to finish position at step 4
    if (this.y > (game.buoy2.y - (YACHTSIZE/2)) && regattaStep >= 4) {
        this.y = (this.y - (1*SAILSPEED));
    }

    this.rect = {
      left: this.x,
      right: this.x + YACHTSIZE,
      top: this.y,
      bottom: this.y + YACHTSIZE
    }
  }
  
  checkCommitteeCollision() {
    if (this.intersectRect(this.rect,game.yacht1.rect)) {
      gameCredits = gameCredits - 20;
      creditsNode.innerHTML = "Game Credits "+ gameCredits;
      textSize(20);
      fill("red");
      text("Race Committee Touched",this.x,this.y-50);
      game.yacht1.x = game.yacht1.x + BUOYSIZE;
      game.yacht1.y = game.yacht1.y + BUOYSIZE;
      noLoop();
      setTimeout(loop,1000);
    }
  }

  intersectRect(rectA, rectB) {
    return !(
      rectA.left > rectB.right ||
      rectA.right < rectB.left ||
      rectA.top >= rectB.bottom ||
      rectA.bottom <= rectB.top
    );
  }

  /*
  drawImaginaryLine () {
    stroke("orange");
    line(game.buoy1.rect.right,game.buoy1.y,this.rect.left,this.y+(YACHTSIZE/2));
    
    this.imaginaryLine = {
      left: game.buoy1.rect.right,
      right: this.rect.left,
      top: game.buoy1.y,
      bottom: this.y+(YACHTSIZE/2)
    }
  }
  */
}
