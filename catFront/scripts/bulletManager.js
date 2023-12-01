import * as PIXI from 'pixi.js';
import {createProjectile} from './spriteManager';

let projectiles = [];

let numberProjectile = 1000;

export function shootProjectile(app, fromSprite, direction) {

    if (numberProjectile >0) {
        const projectile = createProjectile();
        projectile.position.set(fromSprite.x, fromSprite.y);
        app.stage.addChild(projectile);
        projectiles.push(projectile);
    
        console.log(direction)
    
        projectile.direction = direction || { x: 0, y: 0 };
        projectiles.push(projectile);

        numberProjectile--;

    }
}

let testCompteur = 0

// Appelé dans la boucle de mise à jour (ticker) de l'application
export function updateProjectiles(app) {
    projectiles.forEach((projectile, index) => {
        const speed = 5;
        projectile.x += projectile.direction.x * speed;
        projectile.y += projectile.direction.y * speed;

        // Collision avec les bords gauche et droit
        if (projectile.x <= 0 || projectile.x >= app.screen.width) {
            console.log(testCompteur)
            if(testCompteur > 1){
                app.stage.removeChild(projectile);
                projectiles.splice(index, 1);
                testCompteur = 0
            }else {
                projectile.direction.x *= -1;  // Inverser la direction en X
                testCompteur = ++testCompteur
            }
        }

        // Collision avec les bords supérieur et inférieur
        if (projectile.y <= 0 || projectile.y >= app.screen.height) {
            if(testCompteur > 1){
                app.stage.removeChild(projectile);
                projectiles.splice(index, 1);
                testCompteur = 0
            }else{
                projectile.direction.y *= -1;  // Inverser la direction en Y
                testCompteur = ++testCompteur
            }
        }

        // if (projectile.x > app.screen.width) {
        //     app.stage.removeChild(projectile);
        //     projectiles.splice(index, 1);
        // }
    });
}