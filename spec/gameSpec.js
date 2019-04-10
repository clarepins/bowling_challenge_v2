describe('Game', function () {

  var game;

  beforeEach(function() {
    game = new Game()
  });

  it('gutter game scores zero', function() {
    for(i = 0; i < 20; i++) {
      game.roll(0);
      expect(game.score()).toEqual(0)
    }
  });

});
