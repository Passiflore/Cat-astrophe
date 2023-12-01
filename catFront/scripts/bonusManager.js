import * as PIXI from 'pixi.js';
import { app } from './app'
import { bonus } from './spriteManager';

export function positionBonusRandomly() {

    const padding = 20; // Pour éviter de placer le bonus trop près des bords
    const x = Math.random() * (app.screen.width - padding * 2) + padding;
    const y = Math.random() * (app.screen.height - padding * 2) + padding;


    bonus.x = x;
    bonus.y = y;
    bonus.visible = true; // Rendre le bonus visible
    
}