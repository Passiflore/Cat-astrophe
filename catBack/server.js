const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const { PLAYER } = require("./utils/constant.js");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    method: ["GET", "POST"],
  },
});

let playerCount = 0;

io.on("connection", (socket) => {
  console.log("New client connected");

  // Assign a player is player number
  playerCount++;
  socket.emit("assign-player", PLAYER[playerCount]);
  socket.on("action", (data) => {
    console.log("action: ", data);
    io.emit("updateSprites", { player: PLAYER[playerCount], action: data });
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
    playerCount--;
  });

  socket.on("event", (data) => {
    console.log("event: ", data);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
