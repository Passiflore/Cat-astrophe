const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const { PLAYER } = require("./utils/constant.js");
const {
  gameState,
  updateGameState,
  initialState,
} = require("./utils/gameState.js");
const { resetPlayerState } = require("./utils/socketManager.js");

// SERVER
const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    method: ["GET", "POST"],
  },
});

function updateAllClients() {
  io.emit("game-update", gameState);
}

// GAME
let playerCount = 0;

io.on("connection", (socket) => {
  console.log("New client connected");
  if (playerCount === 0) {
    updateGameState({
      moka: { pos: { x: 100, y: 100 }, catName: null, player: null },
      aslan: { pos: { x: 250, y: 250 }, catName: null, player: null },
    });
  }

  // Assign a player is player number
  playerCount++;

  if (playerCount === 1) {
    gameState.moka.player = socket.id;
  } else {
    gameState.aslan.player = socket.id;
  }

  socket.emit("assign-player", {
    player: PLAYER[playerCount],
    gameState: gameState,
  });

  /*  socket.on("action", (data) => {
    io.emit("updateSprites", { player: PLAYER[playerCount], action: data });
  }); */

  socket.on("disconnect", (reason, details) => {
    console.log(details);
    console.log("Client disconnected");
    playerCount--;

    resetPlayerState(socket.id);
    updateAllClients();
  });

  io.emit("game-update", gameState);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
