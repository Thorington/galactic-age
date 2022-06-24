import Age from './../src/ages.js';

describe('Age', () => {

  test('should correctly create an age object with inputted Earth age', () => {
    const earthAge = new Age(25);
    expect(earthAge.age).toEqual(25);
  })

  test('should correctly determine age in Mercury years given age in Earth years', () => {
    const earthAge = new Age(25);
    expect(earthAge.Mercurify).toEqual(25);
  })

});