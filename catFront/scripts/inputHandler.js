import { moka, aslan } from "./spriteManager";
import { KEY_CODES } from "../utils/constants";
import { app } from "./app";
import { shootProjectile } from "./bulletManager";
import { socket } from "../server/socket";

let keys = {};

let lastShotTime = 0;
const shotCooldown = 500;

export function setupInputHandling() {
  window.addEventListener("keydown", onKeyDown);
  window.addEventListener("keyup", onKeyUp);
}

function onKeyDown(e) {
  keys[e.keyCode] = true;
  socket.emit("action", { action: e.code });

  const currentTime = Date.now();
  if (keys[KEY_CODES.T] && currentTime - lastShotTime > shotCooldown) {
    shootProjectile(app, moka, lastDirection);
    lastShotTime = currentTime;
  }
}

function onKeyUp(e) {
  keys[e.keyCode] = false;
}

let lastDirection = { x: 0, y: 0 };

export function updateSprites(playerState, { action }) {
  let speed = 15;
  const playerPos = playerState.pos;
  console.log("action: ", action);

  if (action === "ArrowUp") {
    playerPos.y -= speed;
  }
  if (action === "ArrowDown") {
    playerPos.y += speed;
  }
  if (action === "ArrowLeft") {
    playerPos.x -= speed;
  }
  if (action === "ArrowRight") {
    console.log("right");
    playerPos.x += speed;
  }

  console.log(playerState);
}
