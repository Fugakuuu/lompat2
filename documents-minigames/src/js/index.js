const canvas = document.querySelector("canvas")
const board = canvas.getContext("2d") 

canvas.width = DISPLAY_PIXEL.WIDTH * ASPECT_RATIO.WIDTH
canvas.height = DISPLAY_PIXEL.HEIGHT * ASPECT_RATIO.HEIGHT

const playerProperty = {
    width: 50,
    height: 50,
    speed: 1,
    color: "red",
    position: {
        X: 150,
        Y: canvas.height - 50
    }
}

const enemyProperty = {
    width: 50,
    height: 50,
    speed: 1,
    color: "blue",
    position: {
        X: canvas.width - 200,
        Y: canvas.height - 50
    }  
}

const ground = new Ground(canvas.width, canvas.height, "lightblue")
const player = new Player(playerProperty)
const enemy = new Player(enemyProperty)

ground.create()


function animate() {
    ground.create()
    player.create()
    enemy.create()

    player.update()
    enemy.update()

    window.requestAnimationFrame(animate)
}

window.addEventListener("keydown", function(callback) {
    player.movement(callback.key)
})

animate()