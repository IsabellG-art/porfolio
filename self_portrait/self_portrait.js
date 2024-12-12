function setup() {
createCanvas(600, 600);
background(207, 182, 207);
}

function draw() {
  
     strokeWeight(2)
  
    //Back Hair
  fill(0)
     strokeJoin(ROUND);
  quad(290, 455, 190, 400, 150, 310, 230, 200);
  quad(320, 430, 375, 200, 440, 300, 390, 405);
   ellipse(355, 390, 80, 60);
   ellipse(340, 215, 80, 60);
   ellipse(270, 215, 90, 60);
  
  // Neck
  fill(227, 177, 107);
   rect(275, 395, 50, 60, 15, 15, 15, 15);
   
 //arms
 fill(227, 177, 107)
 rect(175, 495, 50, 160, 15, 15, 15, 15);
  rect(371, 495, 55, 165, 15, 15, 15, 15);  
  
   
  // Shirt
   fill(17, 17, 16)
   rect(222, 420, 150, 190, 15, 15, 15, 15);
   strokeJoin(ROUND);
  triangle(445, 500, 363, 419, 370, 500);
   strokeJoin(ROUND);
  triangle(220, 500, 230, 420, 150, 500);

      //Ears
      fill(227, 177, 107)
    ellipse(190, 305, 30, 40);
    ellipse(409, 305, 30, 40);          
            
  // Face
  fill(227, 177, 107);
  ellipse(300, 300, 210, 200);

  // Eyes
  fill(255);
  ellipse(260, 280, 40, 20);
  ellipse(340, 280, 40, 20);

  // Pupils
  fill(0);
  ellipse(260, 280, 20, 20);
  ellipse(340, 280, 20, 20);

  // Mouth
  fill(240, 0, 0);
  arc(300, 350, 50, 30, 0, PI);

  // Nose
  fill(277, 117, 100);
  triangle(300, 290, 290, 330, 310, 330);
  
  //Top Hair
  fill(0)
ellipse(210, 270, 40, 30);
ellipse(250, 220, 50, 50);
ellipse(280, 220, 90, 40);
ellipse(320, 210, 90, 30);
ellipse(350, 230, 80, 40);
arc(395, 250, 70, 70, QUARTER_PI, PI+QUARTER_PI);
arc(205, 230, 120, 100, 0, HALF_PI);
  

    //Eyebrows
  fill(34, 34, 34)
   ellipse(255, 260, 40, 15);
   ellipse(355, 260, 40, 15);
   
   
   //Earrings
   fill(193, 192, 191)
   ellipse(190, 325, 10, 10);
   ellipse(180, 315, 10, 10);
   ellipse(180, 295, 10, 10); 
   ellipse(410, 325, 10, 10);
   ellipse(420, 315, 10, 10);
   ellipse(420, 295, 10, 10);  
   
  
  // Glasses
  let c = color(200, 200, 200);
   c.setAlpha(150);
   fill(c);
   rect(230, 255, 65, 50, 15, 15, 15, 15);
   rect(310, 255, 65, 50, 15, 15, 15, 15);
   fill(100, 100, 99)
     line(230, 275, 195, 290)
     line(375, 275, 405, 290)
     line(310, 278, 295, 278);

//Tail
 fill(214, 214, 214)
    strokeJoin(ROUND);
  quad(50, 490, 70, 560, 90, 400, 55, 440);

  //Cat ears
   fill(214, 214, 214)
   strokeJoin(ROUND);
triangle(170, 360, 130, 400, 175, 460);
triangle(50, 365, 105, 400, 70, 460);

  //Inner ears
     fill(253, 198, 213)
   strokeJoin(ROUND);
triangle(166, 370, 135, 400, 170, 460);
triangle(56, 375, 100, 405, 75, 460);

   // Cat
 fill(214, 214, 214)
  ellipse(120, 550, 100, 160);
  ellipse(120, 460, 120, 120);
  
   //Cat eyes
 fill(255)
  ellipse(100, 450, 30, 30);
  ellipse(140, 450, 30, 30);
  
  //Cat puplis
 fill(0)
  ellipse(100, 450, 10, 20);
  ellipse(140, 450, 10, 20);
  
 //Mouth
 fill(214, 214, 214)
 ellipse(110, 475, 20, 10);
 ellipse(130, 475, 20, 10);
line(130, 475, 150, 480);
line(132, 473, 150, 470);
line(127, 476, 150, 490);
line(112, 476, 93, 495);
line(108, 475, 90, 485);
line(108, 473, 92, 470);

  //Nose
 fill(232, 184, 196)
  ellipse(120, 470, 20, 10);
  
  
  
  //Dog
  fill(146, 116, 57)
  ellipse(520, 550, 200, 260);
  ellipse(520, 390, 190, 200);
  
    // Mouth
  fill(244, 144, 170);
  arc(520, 486, 50, 30, 0, PI);
  
    //Dog eyes
 fill(255)
  ellipse(480, 380, 40, 40);
  ellipse(560, 380, 40, 40);
  
    //Dog pupils
 fill(0)
  ellipse(480, 380, 20, 30);
  ellipse(560, 380, 20, 30);
  
  //Nose
 fill(0)
 ellipse(520, 430, 45, 30);
 
  //Dog ears
   fill(146, 116, 57)
   quad(400, 390, 440, 460, 480, 290, 400, 340); 
   quad(600, 460, 590, 470, 570, 294, 600, 320); 
}
