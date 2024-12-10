import { Random } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  moveCar() {
    this.distance += 1;
  }

  static race(players) {
    players.forEach(player => {
      const canMove = Random.pickNumberInRange(0, 9);
      if (canMove >= 4) {
        player.moveCar();
      }
    });
  }
}

export default Car;
