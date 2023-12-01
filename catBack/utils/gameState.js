let initialState = {
  moka: { pos: { x: 100, y: 100 }, catName: null, player: null },
  aslan: { pos: { x: 250, y: 250 }, catName: null, player: null },
};

gameState = JSON.parse(JSON.stringify(initialState));

function updateGameState(newState) {
  Object.assign(gameState, newState);
}

module.exports = { gameState, updateGameState, initialState };
