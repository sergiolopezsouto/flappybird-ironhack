class Pipeline {

    constructor(ctx, canvasSize) {
        this.ctx = ctx;
        this.canvasSize = canvasSize

        this.imageInstance = undefined
        this.pipelineSpecs = {
            spaceBetween: 300,
            size: { width: this.canvasSize.w / 6, height: this.randomHeight() },
            pos: { x: this.canvasSize.w, y: this.canvasSize.h - 200 },
            vel: 2.5
        }

        this.init()

    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = './images/ice.webp'
    }


    randomHeight() {
        return Math.random() * 400 + 50 
    }
 
    draw() {

        // con imagenes
        // esta siempre empieza en el techo 
        this.ctx.drawImage(
            this.imageInstance,
            this.pipelineSpecs.pos.x, 
            0, 
            this.pipelineSpecs.size.width, 
            this.pipelineSpecs.size.height
        )

        // esta siempre empieza en el suelo 
        this.ctx.drawImage(
            this.imageInstance,
            this.pipelineSpecs.pos.x, 
            this.pipelineSpecs.size.height + this.pipelineSpecs.spaceBetween, 
            this.pipelineSpecs.size.width, 
            this.canvasSize.h
        )

        // con rectangulos
        // this.ctx.fillStyle = 'green'

        // // esta siempre empieza en el techo 
        // this.ctx.fillRect(this.pipelineSpecs.pos.x, 0, this.pipelineSpecs.size.width, this.pipelineSpecs.size.height)

        // // esta siempre empieza en el suelo
        // this.ctx.fillRect(this.pipelineSpecs.pos.x, this.pipelineSpecs.size.height + this.pipelineSpecs.spaceBetween, this.pipelineSpecs.size.width, this.canvasSize.h)


        this.move()

    }

    move() {
        this.pipelineSpecs.pos.x -= this.pipelineSpecs.vel
    }

}