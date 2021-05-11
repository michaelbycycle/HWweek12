// x and y coordinates for my player
var characterX;
var characterY;

// define the key codes for each letter
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var shapeXSpeed;
var shapeYSpeed;



// x and y for Enemy
var enemyX;
var enemyY;

function setup() {
    createCanvas(500, 600);

    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    createCharacter(200,350);
    createEnemy(100,100);

   
    
}



// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;

function draw() {
    background(120,45,78);
    stroke(0);
    fill(0);
    
    drawCharacter();
    characterMovement();

    drawEnemy();

       // move the shape
       enemyX += shapeXSpeed;
       enemY += shapeYSpeed;

    
}


function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
}

function drawCharacter()
{
    fill(23,40,123);
    circle(characterX,characterY,25);
}

function createEnemy(x,y)
{
    enemyX = x;
    enemyY = y;
}

function drawEnemy()
{
    fill(168, 141, 50);
    circle(enemyX, enemyY, 75);
}

function characterMovement()
{
    // handle the keys
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }

    // create the shape based on the mouse click
    fill(120,130,140);
    circle(mouseShapeX, mouseShapeY, 25);

    
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

