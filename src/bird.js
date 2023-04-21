class Bird {

    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.imageInstance = undefined
        this.birdSpecs = {
            pos: { x: this.canvasSize.w/5, y: this.canvasSize.h/2 },
            size: { w: 50, h: 50 },
            vel: { x: 6, y: 2 }

        }

        this.init()
        
    }
    

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = './images/bird.jpeg'
    }

    draw() {

        this.move()

        this.ctx.drawImage(
            this.imageInstance,
            this.birdSpecs.pos.x,
            this.birdSpecs.pos.y,
            this.birdSpecs.size.w,
            this.birdSpecs.size.h
        )
    }

    move() {

        if (this.birdSpecs.pos.y >= this.canvasSize.h - this.birdSpecs.size.h) this.turnVertical()
        if (this.birdSpecs.pos.x >= this.canvasSize.w - this.birdSpecs.size.w) this.turnHorizontal()

        this.birdSpecs.vel.y += .1          // gravity

        this.birdSpecs.pos.x += this.birdSpecs.vel.x
        this.birdSpecs.pos.y += this.birdSpecs.vel.y
    }

    turnVertical() {
        this.birdSpecs.vel.y *= -1
    }

    turnHorizontal() {
        this.birdSpecs.vel.x *= -1
    }
}