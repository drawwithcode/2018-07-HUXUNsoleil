var capture;
var mic;

function setup() {
  createCanvas(1280, 960);
  capture = createCapture(VIDEO);
  capture.size(1280, 960);
  capture.hide();

  mic = new p5.AudioIn();

  // start the Audio Input.
  mic.start();
}

function draw() {

  var myImage = capture.loadPixels();

  background(0);
  var vol = mic.getLevel();
  

  for (var x = 0; x < 1280; x += 10) {
    for (var y = 0; y < 960; y += 10) {
      fill(myImage.get(x, y));

      ellipse(x, y, vol * 200);
    }
  }
}
