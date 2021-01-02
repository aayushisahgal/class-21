var fixedRect, movingRect;
var go1,go2,go3

function setup() {
  createCanvas(1200, 800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  go1 = createSprite(100,200, 50,50);
  go1.shapeColor="red"
  go2 = createSprite(100,400, 50,50);
  go2.shapeColor='orange'
  go1.velocityY=10;
  go3 = createSprite(100,600, 50,50);
  go3.shapeColor='darkblue'
  go3.velocityY=-10;
}

function draw() {
  background(0, 0, 0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect, go2)) {
    movingRect.shapeColor = "yellow";
    go2.shapeColor = "purple";
  }
  else {
    movingRect.shapeColor = "cyan";
    go2.shapeColor = "green";
  }

  bounceOff(go1,go3);

  drawSprites();
}

