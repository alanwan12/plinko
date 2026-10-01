window.onload = function() {
  canv=document.getElementById("world");
  ctx = canv.getContext("2d");
  setup();
  setSpeed = setInterval(game,1/1);
}

var Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var render;
var world;
var particles = [];
var frameCount = 0;
var pegs = [];
var cols = 11;
var rows = 10;
var bounds = [];

function setup() {
  engine = Engine.create();
  render = Render.create({
    element: document.body,
    engine: engine,
    canvas: canv,
    options: {
      width: canv.width,
      height: canv.height,
      wireframes: false
    }
  });
  
  Engine.run(engine);
  Render.run(render);
  world = engine.world;
  newParticle();
  var spacing = canv.width/cols;
  for (var j = 0; j < rows; j++) {
    for (var i = 0; i < cols+1; i++) {
      var x = i * spacing;
      if (j % 2 === 0) {
        x += spacing/2;
      }
      var y = spacing + j * spacing;
      var p = new Peg(x, y, 4);
      pegs.push(p);
    }
  }
  
  var b = new Boundary(canv.width/2, canv.height + 50, canv.width, 100);
  bounds.push(b);
  
  for (var i = 0; i < cols+1; i++) {
    var x = i * spacing;
    var h = 100;
    var w = 10;
    var y = canv.height - h / 2;
    var b = new Boundary(x, y, w, h);
    bounds.push(b);
  }
}

function newParticle() {
  var p = new Particle(300, 10, 10);
  particles.push(p);
}

function game() {
  frameCount+=1;
  if (frameCount % 60 == 0) {
    newParticle();
  }
  for (var i = 0; i < particles.length; i++) {
    if (particles[i].isOffScreen()) {
      World.remove(world, particles[i].body);
      particles.splice(i,1);
      i--;
    }
  }
}