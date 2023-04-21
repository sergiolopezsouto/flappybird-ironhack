class Bird {

    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.imageInstance = undefined
        this.birdSpecs = {
            pos: { x: this.canvasSize.w/5, y: this.canvasSize.h/2 },
            size: { w: 100, h: 75 },
            vel: { x: 2, y: 3 } 
        }
        this.gravity = 0.8;


        this.init()
        
    }
    

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = './images/twitter.png'
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

    jump() {
        // this.turnVertical()
        this.birdSpecs.pos.y -= 50
        this.birdSpecs.vel.y -= 40
    }

    move() {

        /*
        if (this.posY < this.posY0) {   // Está saltando!
        this.posY += this.velY;
        this.velY += this.gravity;
        } else {
        this.posY = this.posY0;
        this.velY = 1;
        }
        */
        this.birdSpecs.pos.y += this.birdSpecs.vel.y;
        this.birdSpecs.vel.y = this.gravity;


        if (this.birdSpecs.pos.y >= this.canvasSize.h - this.birdSpecs.size.h) this.turnVertical()
        // if (this.birdSpecs.pos.x >= this.canvasSize.w - this.birdSpecs.size.w) this.turnHorizontal() 

        this.birdSpecs.vel.y += .1          // gravity

        this.birdSpecs.pos.y += this.birdSpecs.vel.y
    }


    // tampoco nos hace falta (lo dejamos para que el pajaro no se vaya mientras hacemos pruebas)
    turnVertical() {
        this.birdSpecs.vel.y *= -1
    }

    // el rebote horizontal no nos hace falta
    // turnHorizontal() {
    //     this.birdSpecs.vel.x *= -1
    // }

}