canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

nasaMarsImagesArray = ["mars_1.jpg", "mars_2.jpg", "mars_3.jpg", "mars_4.jpg", "mars_5.jpg"]
radomNumber = Math.floor(Math.random() * 5);
console.log(radomNumber);

roverWidth = 100;
roverHeight = 90;

backgroundImage = nasaMarsImagesArray[radomNumber];
console.log("backgroundImage = " + backgroundImage);

roverImage = "rover.png";
roverX = 10;
roverY = 10;

function add() {
    backgroundImgTag = new Image();
    backgroundImgTag.onload = uploadBackground;
    backgroundImgTag.src = backgroundImage;

    roverImgTag = new Image();
    roverImgTag.onload = uploadRover;
    roverImgTag.src = roverImage;
}

function uploadBackground() {
    ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(roverImgTag, roverX, roverY, roverWidth, roverHeight);
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == "38") {
        console.log("up");
        up(); 
    }

    if(keyPressed == "40") {
        console.log("down");
        down();
    }

    if(keyPressed == "37") {
        console.log("left");
        left();
    }

    if(keyPressed == "39") {
        console.log("right");
        right();
    }
}

function up() {

    if(roverY >= 0) {
        roverY = roverY - 10;
        uploadBackground();
        uploadRover();
    }
}

function down() {

    if(roverY <= 500) {
        roverY = roverY + 10;
        uploadBackground();
        uploadRover();
    }
}

function left() {

    if(roverX >= 0) {
        roverX = roverX - 10;
        uploadBackground();
        uploadRover();
    }
}

function right() {

    if(roverX <= 700) {
        roverX = roverX + 10;
        uploadBackground();
        uploadRover();
    }
}