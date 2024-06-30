class Bullet {
  static allBullets = [];
  static radius = 5;
  static speed = 15;

  constructor({ x, y, angle }) {
    this.x = x;
    this.y = y;
    this.angle = angle;
  }
  static update() {
    for (let item of Bullet.allBullets) {
      item.y += Math.sin(item.angle) * Bullet.speed;
      item.x += Math.cos(item.angle) * Bullet.speed;
    }
  }
  static draw() {
    for (var item of this.allBullets) {
      CONTEXT.beginPath(); // Begin a new path
      CONTEXT.arc(item.x, item.y, Bullet.radius, 0, 2 * Math.PI); // Define the arc (circle)
      CONTEXT.fillStyle = "white"; // Set fill color
      CONTEXT.fill(); // Fill the circle with the color
      CONTEXT.closePath(); // Close the path
    }
  }
  static clear() {
    for (let i = Bullet.allBullets.length - 1; i >= 0; i--) {
      let bullet = Bullet.allBullets[i];
      if (
        bullet.x < 0 ||
        bullet.x > center.x * 2 ||
        bullet.y < 0 ||
        bullet.y >= center.y * 2
      ) {
        Bullet.allBullets.splice(i, 1);
      }
    }
  }
}
