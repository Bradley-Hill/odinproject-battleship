import { createGameboard } from "../src/gameboard";
import { createPlayer, Player } from "../src/player";

export interface Gameloop {
  startGame: () => void;
  humanPlayer: Player;
  compPlayer: Player;
  manageTurns: () => void;
}

export function createGameLoop(): Gameloop {
  let gameLoop: Gameloop = {
    humanPlayer: createPlayer(true),
    compPlayer: createPlayer(false),
    startGame: function () {
      this.humanPlayer.gameboard = createGameboard(10);
      this.humanPlayer.gameboard.createShips(0, 0, 1, "horizontal");
      this.humanPlayer.gameboard.createShips(0, 1, 1, "horizontal");
      this.humanPlayer.gameboard.createShips(0, 2, 1, "horizontal");

      this.compPlayer.gameboard = createGameboard(10);
      this.compPlayer.gameboard.createShips(0, 0, 1, "horizontal");
      this.compPlayer.gameboard.createShips(0, 1, 1, "horizontal");
      this.compPlayer.gameboard.createShips(0, 2, 1, "horizontal");
    },
    manageTurns: function () {
      this.humanPlayer.toggleTurn();
      this.compPlayer.toggleTurn();
    },
  };
  return gameLoop;
}
