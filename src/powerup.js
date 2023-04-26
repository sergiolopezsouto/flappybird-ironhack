class Powerup {

    constructor(ctx, canvasSize) {
        this.ctx = ctx;
        this.canvasSize = canvasSize

        this.imageInstance = undefined
        this.powerupSpecs = {
            size: { width: 50, height: 50 },
            pos: { x: this.canvasSize.w, y: this.randomAppearance() },
            vel: 1.5
        }

        this.init()

    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = './images/powerup.png'
    }

    randomAppearance () {
        return Math.random() * (this.canvasSize.h - 100) 
    }

    draw() {

        this.ctx.drawImage(
            this.imageInstance,
            this.powerupSpecs.pos.x,
            this.powerupSpecs.pos.y,
            this.powerupSpecs.size.width,
            this.powerupSpecs.size.height
        )
        
        this.move()

    }

    move() {
        this.powerupSpecs.pos.x -= this.powerupSpecs.vel
    }

}