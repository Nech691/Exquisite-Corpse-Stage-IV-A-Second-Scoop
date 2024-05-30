let scoopY = 600;
let iceCreamY = 600;
let startButton, declineButton, acceptButton;
let l1b, r1b;
let line = 0;

let soundFile;
let fft;
let isPlaying = false;
let imgX = 100;
let imgY = 130;
let txtX = 20; 
let txtY = 50;
let b1X = 120;
let b2X = 380;
let bY = 550;


function preload() {
  soundFile = loadSound('music.mp3');

  // -> Images
  bkgd1 = loadImage('Images/bkgd.jpg');
  fork1 = loadImage('Images/f1.jpg');
  fork2 = loadImage('Images/f2.jpg');
  fork3 = loadImage('Images/f3.jpg');
  fork4 = loadImage('Images/f4.jpg');
  fork5 = loadImage('Images/f5.jpg');
  fork6 = loadImage('Images/f6.jpg');
  ed1 = loadImage('Images/e1.jpg');
  ed2 = loadImage('Images/e2.jpg');
  ed3 = loadImage('Images/e3.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  beginButton();
  background(bkgd1); // -> Paper background
  fft = new p5.FFT();
  soundFile.amp(0.5);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  textSize(30);
  fill("#453B29")
  textFont('Blackadder ITC');
  textStyle(ITALIC)
}

// -> V Buttons V

function beginButton() {
  startButton = createButton('Begin Adventure!');
  startButton.position(width/2 - 60, height/4);
  startButton.size(150, 50);
  startButton.style('background','linear-gradient(to bottom, #EFE4CA, #C4B898)');
  startButton.style('color', '#8C6A1B');
  startButton.style('border', '1px solid #8C6A1B');
  startButton.mousePressed(beginAdventure);
}

function accButton(){
 acceptButton = createButton("Accept");
 acceptButton.position(b1X, 220);
 acceptButton.size(100, 30);
 acceptButton.style('background','linear-gradient(to bottom, #EFE4CA, #C4B898)');
 acceptButton.style('color', '#8C6A1B');
 acceptButton.style('border', '1px solid #8C6A1B');
 acceptButton.mousePressed(F1)
}

function denButton(){
  declineButton = createButton("Decline");
  declineButton.position(b2X, 220);
  declineButton.size(100, 30);
  declineButton.style('background','linear-gradient(to bottom, #EFE4CA, #C4B898)');
  declineButton.style('color', '#8C6A1B');
  declineButton.style('border', '1px solid #8C6A1B');
  declineButton.mousePressed(end0);
}

function l1Button(){
  l1b = createButton("Left");
  l1b.position(b1X, bY);
  l1b.size(100, 30);
  l1b.style('background','linear-gradient(to bottom, #EFE4CA, #C4B898)');
  l1b.style('color', '#8C6A1B');
  l1b.style('border', '1px solid #8C6A1B');
  l1b.mousePressed(F2)
}

function r1Button(){
  r1b = createButton("Right");
  r1b.position(b2X, bY);
  r1b.size(100, 30);
  r1b.style('background','linear-gradient(to bottom, #EFE4CA, #C4B898)');
  r1b.style('color', '#8C6A1B');
  r1b.style('border', '1px solid #8C6A1B');
  r1b.mousePressed(end1)
}

function l2Button(){
  l2b = createButton("Left");
  l2b.position(b1X, bY);
  l2b.size(100, 30);
  l2b.style('background','linear-gradient(to bottom, #EFE4CA, #C4B898)');
  l2b.style('color', '#8C6A1B');
  l2b.style('border', '1px solid #8C6A1B');
  l2b.mousePressed(end2)
}

function r2Button(){
  r2b = createButton("Right");
  r2b.position(b2X, bY);
  r2b.size(100, 30);
  r2b.style('background','linear-gradient(to bottom, #EFE4CA, #C4B898)');
  r2b.style('color', '#8C6A1B');
  r2b.style('border', '1px solid #8C6A1B');
  r2b.mousePressed(F3)
}

function l3Button(){
  l3b = createButton("Left")
  l3b.position(b1X, bY);
  l3b.size(100, 30);
  l3b.style('background','linear-gradient(to bottom, #EFE4CA, #C4B898)');
  l3b.style('color', '#8C6A1B');
  l3b.style('border', '1px solid #8C6A1B');
  l3b.mousePressed(F4);
}

function r3Button(){
  r3b = createButton("Right");
  r3b.position(b2X, bY);
  r3b.size(100, 30);
  r3b.style('background','linear-gradient(to bottom, #EFE4CA, #C4B898)');
  r3b.style('color', '#8C6A1B');
  r3b.style('border', '1px solid #8C6A1B');
  r3b.mousePressed(end11);
}

function l4Button(){
  l4b = createButton("Left");
  l4b.position(b1X, bY);
  l4b.size(100, 30);
  l4b.style('background','linear-gradient(to bottom, #EFE4CA, #C4B898)');
  l4b.style('color', '#8C6A1B');
  l4b.style('border', '1px solid #8C6A1B');
  l4b.mousePressed(F5);
}

function r4Button(){
  r4b = createButton("Right");
  r4b.position(b2X, bY);
  r4b.size(100, 30);
  r4b.style('background','linear-gradient(to bottom, #EFE4CA, #C4B898)');
  r4b.style('color', '#8C6A1B');
  r4b.style('border', '1px solid #8C6A1B');
  r4b.mousePressed(end21);
}

function l5Button(){
  l5b = createButton("Left");
  l5b.position(b1X, bY);
  l5b.size(100, 30);
  l5b.style('background','linear-gradient(to bottom, #EFE4CA, #C4B898)');
  l5b.style('color', '#8C6A1B');
  l5b.style('border', '1px solid #8C6A1B');
  l5b.mousePressed(end12);
}

function r5Button(){
  r5b = createButton("Right");
  r5b.position(b2X, bY);
  r5b.size(100, 30);
  r5b.style('background','linear-gradient(to bottom, #EFE4CA, #C4B898)');
  r5b.style('color', '#8C6A1B');
  r5b.style('border', '1px solid #8C6A1B');
  r5b.mousePressed(F6);

}

function l6Button(){
  l6b = createButton("Left")
  l6b.position(b1X, bY);
  l6b.size(100, 30);
  l6b.style('background','linear-gradient(to bottom, #EFE4CA, #C4B898)');
  l6b.style('color', '#8C6A1B');
  l6b.style('border', '1px solid #8C6A1B');
  l6b.mousePressed(end22);
}

function r6Button(){
  r6b = createButton("Right");
  r6b.position(b2X, bY);
  r6b.size(100, 30);
  r6b.style('background','linear-gradient(to bottom, #EFE4CA, #C4B898)');
  r6b.style('color', '#8C6A1B');
  r6b.style('border', '1px solid #8C6A1B');
  r6b.mousePressed(win);
}

function restartButton(){
  restButton = createButton("Play Again")
  restButton.position(260, 95);
  restButton.size(140, 30);
  restButton.style('background','linear-gradient(to bottom, #EFE4CA, #C4B898)');
  restButton.style('color', '#8C6A1B');
  restButton.style('border', '1px solid #8C6A1B');
  restButton.mousePressed(reset)
}

// -> V MousePressed V


function reset(){
  beginButton();
  background(bkgd1); 
  restButton.hide();
}

function beginAdventure() {
  soundFile.play(); // -> Play Lana Del Ray Bardcore
  startButton.hide(); // -> Hide "Begin Adventure!" 
  // textSize(16);
  text("You are walking alone in the woods, when you find a note on the ground", 50, 50, 600);
  text("*PLEASE   HELP   ME! I am at the other end of the forest path ahead*", 80, 140, 600); 
  textAlign(CENTER);
  accButton();
  denButton();
}

function F1(){
  acceptButton.hide();
  declineButton.hide();
  background(bkgd1);
  image(fork1, imgX, imgY, 400, 400);
  text("You look up and there's a fork on the path ahead. \nWhich direction do you choose?", txtX, txtY, 600)
  l1Button();
  r1Button();
}

function F2(){
  l1b.hide();
  r1b.hide();
  background(bkgd1);
  text("Two choices ahead of you. \nWhere do you chose to go?", txtX, txtY, 600)
  image(fork2, imgX, imgY, 400, 400)
  l2Button();
  r2Button();
}

function F3(){
  l2b.hide();
  r2b.hide();
  background(bkgd1);
  text("You walk for a while, until you reach a new fork. \nWhich way now?", txtX, txtY, 600)
  image(fork3, imgX, imgY, 400, 400)
  l3Button();
  r3Button();
}

function F4(){
  l3b.hide();
  r3b.hide();
  background(bkgd1);
  text("You keep walking and find yourself ahead of a brand new fork on the road. Which way now?", txtX, txtY, 600)
  image(fork4, imgX, imgY, 400, 400)
  l4Button();
  r4Button();
}

function F5(){
  l4b.hide();
  r4b.hide();
  background(bkgd1);
  text("You keep going. Oh look, yet another choice to make \nNow what?", txtX, txtY, 600)
  image(fork5, imgX, imgY, 400, 400)
  l5Button();
  r5Button();
}

function F6(){
  l5b.hide();
  r5b.hide();
  background(bkgd1);
  text("It feels like you are close. But there's still one more choice to make. Which way?", txtX, txtY, 600)
  image(fork6, imgX, imgY, 400, 400)
  l6Button();
  r6Button();
}

function win(){
  l6b.hide();
  r6b.hide();
  background(bkgd1);
  text("Congratulations on fiding your way. You won!", txtX - 20, txtY, 600)
  text("*Oh! You've found me! I am in desperate need of help. \nI can't eat all this ice-cream alone. Please help me.*", txtX, 550, 600)
  image(ed1, imgX, imgY, 400, 400)
  restartButton();
}

function end0(){
  acceptButton.hide();
  declineButton.hide();
  background(bkgd1);
  setInterval(GameOver, 60);
  text("Keep going then, you selfish person \nGAME   OVER", 50, 400, 600);
}

function end1(){
  l1b.hide();
  r1b.hide();
  background(bkgd1);
  setInterval(GameOver, 80);
  text("There is no longer a discernable path in front of you. You turn arround and can't find your way. \nGAME   OVER", 50, 550, 600);
  image(ed2, imgX, imgY, 400, 400);
}

function end11(){
  l3b.hide();
  r3b.hide();
  background(bkgd1);
  setInterval(GameOver, 80);
  text("There is no longer a discernable path in front of you. You turn arround and can't find your way. \nGAME   OVER", 50, 550, 600);
  image(ed2, imgX, imgY, 400, 400);
}

function end12(){
  l5b.hide();
  r5b.hide();
  background(bkgd1);
  setInterval(GameOver, 80);
  text("There is no longer a discernable path in front of you. You turn arround and can't find your way. \nGAME   OVER", 50, 550, 600);
  image(ed2, imgX, imgY, 400, 400);
}

function end2(){
  l2b.hide();
  r2b.hide();
  background(bkgd1);
  setInterval(GameOver, 80);
  text("You invaded the privacy of the forest demon. The punishment is death. \nGAME   OVER", 50, 550, 600);
  image(ed3, imgX, imgY, 400, 400);
}

function end21(){
  l4b.hide();
  r4b.hide();
  background(bkgd1);
  setInterval(GameOver, 80);
  text("You invaded the privacy of the forest demon. The punishment is death. \nGAME   OVER", 50, 550, 600);
  image(ed3, imgX, imgY, 400, 400);
}

function end22(){
  l6b.hide();
  r6b.hide();
  background(bkgd1);
  setInterval(GameOver, 80);
  text("You invaded the privacy of the forest demon. The punishment is death. \nGAME   OVER", 50, 550, 600);
  image(ed3, imgX, imgY, 400, 400);
}

function GameOver(){ // makes coloured lines down the screen when icecream gets too high

  noStroke();
  ellipseMode(CORNER);

  fill(245, 242, 235);
  ellipse(0, 0, width/3 , line);
  
  fill(89, 52, 35);
  ellipse(width/3, 0, width/3, line);

  fill(232, 172, 209);
  ellipse(width/3 + width/3, 0, width/3, line);

  line += 10;

  text("Refresh Page", width/2, height/2);
}
