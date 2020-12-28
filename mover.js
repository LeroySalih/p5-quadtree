class Mover {
  
  constructor (id, location, velocity, accel) {
      this.id = id;
      this.location = location
      this.velocity = velocity
      this.accel = accel
  }
  
  addForce(force) {
    this.accel.add(force);
  }
  
  update(){
    // 
    this.velocity.add(this.accel)  
    this.location.add(this.velocity) 
    
    // reset accel
    this.accel *= 0
    if (this.location.x >= 400){
      this.location.x = 0
    }
  }
  
  draw() {
  
    text(this.accel, 10, 10)
    text(this.velocity, 10, 50)
    text(this.velocity, 10, 100)
    // text(this.location, 0, 150)
    rect(this.location.x, this.location.y, 100 , 100)
  }
}
