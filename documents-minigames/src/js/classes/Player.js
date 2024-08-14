class Player {
    constructor(props) {
        this.width = props.width
        this.height = props.height
        this.speed = props.speed
        this.color = props.color
        this.position = {
            X: props.position.X,
            Y: props.position.Y
        }
        this.velocity = {
          X: 0,
          Y: 0,
        }
        this.heightJump = 500
        this.gravity = 0.5
    }



    movement(direction) {
        switch (direction) {
          case "ArrowUp":
            this.velocity.Y = -Math.sqrt(2 * this.gravity * this.heightJump)
            break
          case "ArrowLeft":
            this.velocity.X = -1
            break
          case "ArrowRight":
            this.velocity.X = +1
            break
          default:
            break
        }
    }

    update() {
      const ground = canvas.height - this.height

      this.velocity.Y += this.gravity
      this.position.X += this.velocity.X
      this.position.Y += this.velocity.Y

      if (player.position.Y > ground) {
        this.position.Y = ground
      }
    }

    create() {
        board.fillStyle = this.color
        board.fillRect(this.position.X, this.position.Y, this.width, this.height)
    }
}