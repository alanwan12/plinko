function Peg(x,y,r) {
  var options = {
    restitution: 0.5,
    friction: 0,
    isStatic: true
  }
  this.body = Bodies.circle(x, y, r, options);
  this.r = r;
  World.add(world, this.body);
}