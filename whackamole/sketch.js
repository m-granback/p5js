var mulle;
var bild;
var hammer;
var rott = false;

function preload(){
  bild = loadImage('https://image.shutterstock.com/image-vector/cartoon-funny-mole-260nw-456602506.jpg');
  hammer = loadImage('https://thumbs.dreamstime.com/z/retro-cartoon-stone-hammer-texture-isolated-white-37598412.jpg');
}


function setup() {
  mulle = new Mole(200,400);

}

function draw() {
  createCanvas(600,600);
  background(255);
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



}
function mousePressed(){

  rott = true;

}
function mouseReleased(){
rott = false;

}
