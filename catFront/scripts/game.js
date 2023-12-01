import { aslan, moka, setupSprites } from "./spriteManager";
import { setupSprites } from './spriteManager';
import { setupInputHandling, updateSprites } from './inputHandler';
import { positionBonusRandomly } from './bonusManager';
import { app } from './app'
import { updateProjectiles } from "./bulletManager";
import { localGameState } from "./localGameState";
import { PlayerBonusCollision } from './PlayerBonusCollision';
import { moka, aslan, bonus } from './spriteManager';


export function startGame() {
  setupSprites();
  setupInputHandling();

  app.ticker.add((delta) => {
    updateProjectiles(app);
    if (bonus.visible) {
      PlayerBonusCollision(moka, bonus);
    }

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
