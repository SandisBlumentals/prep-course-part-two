/**
 * Manage a game player's High Score list.
 *
 * Your task is to build a high-score component of the classic Frogger game, one of the highest selling and addictive games of all time, and a classic of the arcade era. Your task is to write methods that return the highest score from the list, the last added score and the three highest scores.
 */

class HighScores {
  scores: number[];
  constructor(scores: number[]) {
    this.scores = scores;
  }

  get latest() {
    var latestScore = this.scores[this.scores.length-1]
    return latestScore;
  }

  get personalBest() {
    var bestValue = 0;
    for (var i = 0; i < this.scores.length; i++){
      if (this.scores[i]>=bestValue) {
        bestValue = this.scores[i];
      }
    }
    return bestValue;
  }

  get personalTopThree() {
    var firstValue = 0;
    var secondValue = 0;
    var thirdValue = 0;
    for (var i = 0; i < this.scores.length; i++){
      if (this.scores[i] >= firstValue) {
        thirdValue = secondValue;
        secondValue = firstValue;
        firstValue = this.scores[i];
      }
      else if (this.scores[i] >= secondValue) {
        thirdValue = secondValue;
        secondValue = this.scores[i];
      }
      else if (this.scores[i] >= thirdValue) {
        thirdValue = this.scores[i];
      }
    }
    switch (this.scores.length) {
      case 1:
        return [firstValue];
      case 2:
        return [firstValue,secondValue];
      default:
        return [firstValue,secondValue,thirdValue];
    }
  }
}

export { HighScores };
