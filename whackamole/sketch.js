var mulle;
var mole_head;
var mole_dirt;
var mole_hands;
var hammer;
var rott = false;

function preload() {
  mole_head = loadImage("mole_head.png");
  mole_dirt = loadImage("mole_dirt.png");
  mole_hands = loadImage("mole_hands.png");
  hammer = loadImage("hammer.png");
}

function setup() {
  mulle = new Mole(50, 100);
}

function draw() {
  createCanvas(900, 900);
  background(126, 170, 49);
  mulle.logic();
  mulle.show();
  image(mole_dirt, 30, 100, 150, 100);

  if (mulle.y < 100) {
    image(mole_hands, 60, 90, 90, 50);
  }
  switch (rott) {
    case false:
      image(hammer, mouseX - 50, mouseY - 50, 100, 100);
      break;
    case true:
      push();
      translate(mouseX, mouseY);
      rotate(5);
      image(hammer, -50, -50, 100, 100);
      pop();
      break;
  }
}
function mousePressed() {
  rott = true;
}
function mouseReleased() {
  rott = false;
}
