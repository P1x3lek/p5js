
let cos = 10

let gg 




function setup() {
  createCanvas(600, 800);
  nigg =loadImage ("dvd.png")
}

function draw() {
  background(255, 200, 65);
  fill(153, 102, 51);
  rect(200,200,200,400);
  fill("blue");
  rect(200,350,200,100);
  fill("black");
  textSize (40);
  text("WEDL", 245 ,415);
  fill("red")
  let kup= 'KUP TERAZ';
  text(kup, mouseX, mouseY);
  allah()
  image(nigg, cos,cos,cos,50)
  
  if(mouseY>200 && mouseY<450, mouseIsPressed == true){                  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  } 
}

function allah(){
  cos = cos-5
  if (cos < -400){
    cos = 600
  }
  text("PROMOCJA -50%", cos,100)
}