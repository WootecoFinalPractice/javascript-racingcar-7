class Win {
  static win(players) {
    const result = [];
    let maxValue = 0;
    players.forEach(player => {
      maxValue = Math.max(player.distance, maxValue);
    });
    players.forEach(player => {
      if (maxValue === player.distance) {
        result.push(player.name);
      }
    });
    return result;
  }
}

export default Win;
