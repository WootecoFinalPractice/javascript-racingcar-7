import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import Parser from '../utils/Parser.js';
import Car from '../models/Car.js';

class Controller {
  static async run() {
    const cars = await InputView.carInput();
    const car = Parser.parsingCar(cars);
    const player = [];
    for (let i = 0; i < car.length; i += 1) {
      player.push(new Car(car[i]));
    }
    console.log(player);
    const time = await InputView.timeInput();
    // Car.race(time);
    OutputView.print('실행 결과\n');
  }
}

export default Controller;
