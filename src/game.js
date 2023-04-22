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

    background: undefined,
    bird: undefined,
    pipelines: [],

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
        this.canvasSize.w = window.innerWidth
        this.canvasSize.h = window.innerHeight
        document.querySelector('#myCanvas').setAttribute('width', this.canvasSize.w)
        document.querySelector('#myCanvas').setAttribute('height', this.canvasSize.h)
    },
    setEventListeners() {
        document.onkeydown = ({ code }) => {
            if (code === 'Space'){
                if (this.bird === undefined){
                    this.createBird()
                }  else {
                    this.bird.jump()
                }
            }  
        }
    },

    start() {

        this.createBackground()
        // this.createBird() -> para que el pajaro cargue desde el principio deberiamos crearlo aqui 
     
        setInterval(() => {

            this.framesCounter > 5000 ? this.framesCounter = 0 : this.framesCounter++

            this.clearAll()
            this.drawAll()
            
            this.drawPipelines()
            this.createPipelines()
            this.clearPipelines()

            // this.clearBalls()     // en nuestro caso lo que tendrá que limpiar son las pipelines y los powerups que van desapareciendo
        }, 10)
    },

// ---------------------------------------------------------------------------------------------------------------------------------------------------

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    drawAll(){
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
        if (this.framesCounter % 300 === 0) {
            this.pipelines.push(new Pipeline(this.ctx, this.canvasSize))
        }
    }, 

    drawPipelines() {
        this.pipelines.forEach(pipe => pipe.draw())
    },

    clearPipelines() {
        this.pipelines = this.pipelines.filter(pipe => pipe.pipelineSpecs.pos.x >= 0)
    },

// ---------------------------------------------------------------------------------------------------------------------------------------------------

    // isCollision() {
    //     return this.obstacles.some(obs => {
    //         return (
    //             this.player.posX + this.player.width >= obs.posX &&
    //             this.player.posY + this.player.height >= obs.posY &&
    //             this.player.posX <= obs.posX + obs.width
    //         )
    //     })
    // },

    gameOver() {
        clearInterval(this.interval)
    }

}