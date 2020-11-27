var fixed,moving;




function setup() {
  createCanvas(1200,600);
  fixed= createSprite(800, 400, 100, 50);
  fixed.shapeColor="green";
  fixed.debug=true;
  moving=createSprite(500,400,50,50);
  moving.shapeColor="green";
  moving.debug=true;
}

function draw() {
  background(0);  
  moving.y=World.mouseY;
  moving.x=World.mouseX;  

  if(fixed.x-moving.x<=fixed.width/2+moving.width/2 &&
    moving.x-fixed.x<=fixed.width/2+moving.width/2 &&
    moving.y-fixed.y<=fixed.height/2+moving.height/2 &&
    fixed.y-moving.y<=fixed.height/2+moving.height/2
    ){    
    fixed.shapeColor="red";
    moving.shapeColor="red";

  }
  else
  {
    fixed.shapeColor="green";
    moving.shapeColor="green";
  }
  drawSprites();
}