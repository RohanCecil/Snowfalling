var bgImg;
var snow;

function preload(){
  bgImg = loadImage("snow3.jpg");

}

function setup() {
  createCanvas(800,400);
  snow = new Snow();
  
}

function draw() {
  background(bgImg);
    
  snow.display();


}

