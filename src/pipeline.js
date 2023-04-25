class Pipeline {

    constructor(ctx, canvasSize) {
        this.ctx = ctx;
        this.canvasSize = canvasSize

        this.pipelineSpecs = {
            spaceBetween: 400,
            size: { width: this.canvasSize.w / 10, height: this.randomHeight() },
            pos: { x: this.canvasSize.w, y: this.canvasSize.h - 200 },
            vel: 2.5
        }
    }

    randomHeight() {
        return Math.random() * 400 + 50
    }

    draw() {
        
        this.ctx.fillStyle = 'green'

        // esta siempre empieza en el techo 
        this.ctx.fillRect(this.pipelineSpecs.pos.x, 0, this.pipelineSpecs.size.width, this.pipelineSpecs.size.height)

        // esta siempre empieza en el suelo
        this.ctx.fillRect(this.pipelineSpecs.pos.x, this.pipelineSpecs.size.height + this.pipelineSpecs.spaceBetween, this.pipelineSpecs.size.width, this.canvasSize.h)

        this.move()

    }

    move() {
        this.pipelineSpecs.pos.x -= this.pipelineSpecs.vel
    }

}