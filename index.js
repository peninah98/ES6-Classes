class Bubble {
    constructor() {
      this.x = 200;
      this.y = 150;
    }

    move(){
        this.x = this.x + Math.random(-5, 5)
        this.y = this.y + Math.random(-5, 5)
    }

    show(){
        stroke(255)
        strokeWeight(4)
        nofill()
        ellipse(bubble.x, bubble.y,24,24)
    }
  }
  
  let bubble;
  
  function setUp() {
    createCanvas(600, 500);
    bubble = new Bubble();
    console.log(bubble.x, bubble.y);
  }
  
  function draw() {
    background(0);
    bubble.move()
    bubble.show ()  }
  