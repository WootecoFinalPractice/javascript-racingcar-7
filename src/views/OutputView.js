import { Console } from '@woowacourse/mission-utils';

class OutputView {
  static print(input) {
    Console.print(input);
  }

  static printRace(players) {
    players.forEach(player => {
      Console.print(`${player.name} : ${'-'.repeat(player.distance)}`);
    });
    Console.print('');
  }

  static printWinner(result) {
    Console.print(`최종 우승자 : ${result.join(', ')}`);
  }
}

export default OutputView;
