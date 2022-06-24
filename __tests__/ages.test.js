import Age from './../src/ages.js';

describe('Age', () => {

  test('should correctly create an age object with inputted Earth age', () => {
    const earthAge = new Age(25);
    expect(earthAge.age).toEqual(25);
  })

  test('should correctly determine age in Mercury years given age in Earth years', () => {
    const earthAge = new Age(25);
    expect(earthAge.mercurify()).toEqual(6);
  })

  test('should correctly determine age in Venus years given age in Earth years', () => {
    const earthAge = new Age(25);
    expect(earthAge.venusify()).toEqual(15.5);
  })

  test('should correctly determine age in Mars years given age in Earth years', () => {
    const earthAge = new Age(25);
    expect(earthAge.marsify()).toEqual(47);
  })

})