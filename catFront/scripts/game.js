import { setupSprites } from './spriteManager';
import { createScoreDisplay } from './scoreManager';
import { setupInputHandling, updateSprites } from './inputHandler';
import { positionBonusRandomly } from './bonusManager';
import { app } from './app'
import { updateProjectiles } from './bulletManager';

export function startGame() {
    setupSprites();
    setupInputHandling();
    createScoreDisplay();

    app.ticker.add((delta) => {
        updateSprites();
        updateProjectiles(app);

    });

    setInterval(positionBonusRandomly, 5000);
}