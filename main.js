const n = 300
const timeConstant = 50000 / n;  //seconds per frame
const g = 6.6743e-11;
const SCALE = 30000000  //meters per pixel


let bodies =new Array();
function setup()
{
	let cnv = createCanvas(windowWidth,windowHeight);
	colorMode(HSB,255);
  rectMode(CENTER);

  Zoomer.init(cnv);
  
  bodies.push(new Mass(width/2,height/2,1.989e30,color(40,128,255),6,0,0))  //sun
  bodies.push(new Mass(width/2 + 69820000000 / SCALE,                 height/2,3.3011e23,color(100),         2.5, 1,38860))  //mercury
  bodies.push(new Mass(width/2 + 108941849000 / SCALE,                height/2,4.867e24,color(30,255,255),   6.0, 2,34784))  //venus
  bodies.push(new Mass(width/2 + 1.52098233e11 / SCALE,               height/2,5.97219e24,color(128,255,255),6.3, 3,29290))  //earth
  bodies.push(new Mass(width/2 +(1.52098233e11 + 384403000) / SCALE,  height/2,7.347673e22,color(200),       1.2, 9,29290 - 1023))  //moon
  bodies.push(new Mass(width/2 + 2.4923e11 / SCALE,                   height/2,6.4171e23,color(10,255,255),  3.3, 4,21970))  //mars
  bodies.push(new Mass(width/2 + 8.1662e11 / SCALE,                   height/2,1.89819e27,color(40,128,200), 69, 5,12440))  //jupiter
  bodies.push(new Mass(width/2 + 1.51450e12 / SCALE,                  height/2,5.6834e26,color(100),         58, 6,9090))  //saturn
  bodies.push(new Mass(width/2 + 3.00362e12 / SCALE,                  height/2,8.6813e25,color(100),         25, 7,6490))  //uranus
  bodies.push(new Mass(width/2 + 4.54567e12 / SCALE,                  height/2,1.02413e26,color(100),        24, 8,5370))  //neptune
}

function draw()
{
  FrameTimer.drawStart();
	background(0);

  for(let i=0;i<bodies.length;i++)
  {
    bodies[i].show();
  }

  for (var i = 0; i < n; i++) {
    for(let i=0;i<bodies.length;i++) {
        bodies[i].move();
    }
  }

  FrameTimer.drawEnd();
  //FrameTimer.logAll();
  FrameTimer.showInfo(color(0));
}