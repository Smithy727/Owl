//Global Variables
var owlBodyX, owlBodyY, owlBodyHeight, owlBodyWidth;
var canvasWidth = 800;
var canvasHeight = canvasWidth - 450;


function setup() {
    var canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent("p5container");
}

function draw() {

  //initialising variables that affect all of the drawn owl shapes
  //x,y poisition:
  //owlBodyX = width / 2
  //owlBodyY = height / 2
  //owlBody X and Y with mouse track
  var owlBodyX = map(mouseX, 0, canvasWidth, 190, 600);
  var owlBodyY = map(mouseY, 0, canvasWidth, 100, 550);
  // height, width:
  owlBodyWidth = 150;
  owlBodyHeight = owlBodyWidth + 50;

  //console.log(mouseX, mouseY)
   
	background(10,20,67);

  //Background images (stars, tree, moon)
   //Tree
    fill(66,32,5);
    stroke(0);
    strokeWeight(4);
    rect(300,1,250,500);
  
   //TreeHole
    fill(0)  
    ellipse(425,180,175,300);

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
  

  //Owl

  //Wings
  stroke(0);
  fill(229,196,165);
  ellipse(owlBodyX - 13, owlBodyY + 45, owlBodyWidth - 60, owlBodyHeight - 20,);
  ellipse(owlBodyX + 63, owlBodyY + 45, owlBodyWidth - 60, owlBodyHeight - 20,); 
  //ellipse(387,220,90,180);                                                                                                                                                                         ellipse(463,220,90,180);

    
  //body

  fill(119, 70, 39);
  ellipse(owlBodyX + 25, owlBodyY + 45, owlBodyWidth, owlBodyHeight,);

  //fill(119,70,39);
  //ellipse(425,220,150,200);
  
  //Chest

  fill(229,196,165);
  ellipse(owlBodyX + 25, owlBodyY + 45, owlBodyWidth - 30, owlBodyHeight - 20,);
  //ellipse(425,220,120,180);
  
  
  //Head left
  noStroke();
  fill(119,70,39);
  ellipse(owlBodyX - 5, owlBodyY - 55, owlBodyWidth - 50, owlBodyHeight - 100,);
  noStroke;
  //ellipse(395,120,100,100);
  
  //Head right
  noStroke();
  fill(119,70,39);
  ellipse(owlBodyX + 50, owlBodyY - 55, owlBodyWidth - 50, owlBodyHeight - 100,);
  //ellipse(450,120,100,100);
  
  //brow
  
  stroke(119,70,39); 
  strokeWeight(25);
  line(owlBodyX - 60, owlBodyY - 105, owlBodyX + 20, owlBodyY - 95);
  //line(340,70,420,80);
  
  stroke(119,70,39);
  strokeWeight(25);
  line(owlBodyX + 100, owlBodyY - 105, owlBodyX + 20, owlBodyY - 95);
  //line(500,70,420,80);
  
  
  //left eyes
  
  stroke(255);
  strokeWeight(10);
  fill(67,199,232);
  ellipse(owlBodyX - 8, owlBodyY - 56, owlBodyWidth - 100, owlBodyHeight - 140,);
  //ellipse(392,119,50,60);

  //eye pupil
  stroke(1);
  strokeWeight(00);
  fill(0);
  ellipse(owlBodyX - 8, owlBodyY - 56, owlBodyWidth - 130, owlBodyHeight - 170,);
  //ellipse(392,119,20,30);
  
  //Right eyes
  stroke(255);
  strokeWeight(10);
  fill(67,199,232);
  ellipse(owlBodyX + 49, owlBodyY - 56, owlBodyWidth - 100, owlBodyHeight - 140,);
  //ellipse(449,119,50,60);
  
  //eye pupil
  stroke(1);
  strokeWeight(0);
  fill(0);
  ellipse(owlBodyX +49, owlBodyY - 56, owlBodyWidth - 130, owlBodyHeight - 170,);
  //ellipse(449,119,20,30);
  
  //left foot
  
  fill(255,182,0);
  ellipse(owlBodyX +10, owlBodyY + 145, owlBodyWidth - 115, owlBodyHeight - 154,);
  //ellipse(410,320,35,46);
  
  //right foot
  
  fill(255,182,0);
  ellipse(owlBodyX +40, owlBodyY + 145, owlBodyWidth - 115, owlBodyHeight - 154,);
  //ellipse(440,320,35,46);
  
  
  //beak
  fill(255,182,0);
  triangle (owlBodyX + 5, owlBodyY - 25, owlBodyX + 35, owlBodyY - 25, owlBodyX + 20, owlBodyY - 5 );
  //triangle(405,150,435,150,420,170);
  


  
  
}
