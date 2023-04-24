const game = {
    title: 'Flappy Bird',
    author: 'Sergio & Manuel',
    license: undefined,
    version: '1.0.0',
    ctx: undefined,
    canvasSize: {
        w: undefined,
        h: undefined
    },
    framesCounter: 0,
    onGame: false,   //atributo para comprobar que inciamos el juego y que caiga el pajaro
    background: undefined,
    bird: undefined,
    pipelines: [],
    powerUps: [],

    init() {
        this.setContext()
        this.setDimensions()
        this.setEventListeners()
        // this.createBird() 
        this.start()
    },

    setContext() {
        this.ctx = document.querySelector('#myCanvas').getContext('2d')
    },
    setDimensions() {
        this.canvasSize.w = window.innerWidth / 1.5
        this.canvasSize.h = window.innerHeight
        document.querySelector('#myCanvas').setAttribute('width', this.canvasSize.w)
        document.querySelector('#myCanvas').setAttribute('height', this.canvasSize.h)
    },
    setEventListeners() {
        document.onkeydown = ({ code }) => {
            if (code === 'Space') {
                this.onGame = true
                this.bird.jump()
            }
        }
    },

    start() {

        this.createBackground()
        this.createBird()
        //  -> para que el pajaro cargue desde el principio deberiamos crearlo aqui 

        this.interval = setInterval(() => {

            this.framesCounter > 5000 ? this.framesCounter = 0 : this.framesCounter++

            this.clearAll()
            this.drawAll()


            if (this.onGame && this.framesCounter > 5) {
                this.drawPipelines()
                this.createPipelines()
                this.clearPipelines()
            }

            if (this.isCollision()){
                console.log(this.framesCounter)
                this.gameOver()
            } 

            //Solo inicia las tuberias en el momento en el que tenemos el pajaro


        }, 10)
    },

    // ---------------------------------------------------------------------------------------------------------------------------------------------------

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    drawAll() {
        this.drawBackground()
        this.drawBird()
    },

    // ---------------------------------------------------------------------------------------------------------------------------------------------------

    createBackground() {
        this.background = new Background(this.ctx, this.canvasSize)
    },

    drawBackground() {
        this.background.draw()
    },

    // ---------------------------------------------------------------------------------------------------------------------------------------------------

    createBird() {
        this.bird = new Bird(this.ctx, this.canvasSize)
    },
    drawBird() {
        this.bird?.draw()
    },

    // ---------------------------------------------------------------------------------------------------------------------------------------------------

    createPipelines() {
        if (this.framesCounter % 250 === 0) {
            this.pipelines.push(new Pipeline(this.ctx, this.canvasSize))
        }
    },

    drawPipelines() {
        this.pipelines.forEach(pipe => pipe.draw())
    },

    clearPipelines() {
        this.pipelines = this.pipelines.filter(pipe => pipe.pipelineSpecs.pos.x >= 0 - pipe.pipelineSpecs.size.width)
    },

    // ---------------------------------------------------------------------------------------------------------------------------------------------------

    isCollision() {
        // colision con el techo
        if (this.bird.birdSpecs.pos.y < 0) return true
        // colision con el suelo
        if (this.bird.birdSpecs.pos.y + this.bird.birdSpecs.size.h > this.canvasSize.h) return true 

        return this.pipelines.some(pipeline => {
            return (
                this.bird.birdSpecs.pos.x + this.bird.birdSpecs.size.w >= pipeline.pipelineSpecs.pos.x 
                // this.bird.birdSpecs.pos.y + this.bird.birdSpecs.size.h >= pipeline.pipelineSpecs.pos.y && 
                // this.bird.birdSpecs.pos.x <= pipeline.pipelineSpecs.pos.x + pipeline.pipelineSpecs.size.w
            )
        })

    },

    gameOver() {
        clearInterval(this.interval)
    }

}