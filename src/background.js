class Background {

  constructor(ctx, canvasSize) {
    this.ctx = ctx
    this.canvasSize = canvasSize

    // this.width = w;
    // this.height = h;

    this.image = new Image()
    this.image.src = "./images/background.png"

    this.position = {x:0, y:0}

    this.vel = 2
  }

  draw() {
    this.ctx.drawImage(this.image, this.position.x, this.position.y, this.canvasSize.w, this.canvasSize.h);
    this.ctx.drawImage(this.image, this.position.x + this.canvasSize.w, this.position.y, this.canvasSize.w, this.canvasSize.h);
    this.move()
  }

  move() {
    if (this.position.x <= -this.canvasSize.w) {
      this.position.x = 0;
    }
    this.position.x -= this.vel;
  }

}