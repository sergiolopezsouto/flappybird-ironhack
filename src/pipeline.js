class Pipeline {

    constructor(ctx, canvasSize) {
        this.ctx = ctx;
        this.canvasSize = canvasSize

        this.pipelineSpecs = {
            spaceBetween: 300,
            size: { width: 200 , height: 300 } ,
            pos: { x: this.canvasSize.w , y: this.canvasSize.h - 200} ,
            vel: 2.5 
        }
    }


    randomHeigth() {
//         var min = 83.1;
//           var max = 193.36;

//          var x = Math.random()*(max - min)+min;

//              console.log(x);
// //            126.94014012699063


        return Math.random() * this.canvasSize.h 
    }

    draw() {
        this.ctx.fillStyle= 'green'
        // const pipe = this.randomHeigth
        this.ctx.fillRect(this.pipelineSpecs.pos.x, this.pipelineSpecs.pos.y, this.pipelineSpecs.size.width, this.pipelineSpecs.size.height)
        this.ctx.fillRect(this.pipelineSpecs.pos.x, 0, this.pipelineSpecs.size.width, this.pipelineSpecs.size.height)
        this.move()
    }

    move() {
        this.pipelineSpecs.pos.x -= this.pipelineSpecs.vel
    }

}