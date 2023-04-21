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
    background: undefined,
    bird: undefined,
    obstacles: [],

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
     
        setInterval(() => {
            this.clearAll()
            this.drawBackground()
            this.drawBird()
            // this.clearBalls()     // en nuestro caso lo que tendrá que limpiar son las pipelines y los powerups que van desapareciendo
        }, 10)
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    createBackground() {
        this.background = new Background(this.ctx, this.canvasSize)
    },

    drawBackground() {
        this.background.draw()
    },

    createBird() {
        this.bird = new Bird(this.ctx, this.canvasSize)
    },
    drawBird() {
        this.bird?.draw()
    }

}