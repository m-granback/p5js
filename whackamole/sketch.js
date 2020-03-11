var mulle;
var mole_head;
var mole_dirt;
var hammer;
var rott = false;

function preload(){
  mole_head = loadImage("mole_head.png");
  mole_dirt = loadImage("mole_dirt.png");
  hammer = loadImage('https://thumbs.dreamstime.com/z/retro-cartoon-stone-hammer-texture-isolated-white-37598412.jpg');
}


function setup() {
  mulle = new Mole(200,400);

}

function draw() {
  createCanvas(600,600);
  background(126,170,49);
  mulle.logic();
  mulle.show();
  switch (rott){
    case false:
    image(hammer,mouseX-50,mouseY-50, 100,100);
      break;
    case true:
      push();
      translate(mouseX,mouseY);
      rotate(5);
      image(hammer,-50,-50, 100,100);
      pop();
      break;
    }

image(mole_dirt,200,400,150,150);

}
function mousePressed(){

  rott = true;

}
function mouseReleased(){
rott = false;

}
