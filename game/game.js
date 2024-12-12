//game

var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "L1";
var img;
let bgImage
var speedX = 4;
var speedY = 3;

function preload(){
//preload() runs once, it may make you  wait
  
img = loadImage('cat.png');  
img2 = loadImage('cat-1.png');
img3 = loadImage('cat-2.png');
img4 = loadImage('cat-3.png');
bgImage = loadImage('cats.png');
bgImage2 = loadImage('end.png');
  
}


function setup() {
createCanvas(600, 600);
textAlign(CENTER);
textSize(20);
 

} // end setup


function draw() {
background(bgImage);
if(gameState == "L1"){
levelOne();
}
if(gameState == "L2"){
  levelTwo();
}
if(gameState == "L3"){
  levelThree();
}
if(gameState == "L4"){
  levelFour();
}
if (gameState == "GAME_OVER") {
    endScreen();
  }

  text(("Score: " + score), width/2, 40);
  
} //end draw

function levelOne() {
  fill(255)
 textSize(40)
  text("level 1", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall < ballSize/2){
  ballx = random(width)
  bally = random(height)
  score = score + 1; 
  }
 
  if(score>= 5){
  gameState = "L2";
  }
  
 image(img, ballx-275, bally-275, 550, 550);
  //ellipse(ballx, bally, ballSize, ballSize);
   //line(ballx, bally, mouseX, mouseY);
  
} // end of level 1

function levelTwo() {
 fill(255)
 textSize(40)
  text("level 2", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall < ballSize/2){
  ballx = random(width)
  bally = random(height)
  score = score + 1; 
  }
  
  if(score>= 15){
  gameState = "L3";
  }
  
  //line(ballx, bally, mouseX, mouseY);
  image(img2, ballx-75, bally-75, 150, 150);
  //ellipse(ballx, bally, ballSize, ballSize);
  
} // end of level 2

function levelThree() {
  fill(255)
 textSize(40)
  text("level 3", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall < ballSize/2){
  ballx = random(width)
  bally = random(height)
  score = score + 1; 
  ballSize = ballSize ;
  }
  
   if(score>= 25){
  gameState = "L4";
  }
  
  //line(ballx, bally, mouseX, mouseY);
  image(img3, ballx-100, bally-100, 200, 200);
  //ellipse(ballx, bally, ballSize, ballSize);
  
} // end of level 3

function levelFour() {
  fill(255);
  textSize(40);
  text("level 4", width / 2, height - 20);
  
  // Ball movement (random movement)
  ballx += speedX;
  bally += speedY;
  
  // If the ball hits the canvas edge, reverse its direction
  if (ballx - ballSize / 2 <= 0 || ballx + ballSize / 2 >= width) {
    speedX *= -1;  // Reverse direction on X axis
  }
  if (bally - ballSize / 2 <= 0 || bally + ballSize / 2 >= height) {
    speedY *= -1;  // Reverse direction on Y axis
  }

  // Check for distance to the mouse and handle score update
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
    ballSize = ballSize - 5; // Reduce size as the score increases
  }

  if (score >= 33) {
    gameState = "GAME_OVER";// Transition to Game Over screen when the score reaches 33
  }

  //line(ballx, bally, mouseX, mouseY);
  image(img4, ballx-50, bally-50, 100, 100);
  //ellipse(ballx, bally, ballSize, ballSize);
  
} // end of level 4

// End screen after game over
function endScreen() {
  background(bgImage2);
  textSize(50);
  text("GAME OVER", width / 2, height / 2 - 50);
  textSize(30);
  text("Final Score: " + score, width / 2, height / 2 + 20);

  // Draw Restart Button
  drawRestartButton();

  textSize(20);
  text("Click Restart Button to Play Again", width / 2, height / 2 + 60);
}

// Draw restart button on the end screen
function drawRestartButton() {
  // Draw the button background
  fill(159, 165, 165); // Color for the button
  rect(width / 2 - 100, height / 2 + 80, 200, 50, 10); // Button position and size

  // Draw the button text
  fill(255);
  textSize(20);
  text("RESTART", width / 2, height / 2 + 105);

  // Check if the mouse is over the button and clicked
  if (mouseIsPressed && mouseX > width / 2 - 100 && mouseX < width / 2 + 100 && mouseY > height / 2 + 80 && mouseY < height / 2 + 130) {
    restartGame();
  }
}

// Reset the game state and start from level 1
function restartGame() {
  score = 0;
  ballx = 300;
  bally = 300;
  ballSize = 40;
  gameState = "L1"; // Restart the game at Level 1
}
