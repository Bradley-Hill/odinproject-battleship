import { createGameboard, Gameboard } from "../src/gameboard";

export interface Player {
  isHuman: boolean;
  gameboard: Gameboard;
  name: "Player 1" | "Player 2";
  isMyTurn: boolean;
  makeHumanMove: (x: number, y: number, opponent: Player) => void;
  makeComputerMove: (opponent: Player) => void;
  toggleTurn: () => void;
}

export function createPlayer(isHuman: boolean): Player {
  return {
    isHuman: isHuman,
    gameboard: createGameboard(10),
    name: isHuman ? "Player 1" : "Player 2",
    isMyTurn: isHuman,
    makeHumanMove: function (x: number = 0, y: number = 0, opponent: Player) {
      console.log(x);
      console.log(y);
      opponent.gameboard.receiveAttack(x, y);
    },

    makeComputerMove: function (opponent: Player) {
      const hitCells = opponent.gameboard.getHitCells();

      if (!this.isHuman) {
        let validRandomMove = false;
        let x: number = 0;
        let y: number = 0;
        while (!validRandomMove) {
          x = Math.floor(Math.random() * opponent.gameboard.size);
          y = Math.floor(Math.random() * opponent.gameboard.size);

          const missedShots = opponent.gameboard.getMissedShots();
          const hitCells = opponent.gameboard.getHitCells();
          if (
            !missedShots.some((shot) => shot[0] === x && shot[1] == y) &&
            !hitCells.some((cell) => cell[0] === x && cell[1] === y)
          ) {
            validRandomMove = true;
          }
        }
        opponent.gameboard.receiveAttack(x, y);
      }
      console.log("Computer made a move");
    },
    toggleTurn: function () {
      this.isMyTurn = !this.isMyTurn;
    },
  };
}
