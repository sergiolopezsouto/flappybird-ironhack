class Pipeline {

    constructor(ctx, canvasSize) {
        this.ctx = ctx;
        this.canvasSize = canvasSize

        this.pipelineSpecs = {
            spaceBetween: 400,
            size: { width: this.canvasSize.w / 10, height: this.randomHeigth() },
            pos: { x: this.canvasSize.w, y: this.canvasSize.h - 200 },
            vel: 2.5
        }
    }

    getRandomRange(min, max) {
        return Math.random() * (max - min) + min; // con esta funcion nos aseguramos de que no vamos a tener una columna por la literlamente el pajaro no pase
    }
    randomHeigth() {
        return this.getRandomRange(100, 500);

    }

    draw() {
        this.ctx.fillStyle = 'green'

        // esta siempre empieza en el techo 
        this.ctx.fillRect(this.pipelineSpecs.pos.x, 0, this.pipelineSpecs.size.width, this.pipelineSpecs.size.height)

        // esta siempre empieza en el suelo
        // lo unico que deberiamos tocar pq es variable es el heigth para que siempre haya el mismo espacio entre las tuberias
        // posx , posy y width siempre es el mismo -> jugar con size heigth de ambas tuberias
        this.ctx.fillRect(this.pipelineSpecs.pos.x, this.pipelineSpecs.size.height + this.pipelineSpecs.spaceBetween, this.pipelineSpecs.size.width, this.canvasSize.h)


        this.move()

    }

    move() {
        this.pipelineSpecs.pos.x -= this.pipelineSpecs.vel
    }

}