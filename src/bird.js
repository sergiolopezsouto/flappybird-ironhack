class Bird {

    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.imageInstance = undefined
        this.birdSpecs = {
            pos: { x: this.canvasSize.w / 5, y: this.canvasSize.h / 2 },
            size: { w: 100, h: 75 },
            vel: { y: 0 }
        }
        this.gravity = 0.15;

        this.init()
        
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = './images/sprite-bird.png'
        this.imageInstance.frames = 4
        this.imageInstance.framesIndex = 0
    }

    draw(framesCounter) {
        
        this.ctx.drawImage(
            this.imageInstance,
            this.imageInstance.width / this.imageInstance.frames * this.imageInstance.framesIndex,
            0,
            this.imageInstance.width / this.imageInstance.frames,
            this.imageInstance.height,
            this.birdSpecs.pos.x,
            this.birdSpecs.pos.y,
            this.birdSpecs.size.w,
            this.birdSpecs.size.h
        )

        this.animate(framesCounter)

        game.onGame ? this.move() : null // comprueba que el juego esta en marcha para que el pajaro tenga gravedad

    }

    animate(framesCounter) {
        if (framesCounter % 4 === 0) {
            this.imageInstance.framesIndex++;
        }

        if (this.imageInstance.framesIndex >= this.imageInstance.frames) {
            this.imageInstance.framesIndex = 0
        }

    }

    jump() {
        this.birdSpecs.vel.y = 5
    }

    move() {
        this.birdSpecs.pos.y -= this.birdSpecs.vel.y
        this.birdSpecs.vel.y -= this.gravity
    }
    
}