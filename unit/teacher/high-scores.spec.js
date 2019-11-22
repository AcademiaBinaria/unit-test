import { HighScores } from './high-scores';

/*
FEATURE:    Manage a game player's High Score list.
Aa a:       player with an array of scores
I want to:  to get the scores ordered, my last, my best, and my top three scores
So:         I can track my progress
*/

// Scenario: I have a lot of scores
describe('GIVEN: a HighScores class with a big array of scores', () => {
  // Arrange
  const input = [10, 30, 90, 30, 100, 20, 10, 0, 30, 40, 40, 70, 90, 70];
  const highScores = new HighScores(input);
  describe('WHEN: I ask for the scores', () => {
    //Act
    const actual = highScores.scores;
    test('THEN: should return the list of scores ordered', () => {
      const expected = [100, 90, 90, 70, 70, 40, 40, 30, 30, 30, 20, 10, 10, 0];
      // assert
      expect(actual).toEqual(expected);
    });
  });
  describe('WHEN: I ask for Latest score', () => {
    //Act
    const actual = highScores.latest;
    test('THEN: should return the last one', () => {
      const expected = 70;
      // assert
      expect(actual).toEqual(expected);
    });
  });
  describe('WHEN: I ask for the personal best', () => {
    //Act
    const actual = highScores.personalBest;
    test('THEN: should return the higher ', () => {
      const expected = 100;
      // assert
      expect(actual).toEqual(expected);
    });
  });
  describe('WHEN: I ask for the top three', () => {
    //Act
    const actual = highScores.personalTopThree;
    test('THEN: should return the three higher scores', () => {
      const expected = [100, 90, 90];
      // assert
      expect(actual).toEqual(expected);
    });
  });
});

// Scenario: I have just started with the game
describe('GIVEN: a HighScores class with a small array of scores', () => {
  // Arrange
  const input = [30, 70];
  const highScores = new HighScores(input);
  describe('WHEN: I ask for the top three', () => {
    //Act
    const actual = highScores.personalTopThree;
    test('THEN: should return all the scores', () => {
      const expected = [70, 30];
      // assert
      expect(actual).toEqual(expected);
    });
  });
});
