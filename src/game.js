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
    counter: 0,
    mode: 'medium',
    pipeFreq: 200,
    powerups: [],
    powerdowns: [],

    init() {
        this.setContext()
        this.setDimensions()
        this.setEventListeners()
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

        this.interval = setInterval(() => {

            this.framesCounter > 5000 ? this.framesCounter = 0 : this.framesCounter++

            this.clearAll()
            this.drawAll()

            
            if (this.onGame) {
                this.drawPipelines()
                this.createPipelines()
                this.clearPipelines()
                
                this.drawPowerdowns()
                this.createPowerdowns()
                this.clearPowerdowns()
                
                this.drawPowerups()
                this.createPowerups()
                this.clearPowerups()
                
                // this.counting()
                // this.addingScore(this.check)
                // console.log(this.counter)
                
            }

            console.log(this.bird.birdSpecs.pos.y)

            if (this.isCollision()){
                this.gameOver()
                console.log(this.bird.birdSpecs.pos.y)
                console.log(this.pipelines[0].pipelineSpecs.size.height)
                // console.log(this.pipelines[1].pipelineSpecs.size.height)
            } 

            if (this.takePowerup()) {
                if (this.mode === 'hard') {
                    this.mode = 'medium'
                    this.pipeFreq = 200
                }                
                if (this.mode === 'medium') {
                    this.mode = 'easy'
                    this.pipeFreq = 250
                }                
            }

            if (this.takePowerdown()) {
                if (this.mode === 'easy') {
                    this.mode = 'medium'
                    this.pipeFreq = 200
                }                
                if (this.mode === 'medium') {
                    this.mode = 'hard'
                    this.pipeFreq = 150
                }
            }

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
        if (this.framesCounter % this.pipeFreq === 0) {
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

    createPowerups() {
        // const freq = Math.random() * 3000 // para apariciones aleatorias de los powerups
        if (this.framesCounter % 1600 === 0) {
            this.powerups.push(new Powerup(this.ctx, this.canvasSize))
        }
    },

    drawPowerups() {
        this.powerups.forEach(powerup => powerup.draw())
    },

    clearPowerups() {
        this.powerups = this.powerups.filter(powerup => powerup.powerupSpecs.pos.x >= 0 - powerup.powerupSpecs.size.width)
    },

    takePowerup() {
        return this.powerups.some(powerup => {
            if (
                // condicion eje x
                this.bird.birdSpecs.pos.x + this.bird.birdSpecs.size.w >= powerup.powerupSpecs.pos.x && 
                this.bird.birdSpecs.pos.x <= powerup.powerupSpecs.pos.x + powerup.powerupSpecs.size.width && 

                // condicion eje y 
                this.bird.birdSpecs.pos.y + this.bird.birdSpecs.size.h >= powerup.powerupSpecs.pos.y && 
                this.bird.birdSpecs.pos.y <= powerup.powerupSpecs.pos.y + powerup.powerupSpecs.size.height 
            ) {
                const aux = powerup
                this.powerups = this.powerups.filter(p => p!== aux)
                return true
            }
        })

    },

// ---------------------------------------------------------------------------------------------------------------------------------------------------

    createPowerdowns() {
        if (this.framesCounter % 1300 === 0) {
            this.powerdowns.push(new Powerdown(this.ctx, this.canvasSize))
        }
    },

    drawPowerdowns() {
        this.powerdowns.forEach(powerdown => powerdown.draw())
    },

    clearPowerdowns() {
        this.powerdowns = this.powerdowns.filter(powerdown => powerdown.powerdownSpecs.pos.x >= 0 - powerdown.powerdownSpecs.size.width)
    },
    
    takePowerdown() {
        return this.powerdowns.some(powerdown => {
            if (
                // condicion eje x
                this.bird.birdSpecs.pos.x + this.bird.birdSpecs.size.w >= powerdown.powerdownSpecs.pos.x && 
                this.bird.birdSpecs.pos.x <= powerdown.powerdownSpecs.pos.x + powerdown.powerdownSpecs.size.width && 

                // condicion eje y 
                this.bird.birdSpecs.pos.y + this.bird.birdSpecs.size.h >= powerdown.powerdownSpecs.pos.y && 
                this.bird.birdSpecs.pos.y <= powerdown.powerdownSpecs.pos.y + powerdown.powerdownSpecs.size.height 
            ) { 
                const aux = powerdown
                this.powerdowns = this.powerdowns.filter(p => p!==aux)
                return true 
            }    
  
        })
    },

// ---------------------------------------------------------------------------------------------------------------------------------------------------


    // counting() {
    //     this.pipelines.forEach(pipeline => {
    //         if (this.bird.birdSpecs.pos.x === pipeline.pipelineSpecs.pos.x + pipeline.pipelineSpecs.size.width) {
    //             return true
    //         }
    //     })
    // },

    // addingScore(check){
    //     if (check) this.counter++ 
    //     this.check = false

    // },

    isCollision() {
        // colision con el suelo
        if (this.bird.birdSpecs.pos.y + this.bird.birdSpecs.size.h > this.canvasSize.h) return true 

        // colision con tuberías 
        return this.pipelines.some(pipeline => {
            return (
                // condicion eje x
                this.bird.birdSpecs.pos.x + this.bird.birdSpecs.size.w >= pipeline.pipelineSpecs.pos.x && 
                this.bird.birdSpecs.pos.x <= pipeline.pipelineSpecs.pos.x + pipeline.pipelineSpecs.size.width &&

                // condicion eje y (espacio entre tuberias)
                (this.bird.birdSpecs.pos.y <= pipeline.pipelineSpecs.size.height || 
                this.bird.birdSpecs.pos.y + this.bird.birdSpecs.size.h >= pipeline.pipelineSpecs.size.height + pipeline.pipelineSpecs.spaceBetween)
            )
        })

    },

    gameOver() {
        clearInterval(this.interval)
    }

}