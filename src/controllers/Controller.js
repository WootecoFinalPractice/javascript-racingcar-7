import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class Controller {
  static async run() {
    const car = await InputView.carInput();
    const time = await InputView.timeInput();
  }
}

export default Controller;
