var mic;
var capture;
var myImage1;
var myImage2;
var myImage3;
var myImage4;
var myImage5;
var myImage6;

function preload(){

  myImage1 = loadImage('assets/usta1.png');
  myImage2 = loadImage('assets/usta2.png');
  myImage3 = loadImage('assets/usta3.png');
  myImage4 = loadImage('assets/usta4.png');
  myImage5 = loadImage('assets/usta5.png');
  myImage6 = loadImage('assets/usta6.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  mic = new p5.AudioIn();
  mic.start();

  capture = createCapture(VIDEO);
  capture.size(640,480);
  capture.hide();

}

function draw() {

var webImage = capture.loadPixels();
image(webImage, 380, 246, 640, 480);

  var vol = mic.getLevel();

  noStroke();
  fill(114, 195, 102);
  rect(0,0,505,246);  

  image(myImage1, 70, 50, 350, vol*2000);

  noStroke();
  fill(229, 218, 60);
  rect(0,246,505,246); 

  image(myImage2, 70, 300, 350, vol*2000);

  noStroke();
  fill(230, 43, 40);
  rect(0,492,505,250);  

  image(myImage3, 70, 550, 350, vol*2000);

  noStroke();
  fill(212, 59,186);
  rect(1010,0,510,246);  

  image(myImage6, 1100, 50, 350, vol*2000);

  noStroke();
  fill(236, 121, 50);
  rect(1010,246,510,246);  

  image(myImage4, 1100, 300, 350, vol*2000);

  noStroke();
  fill(84, 195, 200);
  rect(1010,492,510,247);   

  image(myImage5, 1100, 550, 350, vol*2000);


  textSize(50);
  textStyle(BOLD);
  textFont('Calibri');
  fill(0);
  text('SING!', windowWidth/2 - 70, 100);

  textSize(30);
  textFont('Calibri');
  fill(0);
  text('or play some music', windowWidth/2 - 130, 150);

}
