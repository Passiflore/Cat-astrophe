import { setupSprites } from './spriteManager';
import { setupInputHandling, updateSprites } from './inputHandler';
import { positionBonusRandomly } from './bonusManager';
import { app } from './app'
import { updateProjectiles } from './bulletManager';
import { PlayerBonusCollision } from './PlayerBonusCollision';
import { moka, aslan, bonus } from './spriteManager';

export function startGame() {
    setupSprites();
    setupInputHandling();

    app.ticker.add((delta) => {
        updateSprites();
        updateProjectiles(app);
        if (bonus.visible) {
            PlayerBonusCollision(moka, bonus);
        }
    });

    setInterval(positionBonusRandomly, 5000);
}