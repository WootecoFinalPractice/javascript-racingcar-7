import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class Controller {
  static async run() {
    const car = await InputView.carInput();
    const time = await InputView.timeInput();
    OutputView.print('실행 결과\n');
  }
}

export default Controller;
