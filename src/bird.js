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
        this.imageInstance.src = './images/twitter.png'
    }

    draw() {
        
        this.ctx.drawImage(
            this.imageInstance,
            this.birdSpecs.pos.x,
            this.birdSpecs.pos.y,
            this.birdSpecs.size.w,
            this.birdSpecs.size.h
        )

        game.onGame ? this.move() : null // comprueba que el juego esta en marcha para que el pajaro tenga gravedad

    }


    jump() {
        this.birdSpecs.vel.y = 5
    }

    move() {
        this.birdSpecs.pos.y -= this.birdSpecs.vel.y
        this.birdSpecs.vel.y -= this.gravity
    }
    
}