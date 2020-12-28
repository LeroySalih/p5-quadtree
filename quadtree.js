// Will hold 1 point per region, or a Node for the region.

const MAX_NODES = 4;

class QuadPoint {
   constructor(x, y) {
     this.x = x;
     this.y = y;
   }
  
   draw() {
     
     push()
     strokeWeight(3)
     stroke(0)
     point(this.x, this.y)
     pop()
   }
  
}

class QuadNode {
  
  constructor (x,       // center X
               y,       // center Y
               width   // distance from center to edge
               ) {
    
    this.x = x;
    this.y = y;
    this.width = width;
    this.points = [];
    this.divided = false;
    this.regions = [];
    
  }
  
  
  subdivide() {
    point (this.x - (this.width / 2), this.y - (this.width / 2))
    point (this.x + (this.width / 2), this.y - (this.width / 2))
    point (this.x - (this.width / 2), this.y + (this.width / 2))
    point (this.x + (this.width / 2), this.y + (this.width / 2))
    
    this.regions.push(
      new QuadNode(
        this.x - (this.width / 2), 
        this.y - (this.width / 2),
        this.width / 2
        )
      );
    
    
    this.regions.push(
      new QuadNode(
        this.x + (this.width / 2), 
        this.y - (this.width / 2),
        this.width / 2
      )
      );
    
    this.regions.push(
      new QuadNode(
        this.x - (this.width / 2), 
        this.y + (this.width / 2),
        this.width / 2
        )
      );
    
    this.regions.push(
      new QuadNode(
        this.x + (this.width / 2), 
        this.y + (this.width / 2),
        this.width  /2
      )
      );
    
    
    
    
  }
  
  
  addPoint(newP) {
    
    const xMin = this.x - (this.width )
    const xMax = this.x + (this.width )
    const yMin = this.y - (this.width )
    const yMax = this.y + (this.width )
    
    // check that point is with in the region
    if ((newP.x < xMin) || 
        (newP.x > xMax) || 
        (newP.y < yMin) || 
        (newP.y > yMax)) {
      console.error('Out of region', xMin, xMax, yMin, yMax)
      return;
    }
    
    if (this.points.length == MAX_NODES && this.divided === false) {
      this.subdivide()
      this.divided = true;
      this.points.forEach(p=> {
        this.regions.forEach(r => r.addPoint(p))
      });
      
      this.points = []
    }
    
    if (this.divided) {
      this.regions.forEach(r => r.addPoint(newP))
    } else {
      this.points.push(newP)
    }
    
  }
  
  
  draw() {
    strokeWeight(2)
    stroke(0)
    noFill()
    
    rect(
      this.x- this.width, 
      this.y- this.width, 
      2*this.width, 
      2*this.width)
    
    push()
    stroke(255, 0, 0)
    strokeWeight(10)
    point (this.x, this.y)
    
    this.points.forEach((p) => p.draw())
    this.regions.forEach((r) => r.draw())
    pop()
    
  }
}
