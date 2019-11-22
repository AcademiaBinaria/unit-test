import { ExchangeCalculator } from './exchange-calculator';
/*
FEATURE:    Convert an amount from one currency to another
As a:       money investor
I want to:  know the value of any currency at a given time
So:         I can buy or sell money.
*/

// Scenario: form euros to dollars at the last exchange rate
describe('GIVEN: a ExchangeCalculator', () => {
  // Arrange
  const sut = new ExchangeCalculator();
  describe('WHEN: we convert 1000 EUR to USD', () => {
    const input = [1000, 'EUR', 'USD'];
    //Act
    const actual = sut.convert(input);
    test('THEN: expect to get 1200', () => {
      const expected = 1200;
      // assert
      expect(actual).toEqual(expected);
    });
  });
});
