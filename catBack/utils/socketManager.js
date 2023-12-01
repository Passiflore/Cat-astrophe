const { gameState, initialState } = require("./gameState.js");

function resetPlayerState(playerId) {
  if (gameState.moka.player === playerId) {
    gameState.moka = { ...initialState.moka };
  } else if (gameState.aslan.player === playerId) {
    gameState.aslan = { ...initialState.aslan };
  }
}

module.exports = { resetPlayerState };
