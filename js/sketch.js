function setup() {
    var canvas = createCanvas(800, 350);
    canvas.parent("p5container");
}

function draw() {
   
	background(10,20,67);

//Tree
fill(66,32,5);
  stroke(0);
  strokeWeight(4);
  rect(300,1,250,500);
  
  //Hole
fill(0)  
ellipse(425,180,175,300);
  
  //Wings
  
fill(229,196,165);
  ellipse(387,220,90,180);
  
fill(229,196,165);
  ellipse(463,220,90,180);

    
  //body
fill(119,70,39);
ellipse(425,220,150,200);
  
  //Chest
fill(229,196,165);
  ellipse(425,220,120,180);
  
  
  //Head left
noStroke();
fill(119,70,39);
ellipse(395,120,100,100);
  noStroke;
  
  //Head right
noStroke();
fill(119,70,39);
ellipse(450,120,100,100);
  
  //brow
  
stroke(119,70,39); 
  strokeWeight(25);
line(340,70,420,80);
  
stroke(119,70,39);
  strokeWeight(25);
line(500,70,420,80);
  
  
  //left eyes
  
  stroke(255);
  strokeWeight(10);
  fill(67,199,232);
ellipse(392,119,50,60);

  stroke(1);
  strokeWeight(00);
  fill(0);
ellipse(392,119,20,30);
  
  //Right eyes
   stroke(255);
  strokeWeight(10);
  fill(67,199,232);
ellipse(449,119,50,60);
  
   stroke(1);
  strokeWeight(0);
  fill(0);
ellipse(449,119,20,30);
  
  //left foot
  
fill(255,182,0);
  ellipse(410,320,35,46);
  
  //right foot
  
fill(255,182,0);
  ellipse(440,320,35,46);
  
  
  //beak
  fill(255,182,0);
triangle(405,150,435,150,420,170);
  
  //stars
  fill(205);
  stroke(255);
  strokeWeight(2);
  ellipse(100,100,2,2);
  ellipse(150,170,2,2);
  ellipse(130,210,2,2);
  ellipse(50,300,2,2);
  ellipse(280,270,2,2);
  ellipse(250,300,2,2);
  ellipse(20,70,2,2);
  ellipse(150,20,2,2);
  ellipse(280,40,2,2);
  ellipse(260,90,2,2);
  ellipse(650,170,2,2);
  ellipse(750,270,2,2);
  ellipse(650,250,2,2);
  ellipse(690,70,2,2);
  ellipse(150,170,2,2);
  ellipse(620,20,2,2);
  ellipse(580,270,2,2);
  ellipse(597,80,2,2);
  
  //moon
  stroke(256);
  strokeWeight(3);
  fill(252,252,227)
  ellipse(60,50,90,90);
  
  fill(10,20,67);
  noStroke();
    ellipse(80,60,90,90);

  
  
}
