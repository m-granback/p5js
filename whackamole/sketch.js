var mulle;
var bild;

function preload(){
  bild = loadImage('https://image.shutterstock.com/image-vector/cartoon-funny-mole-260nw-456602506.jpg');
}


function setup() {
  mulle = new Mole(200,400);

}

function draw() {
  createCanvas(600,600);
  background(255);
  mulle.logic();
  mulle.show();

}
