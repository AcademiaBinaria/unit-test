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
  const hs = new HighScores(input);
  describe('WHEN: I ask for the scores', () => {
    //Act
    const scores = hs.scores;
    test('THEN: should return the list of scores ordered', () => {
      // assert
      expect(scores).toEqual([100, 90, 90, 70, 70, 40, 40, 30, 30, 30, 20, 10, 10, 0]);
    });
  });
  describe('WHEN: I ask for Latest score', () => {
    //Act
    const latest = hs.latest;
    test('THEN: should return the last one', () => {
      // assert
      expect(latest).toEqual(70);
    });
  });
  describe('WHEN: I ask for the personal best', () => {
    //Act
    const personalBest = hs.personalBest;
    test('THEN: should return the higher ', () => {
      // assert
      expect(personalBest).toEqual(100);
    });
  });
  describe('WHEN: I ask for the top three', () => {
    //Act
    const personalTopThree = hs.personalTopThree;
    test('THEN: should return the three higher scores', () => {
      // assert
      expect(personalTopThree).toEqual([100, 90, 90]);
    });
  });
});

// Scenario: I have just started with the game
describe('GIVEN: a HighScores class with a small array of scores', () => {
  // Arrange
  const input = [30, 70];
  const hs = new HighScores(input);
  describe('WHEN: I ask for the top three', () => {
    //Act
    const personalTopThree = hs.personalTopThree;
    test('THEN: should return all the scores', () => {
      // assert
      expect(personalTopThree).toEqual([70, 30]);
    });
  });
});
