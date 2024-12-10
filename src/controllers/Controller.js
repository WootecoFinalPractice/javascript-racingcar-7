import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import Parser from '../utils/Parser.js';
import Car from '../models/Car.js';

class Controller {
  static async run() {
    const cars = await InputView.carInput();
    const car = Parser.parsingCar(cars);
    const players = [];
    for (let i = 0; i < car.length; i += 1) {
      players.push(new Car(car[i]));
    }
    console.log(players);
    const time = await InputView.timeInput();
    OutputView.print('실행 결과\n');
    for (let i = 0; i < time; i += 1) {
      Car.race(players);
      OutputView.printRace(players);
    }
  }
}

export default Controller;
