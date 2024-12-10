class Validate {
  static validateOverLength(input) {
    input.forEach(data => {
      console.log(data.name.length);
      if (data.name.length > 5) {
        throw new Error('[ERROR] 오류입니다');
      }
    });
  }
}

export default Validate;
