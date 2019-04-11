function Game() {
  this.score = 0
}

Game.prototype.roll = function(pins) {
  this.score += pins
};

Game.prototype.getScore = function() {
  return this.score
};
