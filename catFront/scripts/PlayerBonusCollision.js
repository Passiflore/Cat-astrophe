
let bonusCount = 0;
export function PlayerBonusCollision (player, bonus) {
    
    if(!bonus.visible){
        return
    }

    const playerBounds = player.getBounds();
    const bonusBounds = bonus.getBounds();

    if (playerBounds.x < bonusBounds.x + bonusBounds.width &&
        playerBounds.x + playerBounds.width > bonusBounds.x &&
        playerBounds.y < bonusBounds.y + bonusBounds.height &&
        playerBounds.y + playerBounds.height > bonusBounds.y) {
        bonusCount++;

        bonus.visible = false;
    }

}


export { bonusCount };