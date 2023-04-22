class Pipeline {
    constructor(ctx, canvasSize) {
        this.ctx = ctx;
        this.canvasSize = canvasSize

        this.pipelineSpecs = {
            size: { width: 25 , height: 200 } ,
            pos: { x: this.canvasSize.w - 100 , y: this.canvasSize.h - 200} ,
            vel: 2.5 
        }
    }

    draw() {
        this.ctx.fillRect(this.pipelineSpecs.pos.x, this.pipelineSpecs.pos.y, this.pipelineSpecs.size.width, this.pipelineSpecs.size.height)
        this.move()
    }

    move() {
        this.pipelineSpecs.pos.x -= this.pipelineSpecs.vel
    }

}