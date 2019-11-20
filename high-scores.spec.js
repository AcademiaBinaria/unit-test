import { HighScores } from './high-scores';

// Feature: the app should allow me to create new tasks
// As a user
// I want to create new tasks
// In order to do my work
// Scenario: I am on the project list page
// Given I have a list of projects
// When I click on one of them
// Then I should navigate to this project page

/*
Manage a game player's High Score list.

Your task is to build a high-score component of the classic Frogger game,
one of the highest selling and addictive games of all time, and a classic of the arcade era.
Your task is to write methods that return the highest score from the list,
the last added score and the three highest scores.
*/

// Arrange
// Act
// Assert
// After

describe('GIVEN: a HighScores class', () => {
  // Arrange
  const input = [30, 50, 20, 70];
  const hs = new HighScores(input);
  describe('WHEN: I send an array of scores', () => {
    test('THEN: should return the list o f scores', () => {
      expect(hs.scores) // act
        .toEqual([30, 50, 20, 70]); // assert
    });
  });
});

describe('High Scores Test Suite', () => {
  test('List of scores', () => {
    const input = [30, 50, 20, 70];
    expect(new HighScores(input).scores).toEqual([30, 50, 20, 70]);
  });

  test('Latest score', () => {
    const input = [100, 0, 90, 30];
    expect(new HighScores(input).latest).toEqual(30);
  });

  test('Personal best', () => {
    const input = [40, 100, 70];
    expect(new HighScores(input).personalBest).toEqual(100);
  });

  test('Personal top three from a list of scores', () => {
    const input = [10, 30, 90, 30, 100, 20, 10, 0, 30, 40, 40, 70, 70];
    expect(new HighScores(input).personalTopThree).toEqual([100, 90, 70]);
  });

  test('Personal top highest to lowest', () => {
    const input = [20, 10, 30];
    expect(new HighScores(input).personalTopThree).toEqual([30, 20, 10]);
  });

  test('Personal top when ther eis a tie', () => {
    const input = [40, 20, 40, 30];
    expect(new HighScores(input).personalTopThree).toEqual([40, 40, 30]);
  });

  test('Personal top when there are less than 3', () => {
    const input = [30, 70];
    expect(new HighScores(input).personalTopThree).toEqual([70, 30]);
  });

  test('Personal top when there is only one', () => {
    const input = [40];
    expect(new HighScores(input).personalTopThree).toEqual([40]);
  });
});
