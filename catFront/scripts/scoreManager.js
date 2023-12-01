import * as PIXI from 'pixi.js';
import { app } from './app'

export function createScoreDisplay() {
    let playerScore = 0;
    let aiScore = 0;
    let scoreText = new PIXI.Text(`Player 1 : ${playerScore}   Player 2 : ${aiScore}`, {fontFamily : 'Arial', fontSize: 24, fill : 0xffffff, align : 'center'});
    scoreText.x = app.screen.width / 2;
    scoreText.y = 20;
    app.stage.addChild(scoreText);

    return scoreText;
}

export function updateScore(scoreText, playerScore, aiScore) {
    scoreText.text = `Player: ${playerScore}   AI: ${aiScore}`;
}

