
class Mole{

constructor(x,y){
  this.x = x;
  this.y = y;
  this.dir = -1;


}

logic(){

  this.y+=this.dir;

  if (this.y < 350 || this.y > 450) {this.dir*=-1;

  }

}
show(){

  textSize(33);
  image(bild, this.x, this.y,100,100);
  text('Want to play?',200,200);


}


}
