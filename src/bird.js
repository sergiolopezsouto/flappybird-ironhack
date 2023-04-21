class Bird {

    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.imageInstance = undefined
        this.birdSpecs = {
            pos: { x: this.canvasSize.w/5, y: this.canvasSize.h/2 },
            size: { w: 150, h: 100 },
            vel: { x: 2, y: 3 } 
        }

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

    // move() {

    // }

    jump() {
        this.turnVertical()
        // this.pos.y -= 40
        // this.vel -= 8
    }

    move() {

        if (this.birdSpecs.pos.y >= this.canvasSize.h - this.birdSpecs.size.h) this.turnVertical()
        // if (this.birdSpecs.pos.x >= this.canvasSize.w - this.birdSpecs.size.w) this.turnHorizontal() 

        this.birdSpecs.vel.y += .1          // gravity

        // this.birdSpecs.pos.x += this.birdSpecs.vel.x  -> no nos hace falta pq el pajaro no se mueve en el eje x
        this.birdSpecs.pos.y += this.birdSpecs.vel.y
    }

    turnVertical() {
        this.birdSpecs.vel.y *= -1
    }

    // el rebote horizontal no nos hace falta
    // turnHorizontal() {
    //     this.birdSpecs.vel.x *= -1
    // }

}