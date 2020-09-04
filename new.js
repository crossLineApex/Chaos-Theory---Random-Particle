var canvas = document.getElementById('canvas');

var ctx = canvas.getContext('2d');

var A=[];
A.push({
  x:305,
  y:55
});

var B=[];
B.push({
  x:105,
  y:505
});

var C=[];
C.push({
  x:505,
  y:455
});

var P=[];
P.push({
  x:5,
  y:5
});

drawRect();
drawText();
randPoint();
//fdg();
setInterval(fdg,1);
/*console.log(A[0].x);
console.log(B);
console.log(C);
console.log(P);*/

function drawRect(){
  ctx.fillStyle = "black";

  ctx.fillRect(300,50,5,5);

  ctx.fillStyle = "black";

  ctx.fillRect(100,500,5,5);

  ctx.fillStyle = "black";

  ctx.fillRect(500,450,5,5);

}

function drawText(){
  ctx.fillStyle="red";

  ctx.font = "30px Arial";

  ctx.fillText("A",305,45);

  ctx.fillStyle="red";

  ctx.font = "30px Arial";

  ctx.fillText("B",95,535);

  ctx.fillStyle="red";

  ctx.font = "30px Arial";

  ctx.fillText("C",505,465);
}

function randPoint(){

    ctx.fillStyle = "black";

    ctx.fillRect(0,0,5,5);
}
function fdg(){
  var midPoint=[];
  var rand = getRandom();
  if(rand==1||rand==2){
    midPoint.push({
      x:(A[0].x + P[0].x)/2,
      y:(A[0].y + P[0].y)/2
    });
    ctx.fillStyle="green";
    ctx.fillRect(midPoint[0].x-1,midPoint[0].y-1,1,1);
      P[0].x=midPoint[0].x;
      P[0].y=midPoint[0].y;
  }
  if(rand==3||rand==4){
    midPoint.push({
      x:(B[0].x + P[0].x)/2,
      y:(B[0].y + P[0].y)/2
    });
    ctx.fillStyle="green";
    ctx.fillRect(midPoint[0].x-1,midPoint[0].y-1,1,1);
    P[0].x=midPoint[0].x;
    P[0].y=midPoint[0].y;
  }
  if(rand==5||rand==6){
    midPoint.push({
      x:(C[0].x + P[0].x)/2,
      y:(C[0].y + P[0].y)/2
    });
    ctx.fillStyle="green";
    ctx.fillRect(midPoint[0].x-1,midPoint[0].y-1,1,1);
    P[0].x=midPoint[0].x;
    P[0].y=midPoint[0].y;
  }
  //console.log(P);
}
function getRandom(){
  var max = 6;
  var random = Math.floor((Math.random()*max)+1);
  return(random);

}
