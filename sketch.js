
let m1, qt;
let points = []

function setup() {
  createCanvas(400, 400);
  // qt = new QuadNode(200, 200, 200)
  
  //const testPoints = [40, 50, 100, 200, 305, 315, 325, 335, 351, 352, 353, 354, 355]
  
  //testPoints.forEach(t => qt.addPoint(new QuadPoint(t, 10)))
  
  

}


let bgColour = 220;

function draw() {
  background(bgColour);
  // qt.draw()  
  let r1 = new QuadNode(100, 100, 50)
  r1.draw()
  
  let r2 = new QuadNode(mouseX, mouseY, 50)
  r2.draw()
  
  
  if (intersects(r1, r2)) {
    bgColour = 200
  } else {
    bgColour = 255
  }
  
}