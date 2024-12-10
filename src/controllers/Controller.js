import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import Parser from '../utils/Parser.js';
import Car from '../models/Car.js';
import Win from '../models/Win.js';
import Validate from '../validations/Validate.js';

class Controller {
  static async run() {
    try {
      const cars = await InputView.carInput();
      const car = Parser.parsingCar(cars);
      const players = [];
      for (let i = 0; i < car.length; i += 1) {
        players.push(new Car(car[i]));
      }
      Validate.validateOverLength(players);
      const time = await InputView.timeInput();
      OutputView.print('\n실행 결과\n');
      for (let i = 0; i < time; i += 1) {
        Car.race(players);
        OutputView.printRace(players);
      }
      const result = Win.win(players);
      OutputView.printWinner(result);
    } catch (error) {
      OutputView.print(error);
      throw error;
    }
  }
}

export default Controller;
