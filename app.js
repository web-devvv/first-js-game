const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 900;
canvas.height = 500;


//background image
let bg = new Image();
bg.onload = function() {
    
    console.log('loaded')
}
bg.src = 'bg.png'

//player image
let p = new Image();
p.onload = function() { 
    console.log('loaded');
}
p.src = 'snowman.png';


let playerX = 0;
let playerY = 113;
const gravity = 3 + 0.5;

const keys = [];

window.addEventListener('keydown', function(e) {
    keys[e.keyCode] = true;
})

window.addEventListener('keyup', function(e) {
    keys[e.keyCode] = false;
})


//initialization
function init() {
    playerX = 10;
}

//gameloop
function gameloop() {
    update();
    render();
    if (player.onGround == false) {
        playerY = playerY + 2;
    }
}

//update
function update() {
    if (keys[65] == true) {
        playerX = playerX - 3;
    }
    if (keys[87] == true) {
        if (player.onGround == true) {
            playerY -= 140;
        }
    }
    if (keys[70] == true) {
        if (player.onGround == true) {
            playerY -= 30;
            playerX += 50
        }
    }
    if (keys[68] == true) {
        playerX = playerX + 3.5;
    }
    
   
}

const player = {
    dy : 0,
    drag : 0.1,
    onGround : false
}

//render
function render() {
    ctx.clearRect(0, 0, 900, 500);
    ctx.drawImage(bg, 0, 0);
    ctx.drawImage(p, playerX, playerY);
    
    if (playerY == 113) {
        player.onGround = true;
    }
    else {
        player.onGround = false;
    }
}


setInterval(gameloop, 1000 / 60);
init();