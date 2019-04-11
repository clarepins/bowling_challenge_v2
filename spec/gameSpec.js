describe('Game', function () {

  var game;

  beforeEach(function() {
    game = new Game()
  });

  it('gutter game scores zero', function() {
    for(var i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.getScore()).toEqual(0)
  });

  it('a game of all 1s scores 20', function() {
    for(var i = 0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.getScore()).toEqual(20)
  });

});
