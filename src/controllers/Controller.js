import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import Parser from '../utils/Parser.js';

class Controller {
  static async run() {
    const cars = await InputView.carInput();
    const car = Parser.parsingCar(cars);
    const time = await InputView.timeInput();
    OutputView.print('실행 결과\n');
  }
}

export default Controller;
