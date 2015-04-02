Template.home.onRendered(function() {
    var hash = Meteor.uuid();
    var lobbyId = hash.substring(hash.length - 7);
    $('.button-app-start').attr('href', '/app/'+lobbyId);

  if (!navigator.userAgent.match(/iP(ad|hone|od)|android/gi)) {
    var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    $(".masthead").css("height", viewportHeight + "px");
  }

  window.requestAnimFrame = (function(){
  return window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  function( callback ) {
    window.setTimeout(callback, 1000 / 60);
  };
})();

// helper functions
function randomMax(max) {
  return Math.floor(Math.random() * max);
}
function getParticleColor() {
  var r = (100 + randomMax(255));
  var g = (100 + randomMax(255));
  var b = (100 + randomMax(255));

  return 'rgb(' + r + ',' + g + ',' + b +  ')';
}
function refreshColor() {
  for (var i = 0; i < particleSystem.particles.length; i++) {
    particleSystem.particles[i].color = singlecolor ? defaultColor : getParticleColor();
  }
}

// dom stuff and fps counter
var canvas = document.getElementById('mainCanvas');
// var fpsOut = document.getElementById('fps');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');
// var fps = 0, now, lastUpdate = (new Date())*1 - 1, fpsFilter = 50;

// globals
var numParticles = 180,
  angleSpeed = -0.01,
  particleSize = 2.5,
  verticalSpeed = -1,
  widthFactor = 1,
  singlecolor = true,
  defaultColor = '#73f0df';

var Particle = function () {
  this.h = Math.floor(canvas.height * Math.random());
  this.angle = Math.random() * Math.PI * 2;
  this.color = singlecolor ? defaultColor : getParticleColor();
};

Particle.prototype.draw = function (id) {
  this.angle += angleSpeed;
  this.h -= verticalSpeed;

  if (this.h < 0 || this.h > canvas.height) {
    this.h = Math.floor(canvas.height * Math.random());
  }

  ctx.beginPath();
  ctx.fillStyle = singlecolor ? defaultColor : this.color;
  var sizeFactor = 0.5 + (Math.sin(this.angle) + 1) / 2;
  ctx.arc(canvas.width / 2 + Math.cos(this.angle) * (canvas.height - this.h) / widthFactor, this.h, particleSize * sizeFactor, 0, Math.PI * 2);
  ctx.fill();
};

var ParticleSystem = function () {
  this.particles = [];
  for (var i = 0; i < numParticles; i++) {
    this.particles.push(new Particle(canvas.height * Math.random()));
  }
};
ParticleSystem.prototype.draw = function () {
  for (var i = 0; i < this.particles.length; i++) {
    this.particles[i].draw();
  }
};

var particleSystem = new ParticleSystem();

window.onresize = function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  particleSystem = new ParticleSystem();
};

(function animloop(){
  requestAnimFrame(animloop);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particleSystem.draw();
  // var thisFrameFPS = 1000 / ((now=new Date()) - lastUpdate);
  // fps += (thisFrameFPS - fps) / fpsFilter;
  // lastUpdate = now;
})();


});


