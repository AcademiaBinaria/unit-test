import { HammingCalculator } from './hamming-dna';

/*
FEATURE:    Calculate the Hamming Distance between two DNA strands.
As a:       biologist studying cell divisions
I want to:  compare two strands of DNA and count the differences between them
So:         I can see how many mistakes occurred.
*/

// Scenario: we have two valid sequences of equal length
describe('GIVEN: a Hamming Calculator that receives two valid strings', () => {
  // Arrange
  const sut = new HammingCalculator();
  describe('WHEN: I compare two empty strands', () => {
    const input = ['', ''];
    // Act
    const actual = sut.compare(...input);
    test('THEN: should return cero', () => {
      const expected = 0;
      // assert
      expect(actual).toEqual(expected);
    });
  });
  describe('WHEN: I compare two single letter identical strands', () => {
    const input = ['A', 'A'];
    // Act
    const actual = sut.compare(...input);
    test('THEN: should return cero', () => {
      const expected = 0;
      // assert
      expect(actual).toEqual(expected);
    });
  });
  describe('WHEN: I compare two single letter different strands', () => {
    const input = ['G', 'T'];
    // Act
    const actual = sut.compare(...input);
    test('THEN: should return one', () => {
      const expected = 1;
      // assert
      expect(actual).toEqual(expected);
    });
  });
  describe('WHEN: I compare two long identical strands', () => {
    const input = ['ACGT', 'ACGT'];
    // Act
    const actual = sut.compare(...input);
    test('THEN: should return cero', () => {
      const expected = 0;
      // assert
      expect(actual).toEqual(expected);
    });
  });
  describe('WHEN: I compare two long different strands', () => {
    const input = ['ACGT', 'TGCA'];
    // Act
    const actual = sut.compare(...input);
    test('THEN: should return more than cero', () => {
      const expected = 0;
      // assert
      expect(actual).toBeGreaterThan(expected);
    });
    test('AND THEN: should return less than or equal of strands length', () => {
      const expected = 4;
      // assert
      expect(actual).toBeLessThanOrEqual(expected);
    });
    test('AND THEN: should return exactly the difference', () => {
      const expected = 4;
      // assert
      expect(actual).toEqual(expected);
    });
  });
});

// Scenario: we have two invalid sequences of different lengths
describe('GIVEN: a Hamming Calculator with a that receives two invalid strings', () => {
  // Arrange
  const sut = new HammingCalculator();
  describe('WHEN: the first strand is longer', () => {
    const input = ['A', ''];
    const actual = () => sut.compare(...input);
    test('THEN: should throw an error', () => {
      expect(actual) //Act
        .toThrow(); // assert
    });
  });
  describe('WHEN: the second strand is longer', () => {
    const input = ['A', 'AC'];
    const actual = () => sut.compare(...input);
    test('THEN: should throw an error', () => {
      expect(actual) //Act
        .toThrow(); // assert
    });
  });
});
