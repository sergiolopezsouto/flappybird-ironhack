class Powerdown {

    constructor(ctx, canvasSize) {
        this.ctx = ctx;
        this.canvasSize = canvasSize

        this.powerdownSpecs = {
            size: { width: 50, height: 50 },
            pos: { x: this.canvasSize.w, y: this.randomAppearance() },
            vel: 1.5
        }
    }

    randomAppearance () {
        return Math.random()*this.canvasSize.h 
    }

    draw() {

        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.powerdownSpecs.pos.x, this.powerdownSpecs.pos.y, this.powerdownSpecs.size.width, this.powerdownSpecs.size.height)
        this.move()

    }

    move() {
        this.powerdownSpecs.pos.x -= this.powerdownSpecs.vel
    }

}