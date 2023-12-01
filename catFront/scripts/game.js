import { aslan, moka, setupSprites } from "./spriteManager";
import { setupInputHandling, updateSprites } from "./inputHandler";
import { positionBonusRandomly } from "./bonusManager";
import { app } from "./app";
import { updateProjectiles } from "./bulletManager";
import { localGameState } from "./localGameState";

export function startGame() {
  setupSprites();
  setupInputHandling();

  app.ticker.add((delta) => {
    updateProjectiles(app);

    if (localGameState.moka && localGameState.aslan && moka && aslan) {
      // Moka Player Update
      moka.x = localGameState.moka.pos.x;
      moka.y = localGameState.moka.pos.y;

      // Alsan Player Update
      aslan.x = localGameState.aslan.pos.x;
      aslan.y = localGameState.aslan.pos.y;
    }
  });

  setInterval(positionBonusRandomly, 5000);
}
