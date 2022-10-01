import * as PIXI from 'pixi.js'

interface Animations {
  [key: string]: {
    textures: PIXI.Texture[]
    animationSpeed: number
    reverseX?: boolean
  }
}

export default class GameBody extends PIXI.AnimatedSprite {
  private _app
  private _currentAnimation
  private _animations: Animations = {}

  constructor(animations: Animations, app: PIXI.Application) {
    // start animation
    const first = Object.keys(animations)[0]
    super(animations[first].textures)
    this.animationSpeed = animations[first].animationSpeed
    this._currentAnimation = first
    this.play()

    this.addAnimation(animations)
    this._app = app

    // Start settings
    this.scale.set(5, 5)

    this._app.stage.addChild(this)
    this._app.renderer.render(app.stage)

    this.anchor.x = 0.5
    this.anchor.y = 0.5

    this.posCenter()
  }

  posCenter() {
    this.x = this._app.screen.width / 2
    this.y = this._app.screen.height / 2
  }

  addAnimation(anims: Animations) {
    this._animations = Object.assign({}, anims, this._animations)
  }

  playAnimation(name: string) {
    this.textures = this._animations[name].textures
    this.animationSpeed = this._animations[name].animationSpeed
    this._currentAnimation = name

    if (this._animations[name].reverseX !== undefined) {
      if (this._animations[name].reverseX) {
        if (this.scale.x > 0) this.scale.x *= -1
      } else {
        if (this.scale.x < 0) this.scale.x *= -1
      }
    }

    this.play()
  }

  onTick(...cb: ((delta: number) => void)[]) {
    this._app.ticker.add((delta) => {
      ;[...cb].forEach((e) => e(delta))
    })
  }

  get animationName() {
    return this._currentAnimation
  }
}
