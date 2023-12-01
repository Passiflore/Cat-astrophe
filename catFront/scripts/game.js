import { setupSprites } from './spriteManager';
import { setupInputHandling, updateSprites } from './inputHandler';
import { positionBonusRandomly } from './bonusManager';
import { app } from './app'

export function startGame() {
    setupSprites();
    setupInputHandling();

    app.ticker.add((delta) => {
        updateSprites();

    });

    setInterval(positionBonusRandomly, 5000);
}