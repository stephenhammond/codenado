Template.blackboard.onRendered( function() {
  // Custom fixes to correct drawing offset:
  var widthFix = 0.795;
  var yCoordFix = 97;
  var color;

  var canvas = $('.canvas-container canvas'),
  ctx = canvas[0].getContext('2d'),
  drawing = false,
  from;

  canvas.attr({

    width: $(window).width() * widthFix,
    height: 662

  }).hammer().on('dragstart', function(event) {

    drawing = true;
    from = {x: parseInt(event.gesture.center.pageX), y: parseInt(event.gesture.center.pageY) - yCoordFix};

  }).on('dragend', function() {

    drawing = false;

  }).on('drag', function(event) {

    if(!drawing) return;

    var to = {x: parseInt(event.gesture.center.pageX), y: parseInt(event.gesture.center.pageY) - yCoordFix};

    drawLine(ctx, from, to);

    Lines.insert({from: from, to: to});

    from = to;
  });

  $('.canvas-container .draw-button').click(function() {
    Meteor.call('wipeClean');
  });

  function drawLine(ctx, from, to) {
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.closePath();
    ctx.stroke();
  }

  function wipe(ctx) {
    ctx.fillRect(0, 0, canvas.width(), canvas.height());
  }

  function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
      }
    return color;
  }

  ctx.strokeStyle = '#FFFFFF';
  ctx.fillStyle = '#272821';

  Meteor.autorun(function() {

    wipe(ctx);

    Lines.find().forEach(function(line) {
      drawLine(ctx, line.from, line.to);
    });
  });

  // Stop iOS from doing the bounce thing with the screen
  document.ontouchmove = function(event){
    event.preventDefault();
  }
});
