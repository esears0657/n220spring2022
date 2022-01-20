function setup(){
    createCanvas(1000, 1000);
}

let size = 10;
function draw(){
    background(40);
    circle(mouseX, mouseY, size)
}

function mousePressed(){
    if(size <50){
        size += 5;
        circle(mouseX, mouseY, size);
        console.log(size)
    }
}
