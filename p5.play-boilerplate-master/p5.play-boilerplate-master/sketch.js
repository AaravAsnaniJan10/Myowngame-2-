var obstacle1,obstacle2;
var score = 0;
var time = 60;
function setup() {
  createCanvas(2000,400);
  fighterleftstance = createSprite(517,227,300,300);
  fighterleftstance.addImage(fighterleftstanceimg);
  fullhealth = createSprite(30,19,50,50);
  fullhealth.addImage(fullhealthimg);
  fighterleftstance.scale = 3 
  obstacle1Group= new Group();
  obstacle2Group= new Group();
}
function preload() {
  fighterleftstanceimg = loadImage("Images/Manleftstance.png");
  fighterrightstanceimg = loadImage("Images/manrightstance.png");
  fighterrightpunchimg = loadImage("Images/Manrightpunch.jpg");
  fighterleftpunchimg = loadImage("Images/Manleftpunch.png");
  fighterrightkickimg = loadImage("Images/manrightkick.png");
  fighterleftkickimg = loadImage("Images/manleftkick.png");
  garden = loadImage("Images/Mangarden.png");
  obstacle1img = loadImage("Images/enemyswordsman.jpg")
  obstacle2img = loadImage("Images/Barehandedenemy.png")
  fullhealthimg = loadImage("Images/Fullhealth.jpg")
  hit1 = loadImage("Images/Health1.jpg")
  hit2 = loadImage("Images/Health2.jpg")
  hit3 = loadImage("Images/Health3.jpg")
  dead = loadImage("Images/Dead.JPG")
  obstacle1strikeimg = loadImage("Images/enemyswordsmanstrike.jpg")
  obstacle2strikeimg = loadImage("Images/Barehandedenemystrike.png")
  kitchen = loadImage("Images/Mankitchen.jpg")
  livingroom = loadImage("Images/Manlivingroom.jpg")
  bedroom = loadImage("Images/manbedroom.jpg")
  mansion = loadImage("Images/manmansion.jpg")
}


function draw() {

  background(garden);
  textSize(15);
    fill ("red");
    text("Score:",score,1000,150);
    text("Defeat 15 men to get to the kitchen",100,50);
  if(keyDown(RIGHT_ARROW)){
    fighterleftstance.x= 1545
    fighterleftstance.y= 227
    fighterleftstance.addImage(fighterrightstanceimg)
    fighterleftstance.scale = 4.2

    if(keyDown("D")){
      fighterleftstance.addImage(fighterrightpunchimg)
      fighterleftstance.scale = 0.3
      fullhealth.addImage(fullhealthimg);
      obstacle1Group.destroyEach();
      score = score + 1
    }
    if(keyDown("E")){
      fighterleftstance.addImage(fighterrightkickimg)
      fighterleftstance.scale = 0.7
      fullhealth.addImage(fullhealthimg);
      obstacle1Group.destroyEach();
      score = score + 1
    }
  }
  if(keyDown(LEFT_ARROW)){
    fighterleftstance.x= 515
    fighterleftstance.y= 227
    fighterleftstance.addImage(fighterleftstanceimg)
    fighterleftstance.scale = 3.5
    if(keyDown("A")){
      fighterleftstance.addImage(fighterleftpunchimg)
      fighterleftstance.scale = 1.8
      fullhealth.addImage(fullhealthimg);
      obstacle2Group.destroyEach();
      score = score + 5
    }
    if(keyDown("Q")){
      fighterleftstance.addImage(fighterleftkickimg)
      fullhealth.addImage(fullhealthimg);
      obstacle2Group.destroyEach();
      score = score + 5
    }
  }
  
  
  
  if(obstacle1Group.isTouching(fighterleftstance)){
    obstacle1.addImage(obstacle1strikeimg)
    fullhealth.addImage(hit1)
  }
  if(obstacle1Group.isTouching(fighterleftstance)){
    obstacle1.addImage(obstacle1strikeimg)
    fullhealth.addImage(hit2)
  }
  if(obstacle1Group.isTouching(fighterleftstance)){
    obstacle1.addImage(obstacle1strikeimg)
    fullhealth.addImage(hit3)
  }
  
  if(obstacle2Group.isTouching(fighterleftstance)){
    obstacle2.addImage(obstacle2strikeimg)
    fullhealth.addImage(hit1)
  }
  if(obstacle2Group.isTouching(fighterleftstance)){
    obstacle2.addImage(obstacle2strikeimg)
    fullhealth.addImage(hit2)
  }
  if(obstacle2Group.isTouching(fighterleftstance)){
    obstacle2.addImage(obstacle2strikeimg)
    fullhealth.addImage(hit3)
  }

  
  if(score = 15 && background(garden)){
    background(kitchen)
    score = 0;
  }
  if(score = 15 && background(kitchen)){
    background(livingroom)
    score = 0
  }
  if(score = 15 && background(livingroom)){
    background(bedroom)
    score = 0
  }
  if(score = 15 && background(bedroom)){
    background(mansion)
    textSize(35)
    text("You win",1000,200)
  }


  //fighterleftstance.debug = true;
  spawnObstacle1();
  spawnObstacle2();
  drawSprites();
}
function spawnObstacle1(){
if(frameCount % 180 === 0) {
  obstacle1 = createSprite(1995,227,10,40);
  obstacle1.addImage(obstacle1img)
  //obstacle.debug = true;
  obstacle1.velocityX = -6;
 
   
    //assign scale and lifetime to the obstacle           
    obstacle1.scale = 0.06;
    obstacle1.lifetime = 80;
    //add each obstacle to the group
     obstacle1Group.add(obstacle1)
  }}
  function spawnObstacle2(){
    if(frameCount % 120 === 0) {
      obstacle2 = createSprite(100,227,10,40);
      obstacle2.addImage(obstacle2img)
      //obstacle.debug = true;
      obstacle2.velocityX = 3
        //assign scale and lifetime to the obstacle           
        obstacle2.scale = 0.41;
        obstacle2.lifetime = 80;
        obstacle2Group.add(obstacle2)
      }}