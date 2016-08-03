// https://addyosmani.com/largescalejavascript/

var App = (function(){
  var
  canvas,
  ctx,
  triangle1,
  triangle2,
  init = function() {

    triangle1 = {
      x1: 10, y1: 10,
      x2: 990, y2: 990,
      x3: 10, y3: 990,
    };
    triangle2 = {
      x1: 10, y1: 10,
      x2: 990, y2: 990,
      x3: 990, y3: 10,
    };
    setupCanvas();

  },
  setupCanvas = function (){

    canvas = document.getElementById('triangles');

    if (canvas.getContext){
      ctx = canvas.getContext('2d');
      // drawing code here
      draw();

    } else {
      // canvas-unsupported code here
    }
  },
  draw = function(){
    // var line1 = {
    //   x1:0, y1:0, x2:500, y2:500
    // };
    //
    // midpoint(line1);
    //
    // drawLine(line1);
    drawTriangle(triangle1);
    drawTriangle(triangle2);
  },
  midpoint = function(l){

    // midpoint formula
    // (x1 + x2)/2,(y1 + y2)/2
    var midX = (l.x1 + l.x2)/2,
        midY = (l.y1 + l.y2)/2,
        midpoint = {
          x1: midX,
          y1: midY
        };

    // drawDot(midpoint);
    return midpoint;

  },
  length = function(l) {

    var length = Math.sqrt((Math.pow(l.x2 - l.x1, 2) + Math.pow(l.y2 - l.y1, 2)));

    return length;

  },
  drawLine = function(l){

    ctx.beginPath();
    ctx.moveTo(l.x1,l.y1);
    ctx.lineTo(l.x2,l.y2);
    ctx.stroke();

  },
  drawDot = function(p){

    var circle = new Path2D(),
        pointRadius = 1;

    circle.moveTo(125, 35);
    circle.arc(p.x1, p.y1, pointRadius, 0, 2 * Math.PI);

    ctx.fill(circle);
  },
  drawTriangle = function(t){

    var firstEdge = {
      x1: t.x1, y1: t.y1,
      x2: t.x2, y2: t.y2
    },
    secondEdge = {
      x1: t.x2, y1: t.y2,
      x2: t.x3, y2: t.y3
    },
    thirdEdge = {
      x1: t.x3, y1: t.y3,
      x2: t.x1, y2: t.y1
    };

    drawLine(firstEdge);
    // firstMid = midpoint(firstEdge);
    drawLine(secondEdge);
    // midpoint(secondEdge);
    drawLine(thirdEdge);
    // midpoint(thirdEdge);

    divideTriangleHypotenuse(t, 12);
    //divideTriangleSinglePoint(t, 9);
  },
  divideTriangleSinglePoint =  function(t, depth){
    if(depth >= 1){

      var firstEdge = {
        x1: t.x1, y1: t.y1,
        x2: t.x2, y2: t.y2
      },
      secondEdge = {
        x1: t.x2, y1: t.y2,
        x2: t.x3, y2: t.y3
      },
      thirdEdge = {
        x1: t.x3, y1: t.y3,
        x2: t.x1, y2: t.y1
      },
      firstMid = midpoint(firstEdge),
      divideLine = {
        x1: firstMid.x1, y1: firstMid.y1,
        x2: t.x3, y2: t.y3
      };

      var newT1 = {
        x1: t.x1, y1: t.y1,
        x2: firstMid.x1, y2: firstMid.y1,
        x3: t.x3, y3: t.y3,
      }
      var newT2 = {
        x1: firstMid.x1, y1: firstMid.y1,
        x2: t.x2, y2: t.y2,
        x3: t.x3, y3: t.y3,
      }
      drawLine(divideLine);

      setTimeout(function(){
        divideTriangleSinglePoint(newT1, depth -1);
        divideTriangleSinglePoint(newT2, depth -1);
      }, 500);
    }
  },
  divideTriangleHypotenuse =  function(t, depth){

    if(depth >= 1){

      // console.log("Hypotenuse");

      var edges = [
        {
          x1: t.x1, y1: t.y1,
          x2: t.x2, y2: t.y2,
        },
        {
          x1: t.x2, y1: t.y2,
          x2: t.x3, y2: t.y3
        },
        {
          x1: t.x3, y1: t.y3,
          x2: t.x1, y2: t.y1
        }
      ],
      ind = 0,
      longestEdgeInd, longestEdge = 0,
      divideLine;

      edges.forEach(function(entry){
        var len = length(entry);

        if(len > longestEdge){
          longestEdge = len;
          longestEdgeInd = ind;
        }

        entry.length = len;

        ind++;
      });

      // console.log(edges[longestEdgeInd]);

      longestMid = midpoint(edges[longestEdgeInd]);

      divideLine = {
        x1: longestMid.x1, y1: longestMid.y1,
        x2: t.x3, y2: t.y3
      };

      // console.log(edges[0]);

      var newT1 = {
        x1: t.x3, y1: t.y3,
        x2: t.x1, y2: t.y1,
        x3: longestMid.x1, y3: longestMid.y1,
      }
      var newT2 = {
        x1: t.x2, y1: t.y2,
        x2: t.x3, y2: t.y3,
        x3: longestMid.x1, y3: longestMid.y1,
      }

      drawLine(divideLine);

      setTimeout(function(){
        divideTriangleHypotenuse(newT1, depth -1);
        divideTriangleHypotenuse(newT2, depth -1);
      }, 250);

    }
  };
  return {
    init: init
  }
}())

App.init();
