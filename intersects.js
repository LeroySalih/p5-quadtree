  function intersects(r1, r2) {
    return not (
        (r1.x - (r1.width/2) > (r2.x + r2.width / 2)) ||
        (r1.x + (r1.width/2) < (r2.x - r2.width / 2)) ||
        (r1.y + (r1.width/2) > (r2.y + r2.width / 2)) ||
        (r1.y - (r1.width/2) < (r2.y - r2.width / 2)) 
       );
  }
