var moving;
var fixed;

function setup() {

  createCanvas(800,400);
  
  moving=createSprite(100,200,50,25);
  moving.debug=true;

  fixed=createSprite(300,100,25,50);
  fixed.debug=true;
}

function draw() {

  background(255,255,255);  
  drawSprites();

  moving.x=mouseX;
  moving.y=mouseY;

  if(moving.x-fixed.x<moving.width/2+fixed.width/2
    && fixed.x-moving.x<fixed.width/2+moving.width/2
    &&fixed.y-moving.y<fixed.height/2+moving.height/2
    &&moving.y-fixed.y<moving.height/2+fixed.height/2){
fixed.shapeColor=(1,150,235)
moving.shapeColor=(1,150,235)
  }
  else{
    fixed.shapeColor=(10,10,10)
    moving.shapeColor=(10,10,10)
  }
}