ctx.fillStyle = "lime";
ctx.fillRect(canv.width/2, canv.height/2, 20, 20);
setInterval(function(){
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canv.width, canv.height);
  ctx.fillStyle = "lime";
  px += xd;
  py += yd;
  snake.push({x:px, y:py});
  for (let i=0; i<snake.length-1; i++) {
    ctx.fillRect(snake[i].x*SIZE, snake[i].y*SIZE, SIZE-2, SIZE-2);
    if (snake[i].x == px && snake[i].y == py) {
      tail = MIN;
    }
  }
  while (snake.length > tail) {
    snake.shift();
  }
  if (appleX == px && appleY == py || appleX2 == px && appleY2 == py) {
    tail++;
    appleX = Math.floor(Math.random()*canv.width/SIZE);
    appleY = Math.floor(Math.random()*canv.height/SIZE);
    appleX2 = Math.floor(Math.random()*canv.width/SIZE);
    appleY2 = Math.floor(Math.random()*canv.height/SIZE);

  }
  ctx.fillStyle = "red";
  ctx.fillRect(appleX*SIZE, appleY*SIZE, SIZE-2, SIZE-2);


  ctx.fillStyle = "blue";
  ctx.fillRect(appleX2*SIZE, appleY2*SIZE, SIZE-2, SIZE-2);

if (poisonedappleX == px && poisonedappleY == py||tail>5) {
  tail--;
  poisonedappleX = Math.floor(Math.random()*canv.width/SIZE);
  poisonedappleY = Math.floor(Math.random()*canv.height/SIZE);
}

ctx.fillStyle = "purple";
ctx.fillRect(poisonedappleX*SIZE, poisonedappleY*SIZE, SIZE-2, SIZE-2);

if(snake.px < 0){
  snake.px = SIZE;
}
if(snake.py < 0){
  snake.py = SIZE;
}
if(snake.px < SIZE){
  snake.px = 0;
}
if(snake.py < SIZE){
    snake.py = 0;
  }
}, 1000/FPS);
