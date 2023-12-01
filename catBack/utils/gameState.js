let initialState = {
  moka: { pos: { x: 100, y: 100 }, catName: "moka", player: null },
  aslan: { pos: { x: 250, y: 250 }, catName: "aslan", player: null },
};

gameState = JSON.parse(JSON.stringify(initialState));

function updateGameState(newState) {
  Object.assign(gameState, newState);
}

module.exports = { gameState, updateGameState, initialState };
