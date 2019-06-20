class RaceCommittee {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.rect = {
      left: this.x,
      right: this.x + YACHTSIZE,
      top: this.y,
      bottom: this.y + YACHTSIZE
    }
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
      text("START - Sail to BUOY 2",WIDTH/4,HEIGHT/2);
      instructionsNode.innerHTML = "Sail to buoy 2"
      regattaStarted = true;
    }
    else if (startTimer === -1) text(" ",WIDTH/4,HEIGHT/2);
    else text(startTimer,WIDTH/2,HEIGHT/2);
 
    if (frameCount % 60 == 0 && startTimer >= 0)  startTimer--;
    
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
      fill("fill");
      text("Race Committee Touched",this.x -50,this.y);
      game.yacht1.x = this.x;
      game.yacht1.y = this.y + YACHTSIZE*2;
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

}
