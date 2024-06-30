class Metaor {
  static allMeator = [];
  static timer = Date.now();
  static baseDistance = Math.sqrt(
    Math.pow(window.innerHeight / 2, 2) + Math.pow(window.innerWidth / 2, 2)
  );
  static BaseSpeed = 1;
  constructor({ x, y, radius, speed = Metaor.BaseSpeed, angle }) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speed = speed;
    this.angle = angle;
  }
  static create() {
    if (Metaor.timer <= Date.now()) {
      Metaor.timer += 300;
      const randomAngle = (Math.random() * 360 * Math.PI) / 180;
      console.log(Metaor.baseDistance);
      const newMeator = new Metaor({
        x: center.x + Metaor.baseDistance * Math.cos(randomAngle),
        y: center.y + Metaor.baseDistance * Math.sin(randomAngle),
        radius: Math.random() * 60 + 20,
        angle: randomAngle,
        speed: Metaor.BaseSpeed + Math.random() * 3,
      });
      Metaor.allMeator.push(newMeator);
    }
  }
  static update() {
    Metaor.create();
    // update position
    for (var item of Metaor.allMeator) {
      item.x -= item.speed * Math.cos(item.angle);
      item.y -= item.speed * Math.sin(item.angle);
    }
  }
  static draw() {
    for (var item of Metaor.allMeator) {
      CONTEXT.save();
      CONTEXT.translate(item.x, item.y);
      CONTEXT.drawImage(
        sprite,
        270,
        0,
        150,
        140,
        -50,
        -50,
        item.radius * 2,
        item.radius * 2
      );
      CONTEXT.restore();
    }
  }
}
