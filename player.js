class Player {
  constructor() {
    this.angle = 0; // radian
    // this.cooldown = Date.now();
  }
  shoot() {
    const r = 400;
    const dx = Math.cos(PLAYER.angle) * r;
    const dy = Math.sin(PLAYER.angle) * r;

    const x = center.x + dx / 2;
    const y = center.y + dy / 2;

    const newBullet = new Bullet({ x, y, angle: this.angle });
    Bullet.allBullets.push(newBullet);
  }
}
