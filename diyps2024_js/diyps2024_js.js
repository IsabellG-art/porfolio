var img;
var initials = 'IG'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = (230, 218, 218) ; // off white background
var lastscreenshot = 61; // last screenshot never taken

function preload() {
  img = loadImage('https://dma-git.github.io/images/74.png');
}

function setup() {
  createCanvas(600, 400); // canvas size
  background(screenbg); // use our background screen color
}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed) {
    newkeyChoice(choice); // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { 
  if (toolChoice == '1') {  // large circle for the cat's head
    fill(183, 183, 183); // basic cat face color
    ellipse(mouseX, mouseY, 50, 50);
  } else if (toolChoice == '2') {  // small dot for cat's nose
    fill(0); 
    ellipse(mouseX, mouseY, 5, 5);
 }  else if (toolChoice == '3') { // ears
    fill(214, 104, 23);
    // Left ear
    triangle(mouseX - 30, mouseY - 10, mouseX - 10, mouseY - 40, mouseX, mouseY - 20);
    fill(14, 14, 14);
    // Right ear
    triangle(mouseX + 30, mouseY - 10, mouseX + 10, mouseY - 40, mouseX, mouseY - 20);
  } else if (toolChoice == '4') { // body shape
    stroke(33, 33, 33);
    strokeWeight(5)
    line(mouseX, mouseY, pmouseX, pmouseY);
    strokeWeight(1)
  } else if (toolChoice == '5') { // tail
    stroke(150, 100, 50);
    strokeWeight(8); // tail
    line(mouseX, mouseY, mouseX + 10, mouseY - 10);
    strokeWeight(1);
  } else if (toolChoice == '6') { // eyes
    fill(255);
    ellipse(mouseX - 15, mouseY, 10, 10); // left eye
    ellipse(mouseX + 15, mouseY, 10, 10); // right eye
  } else if (toolChoice == '7') { // whiskers
    stroke(0);
    line(mouseX - 20, mouseY, mouseX + 20, mouseY);
  } else if (toolChoice == '8') { // small paw
    fill(92, 90, 89);
    ellipse(mouseX, mouseY, 20, 10);
  } else if (toolChoice == '9') { // bigger paw
    fill(74, 68, 64);
    ellipse(mouseX, mouseY, 30, 15);
  } else if (toolChoice == '0') { //different colors for face
    stroke(0);
    fill(random(255), random(255), random(255), random(255));
    strokeWeight(4)
    ellipse(mouseX, mouseY, 50, 50);
    strokeWeight(1)
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img, mouseX, mouseY, 50, 50);
  }
}

function clear_print() {
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
    saveme(); // call saveme which saves an image of the screen
  }
}

function saveme() {
  filename = initials + day() + hour() + minute() + second();
  if (second() != lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key = "";
  }
  lastscreenshot = second(); // set this to the current second so no more than one per second
}
