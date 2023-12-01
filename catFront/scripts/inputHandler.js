import { moka, aslan } from './spriteManager';
import { KEY_CODES } from '../utils/constants';
import { app } from './app';

let keys = {};

export function setupInputHandling() {
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
}

function onKeyDown(e) {
    keys[e.keyCode] = true;
}

function onKeyUp(e) {
    keys[e.keyCode] = false;
}

export function updateSprites() {
    let speed = 5;

    // Update Moka Pos
    if (keys[KEY_CODES.UP]) {
        moka.y -= speed;
    }
    if (keys[KEY_CODES.DOWN]) {
        moka.y += speed;
    }
    if (keys[KEY_CODES.LEFT]) { 
        moka.x -= speed;
    }
    if (keys[KEY_CODES.RIGHT]) {
        moka.x += speed;
    }

    // Update Aslan Pos
    if (keys[KEY_CODES.Z]) { 
        aslan.y -= speed;
    }
    if (keys[KEY_CODES.S]) { 
        aslan.y += speed;
    }
    if (keys[KEY_CODES.Q]) { 
        aslan.x -= speed;
    }
    if (keys[KEY_CODES.D]) { 
        aslan.x += speed;
    }

    moka.x = Math.max(moka.width / 2, Math.min(app.screen.width - moka.width / 2, moka.x));
    moka.y = Math.max(moka.height / 2, Math.min(app.screen.height - moka.height / 2, moka.y));

    aslan.x = Math.max(aslan.width / 2, Math.min(app.screen.width - aslan.width / 2, aslan.x));
    aslan.y = Math.max(aslan.height / 2, Math.min(app.screen.height - aslan.height / 2, aslan.y));


}