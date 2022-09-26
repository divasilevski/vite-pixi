import './style.css'

import { setupPixi } from './pixi'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = ``

setupPixi()
