const PLAYER = new Player();

window.onload = () => {
  BODY = document.querySelector("body");
  CANVAS = document.getElementById("canvas");
  CANVAS.width = window.innerWidth;
  CANVAS.height = window.innerHeight;
  CONTEXT = CANVAS.getContext("2d");
  drawSun();

  startButton = document.getElementsByClassName("start")[0];
  startButton.addEventListener("click", () => {
    window.addEventListener("mousemove", updatePlayerAngle);
    window.addEventListener("click", shoot);

    startButton.style.display = "none";
    loop = setInterval(main, 1000 / fps);
  });
};

function main() {
  CONTEXT.clearRect(0, 0, CANVAS.width, CANVAS.height);
  update();
  draw();
}
function update() {
  Bullet.update();
  Bullet.clear();
  Metaor.update();
  collision();
}
function draw() {
  drawSun();
  drawPlayer();
  Bullet.draw();
  Metaor.draw();
}

function drawSun() {
  CONTEXT.save();

  CONTEXT.translate(center.x, center.y);
  SUNANGLE += (Math.PI / 180) * 1;
  CONTEXT.rotate(SUNANGLE);
  CONTEXT.drawImage(sprite, 0, 0, 200, 200, -100, -100, 200, 200);
  CONTEXT.restore();
}
function drawPlayer() {
  const r = 300;
  const dx = Math.cos(PLAYER.angle) * r;
  const dy = Math.sin(PLAYER.angle) * r;
  CONTEXT.save();
  CONTEXT.translate(center.x + dx / 2, center.y + dy / 2);
  CONTEXT.rotate(PLAYER.angle + Math.PI / 2);
  CONTEXT.drawImage(sprite, 200, 0, 80, 100, -50, -50, 100, 100);
  CONTEXT.restore();
}
function updatePlayerAngle(e) {
  const cx = e.clientX;
  const cy = e.clientY;
  PLAYER.angle = Math.atan2(cy - center.y, cx - center.x);
}
function shoot() {
  PLAYER.shoot();
}
function collision() {
  for (var i in Bullet.allBullets) {
    for (var i_ in Metaor.allMeator) {
      var bullet = Bullet.allBullets[i];
      var metaor = Metaor.allMeator[i_];
      const diff = Math.hypot(bullet.x - metaor.x, bullet.y - metaor.y);
      const minDiff = Bullet.radius + metaor.radius;
      console.log(minDiff, diff);
      if (diff <= minDiff) {
        Bullet.allBullets.splice(i, 1);
        Metaor.allMeator.splice(i_, 1);
      }
    }
  }

  for (var metaor of Metaor.allMeator) {
    const diff = Math.hypot(center.x - metaor.x, center.y - metaor.y);
    const minDiff = 100 + metaor.radius;
    if (diff <= minDiff) {
      clearInterval(loop);
      endGame();
      break;
    }
  }
}
function endGame() {
  BODY.innerHTML += endGameTemplate;
  const restart = document.querySelector(".card > button");
  restart.addEventListener("click", () => {
    window.location.reload();
  });
}
