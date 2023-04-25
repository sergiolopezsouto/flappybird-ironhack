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

        this.ctx.fillStyle = 'yellow'
        this.ctx.fillRect(this.birdSpecs.pos.x , this.birdSpecs.pos.y , this.birdSpecs.size.w , this.birdSpecs.size.h)

        // this.ctx.drawImage(
        //     this.imageInstance,
        //     this.birdSpecs.pos.x,
        //     this.birdSpecs.pos.y,
        //     this.birdSpecs.size.w,
        //     this.birdSpecs.size.h
        // )

        game.onGame ? this.move() : null // comprueba que el juego esta en marcha para que el pajaro tenga gravedad

    }


    jump() {
        this.jumping = true
        this.birdSpecs.vel.y = 5
        this.jumpHeigth = this.birdSpecs.pos.y + 50
    }

    // jump() {
    //     this.posY -= 40;
    //     this.velY -= 8;
    // }


    move() {
        if (this.jumping) {

            this.birdSpecs.pos.y -= this.birdSpecs.vel.y
            this.birdSpecs.vel.y -= this.gravity

            // if (this.birdSpecs.pos.y <= this.jumpHeigth) this.jumping=false

        } else {
            this.birdSpecs.pos.y -= this.birdSpecs.vel.y
            this.birdSpecs.vel.y = this.gravity
        }
    }

    // move() {
    //     if (this.posY < this.posY0) {   // Está saltando!
    //     this.posY += this.velY;
    //     this.velY += this.gravity;
    //     } else {
    //     this.posY = this.posY0;
    //     this.velY = 1;
    //     }
    // }

    
}