import * as PIXI from "pixi.js";
import { app } from "./app";
import { localGameState } from "./localGameState";

export const moka = PIXI.Sprite.from("img/moka.png");
export const aslan = PIXI.Sprite.from("img/aslan.png");
export const bonus = PIXI.Sprite.from("img/balle.png");

export function setupSprites() {
  // INIT MOKA
  moka.scale.x = 0.2;
  moka.scale.y = 0.2;
  moka.anchor.set(0.5, 0.5);

  // INIT ASLAN
  aslan.scale.x = 0.2;
  aslan.scale.y = 0.2;
  aslan.anchor.set(0.5, 0.5);

  // INIT BONUS
  bonus.scale.x = 0.1;
  bonus.scale.y = 0.1;

  bonus.anchor.set(0.5, 0.5);
  bonus.visible = false;
  app.stage.addChild(bonus);

  app.stage.addChild(bonus);
}

export function createProjectile() {
  const projectile = PIXI.Sprite.from("img/balle.png");
  projectile.anchor.set(0.5, 0.5);

  projectile.scale.x = 0.05;
  projectile.scale.y = 0.05;

  return projectile;
}
