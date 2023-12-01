import * as PIXI from "pixi.js";

export const app = new PIXI.Application({
  background: "#1099bb",
  resizeTo: window,
});
export function setupApp() {
  document.body.appendChild(app.view);
}
