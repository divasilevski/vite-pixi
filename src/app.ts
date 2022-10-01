import * as PIXI from 'pixi.js'

import ImageLoader from './core/loaders/ImageLoader'
import Hero from './core/models/Hero'

ImageLoader({
  hero: 'https://i.ibb.co/mDMKpQx/pixeldude.png',
})

export function setupApp(element: Element) {
  const app = new PIXI.Application({ backgroundColor: 0x1099bb })

  const resizeWindow = () => {
    app.renderer.resize(window.innerWidth, window.innerHeight)
  }
  window.addEventListener('resize', resizeWindow)
  resizeWindow()

  element.appendChild(app.view)

  PIXI.Loader.shared.load(() => Hero(app))
}
