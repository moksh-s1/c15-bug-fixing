var ball;
var vx = 2;//velocity in the x direction

function setup() {
  createCanvas(400,400);

  ball = createSprite(100,100,100,100);
}

function draw() 
{
  background(51);
  //updating the condition of the ball movement
  if(ball.position.x<=50 || ball.position.x>=width-50)
  {
  //the velocity of the ball is changing directions when it hits the edge
    vx= -vx;
  }
  ball.velocity.x = vx;

  drawSprites();

}

