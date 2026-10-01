function Particle(x,y,r) {
  var options = {
    restitution: 0.5,
    friction: 0,
    density: 1
  }
  x += Math.round(Math.random()) * 2 - 1;
  this.body = Bodies.circle(x, y, r, options);
  this.r = r;
  World.add(world, this.body);
}

Particle.prototype.isOffScreen = function() {
  var x = this.body.position.x;
  return (x < -50 || x > canv.width + 50);
}
