
function setup(){
    createCanvas(1000, 1000);
}


a = 300
size = 1

function draw(){
    background(40);

if(size>250){
    size = 0;
    strokeWeight(random(50))
    stroke(random(255), random(255),random(255))
    fill(random(255), random(255), random(255))
}else{
    circle(mouseX, mouseY, size++)
    circle(1000 - mouseX, 1000 - mouseY, size++)
    }
}