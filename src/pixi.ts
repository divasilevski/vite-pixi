import * as PIXI from "pixi.js";

export function setupPixi() {
  const app = new PIXI.Application();
  document.body.appendChild(app.view);

  const bunny = PIXI.Sprite.from("x.webp");

  bunny.x = app.renderer.width / 2;
  bunny.y = app.renderer.height / 2;
  bunny.anchor.x = 0.5;
  bunny.anchor.y = 0.5;

  app.stage.addChild(bunny);

  app.ticker.add(() => {
    bunny.rotation += 0.01;
  });
}
