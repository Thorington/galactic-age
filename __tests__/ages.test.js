import Age from './../src/ages.js';

describe('Age', () => {

  test('should correctly create an age object with inputted Earth age', () => {
    const earthAge = new Age(25);
    expect(earthAge.age).toEqual(25);
  })

});