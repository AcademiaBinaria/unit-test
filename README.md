# Unit Test

Unit testing JS modules using Jest.

```terminal
npm i
npm t
```

## Test after code

## TDD Test before code


### Snippet

```javascript
describe('GIVEN: an scenario', () => {
  beforeEach(() => {
    // Arrange
    const sut = null;
  });
  describe('WHEN: user action or event occurs', () => {
    const input = null;
    //Act
    const actual = null;
    test('THEN: should been verified', () => {
      // assert
      const expected = null;
      expect(actual).toEqual(expected);
    });
  });
});
```

### VS Code recommended extensions

- orta.vscode-jest
- dbaeumer.vscode-eslint
- esbenp.prettier-vscode
