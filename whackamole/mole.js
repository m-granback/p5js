
class Mole{

constructor(x,y){
  this.x = x;
  this.y = y;
  this.count = 0;
  this.dir = -1.5;


}

logic(){

  this.y+=this.dir;

  if (this.y < 40) {this.dir*=-1;}
  if(this.y>100){
    this.dir = 0;
       this.count+=1;
        if(this.count > 100){
             this.count = 0;
            this.dir=-1.5;
           }
     }

  

}
show(){

  textSize(33);
  image(mole_head, this.x, this.y,100,100);
  text('Smash!!!',200,200);
  


}


}

