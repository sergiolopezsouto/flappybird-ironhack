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
        if (code === 'Space') this.createBird()
        }
    },

    start() {
        setInterval(() => {
            this.clearAll()
            this.drawBird()
            // this.clearBalls()     // en nuestro caso lo que tendrá que limpiar son las pipelines y los powerups que van desapareciendo
        }, 10)
    },

    createBird() {
        this.bird = new Bird(this.ctx, this.canvasSize)
    },
    drawBird() {
        this.bird.draw()
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },


    // no nos hace falta en principio
    drawAll() {
        this.balls.forEach(elm => elm.draw())
        console.log(this.balls.length)
    },
    clearBalls() {
        this.balls = this.balls.filter(eachBall => eachBall.ballSpecs.pos.x > 0)
    }

}