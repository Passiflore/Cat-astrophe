const { gameState, initialState } = require("./gameState.js");

function resetPlayerState(playerId) {
  if (gameState.moka.player === playerId) {
    gameState.moka = { ...initialState.moka };
  } else if (gameState.aslan.player === playerId) {
    gameState.aslan = { ...initialState.aslan };
  }
}

function findPlayer(playerId) {
  for (let playerKey in gameState) {
    if (gameState[playerKey].player === playerId) {
      return gameState[playerKey];
    }
  }
}

function findNewPosition(playerId, direction) {
  let speed = 15;
  const player = findPlayer(playerId);
  console.log("JE SUIS LE PLAYER: ", player);

  const mutablePlayer = { ...player };

  if (direction === "ArrowUp") {
    mutablePlayer.pos.y -= speed;
  }
  if (direction === "ArrowDown") {
    mutablePlayer.pos.y += speed;
  }
  if (direction === "ArrowLeft") {
    mutablePlayer.pos.x -= speed;
  }
  if (direction === "ArrowRight") {
    mutablePlayer.pos.x += speed;
  }

  return mutablePlayer.pos;
}

function updatePlayerPositionById(playerId, direction) {
  const newPosition = findNewPosition(playerId, direction);

  for (let playerKey in gameState) {
    if (gameState[playerKey].player === playerId) {
      gameState[playerKey].pos = newPosition;
      break;
    }
  }
}

module.exports = { resetPlayerState, updatePlayerPositionById };
