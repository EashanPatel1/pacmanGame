const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var blinky, clyde, inky, pacman, pinky;
var blinkyImg, cyldeImg, inkyImg, pacmanImg, pinkyImg;

var wall1 ,wall2 ,wall3, wall4, wall5, wall6, wall7, wall8;

function preload(){
    blinkyImg = loadImage("blinky.png");
    cyldeImg = loadImage("clyde.png");
    inkyImg = loadImage("inky.png");
    pacmanImg = loadImage("pacman.png");
    pinkyImg = loadImage("pinky.png");
}

function setup(){
    createCanvas(800,600);

    engine = Engine.create();
    world = engine.world;

    pacman = Bodies.rectangle(30,30,50,50, {isStatic : false});
    World.add(world, pacman);

    wall1 = new Wall(150,200,300,10);
    wall2 = new Wall(150,10,10,250);
    wall3 = new Wall(260,300,300,10);
    wall4 = new Wall(500,220,10,440);
    wall5 = new Wall(110,395,10,200);
    wall6 = new Wall(300,500,10,200);
    wall7 = new Wall(500,520,150,10);
    wall8 = new Wall(670,375,10,450);

}

function draw(){
    background("black");
    Engine.update(engine);
   
    wall1.show();
    wall2.show();
    wall3.show();
    wall4.show();
    wall5.show();
    wall6.show();
    wall7.show();
    wall8.show();

    image(blinkyImg,30,500,50,50);
    image(cyldeImg,400,40,50,50);
    image(inkyImg,500,550,50,50);
    image(pinkyImg,750,550,50,50);

    push();
    translate(pacman.position.x, pacman.position.y);
    imageMode(CENTER);
    image(pacmanImg,30,30,50,50);
    pop();

    handlePlayerControls();
}

function handlePlayerControls(){
    if(keyIsDown(UP_ARROW)){
        pacman.positionY -= 10 
    }
    if(keyIsDown(DOWN_ARROW)){
        pacman.positionY += 10 
    }
    if(keyIsDown(LEFT_ARROW)){
        pacman.positionX -= 10 
    }
    if(keyIsDown(RIGHT_ARROW)){
        pacman.positionX += 10 
    }
}