


var img, otherImage;

var drawMode = 1;
function preload() {
 img = loadImage("image1.jpg");
  otherImage = loadImage("Image 2.jpg")
  
}
function setup() {
  createCanvas(img.width, img.height);
}
function draw(){
  //image(img,dx,dy,dWidth,dHeight,sx,sy,[sWidth],[sHeight])
// background(0);
  image(otherImage, 0, 0, width, height);
  image (img , 0, 0, min(mouseX, width), height, 0, 0, min(mouseX, width), height);
}



