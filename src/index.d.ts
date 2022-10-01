class Keyboard {
  clear: () => void
  update: () => void
  isKeyUp: (...args: string[]) => boolean
  isKeyDown: (...args: string[]) => boolean
  isKeyPressed: (...args: string[]) => boolean
  isKeyReleased: (...args: string[]) => boolean
}

declare module 'pixi.js-keyboard' {
  export default new Keyboard()
}
