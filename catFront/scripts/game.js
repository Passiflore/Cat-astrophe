import { setupSprites } from './spriteManager';
import { setupInputHandling, updateSprites } from './inputHandler';
import { positionBonusRandomly } from './bonusManager';
import { app } from './app'
import { updateProjectiles } from './bulletManager';

export function startGame() {
    setupSprites();
    setupInputHandling();

    app.ticker.add((delta) => {
        updateSprites();
        updateProjectiles(app);

    });

    setInterval(positionBonusRandomly, 5000);
}