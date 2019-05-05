'use strict'
var mic;
var preload = () => {
}

let capture;

var setup = () => {
    background(255);
    mic= new p5.AudioIn();
    mic.start();
    createCanvas(windowWidth, windowHeight);
    ellipseMode(CENTER);

    capture = createCapture(VIDEO);
    capture.size(1280, 960);
    capture.hide();
    noStroke();

}


var draw = () => {
  var volume= mic.getLevel();

 text(volume,30,30);


    background(0);
    let img = capture.loadPixels();
    let hi = width/960;
    let vi = height/480;
    for (let x = 0; x < 1280; x+=10) {
        for (let y = 0; y < 960; y+=20) {
            fill(img.get(x, y))
              ellipse(x, y, 10);

        }
    }
}
