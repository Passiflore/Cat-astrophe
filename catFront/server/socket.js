import io from "socket.io-client";
import { app } from "../scripts/app.js";
import { updateSprites } from "../scripts/inputHandler.js";
import {
  moka,
  aslan,
  updateOrRemovePlayerSprites,
} from "../scripts/spriteManager.js";
import { localGameState } from "../scripts/localGameState.js";

export const socket = io("http://127.0.0.1:3000");

socket.on("connect", () => {
  console.log("Connecté au serveur");
});

socket.on("disconnect", () => {
  console.log("Déconnecté du serveur");
});

socket.on("assign-player", ({ player, gameState }) => {
  console.log("Vous êtes le joueur: ", player);
  console.log("gameState: ", gameState);
  localStorage.setItem("player", gameState[player].player);

  Object.assign(localGameState, gameState);
});

/* socket.on("updateSprites", (data) => {
  console.log("updateSprites: ", data);
  if (data.player === gameState.localPlayers.sprite) {
    updateSprites(gameState.localPlayers, data.action);
  } else {
    updateSprites(gameState.remotePlayers, data.action);
  }
}); */

socket.on("game-update", (gameState) => {
  console.log("gameState UPDATED: ", gameState);
  Object.assign(localGameState, gameState);

  updateOrRemovePlayerSprites();
});
