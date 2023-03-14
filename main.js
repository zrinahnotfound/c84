var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_image="rover.png";
rover_x=10;
rover_y=10;
nasa_imgs = ["img_1.JPG","img_2.JPG","img_3.jpg","img_4.jpg"];
var random_num = Math.floor(Math.random()*4);
background_image=nasa_imgs[random_num];

function add() {

    background_imgTag = new Image;
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image;
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;

}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover.height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
     { up();

    }
    
    if(keyPressed == '40')
     { down();

    }

    if(keyPressed == '39')
     { right();

    }

    if(keyPressed == '37')
     { left();

    }
}

function up() {

    if (rover_y >=0) {
        rover_y = rover_y - 10;
        uploadrover();
        uploadBackground();
    }
}

function down() {

    if (rover_y <= 500) {
        rover_y = rover_y + 10;
        uploadrover();
        uploadBackground();
    }
}

function right() {

    if (rover_x <=700) {
        rover_x = rover_x + 10;
        uploadrover();
        uploadBackground();
    }
}

function left() {

    if (rover_x >=0) {
        rover_x = rover_x - 10;
        uploadrover();
        uploadBackground();
    }
}