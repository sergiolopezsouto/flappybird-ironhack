class Powerup {

    constructor(ctx, canvasSize) {
        this.ctx = ctx;
        this.canvasSize = canvasSize

        this.powerupSpecs = {
            size: { width: 50, height: 50 },
            pos: { x: this.canvasSize.w, y: this.randomAppearance() },
            vel: 1.5
        }
    }

    randomAppearance () {
        return Math.random()*this.canvasSize.h 
    }

    draw() {

        this.ctx.fillStyle = 'blue'
        this.ctx.fillRect(this.powerupSpecs.pos.x, this.powerupSpecs.pos.y, this.powerupSpecs.size.width, this.powerupSpecs.size.height)
        this.move()

    }

    move() {
        this.powerupSpecs.pos.x -= this.powerupSpecs.vel
    }

}