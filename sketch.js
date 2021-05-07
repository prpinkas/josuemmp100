function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(230, 230, 250);
  noStroke();
  ellipse (mouseX, mouseY, 40, 49)
  fill(216,191,216)
  ellipse(mouseY, mouseX, 50, 49)
  rect(70, 80, 100, 100)
  fill(221, 160, 221)
  rect(300, 400, 150, 160)
  fill(218, 112, 214)
  textSize(30)
  textFont("KronaOne")
  textStyle(BOLD)
  text('Hey how is it going?', 60, 75 )
  
}