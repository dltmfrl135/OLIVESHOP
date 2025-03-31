let img_NavBar
let img_Adbanner
let img_Product
let img_GNB
let img_ai_icon
let img_green

let state = 0;

function preload(){
  
img_NavBar = loadImage('01_NavBar.png');
img_Adbanner = loadImage('02_AdBanner.png');
img_Product = loadImage('03_Product.png');
img_GNB = loadImage('04_GNB.png');
img_ai_icon = loadImage('05_ai_icon.png');
img_green = loadImage('06_green.png');
  
}

function setup() {
  createCanvas(393, 852);
}

function draw() {
  background(255);
  image(img_NavBar, 0, 0, 393, 128);
  image(img_Adbanner, 0, 128, 393, 284);
  image(img_Product, 0, 412, 393, 440);
  image(img_GNB, 0, 750, 393, 88);
  image(img_ai_icon, 320, 680, 60, 60);
  
}

function mouseCliked(){
  if(mouseX >= 320 && mouseX <=380){
    if(mouseY >= 688 && mouseY <=748){
      if(state== 0){
        state = 1;
      } else if(State == 1){
        state = 0;
      }
    }
  }
}