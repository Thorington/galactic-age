import LifeStats from '../src/lifestats.js';

describe('LifeStats', () => {

  test('should correctly create life-stats object from inputted Earth age and life expectancy', () => {
    const statsOnEarth = new LifeStats(25, 75);
    expect(statsOnEarth.age).toEqual(25);
    expect(statsOnEarth.lifespan).toEqual(75);
  })

//EARTH

  test('should correctly determine remaining Earth years from inputted Earth age and life expectancy', () => {
    const earthYears = new LifeStats(25, 75);
    expect(earthYears.lastOnEarth()).toEqual("You are 25 years old on Earth. You have approximately 50 Earth years left, if all goes well!");
  })

  test('should correctly determine remaining Earth years from inputted Earth age and life expectancy, if inputted age is older than life expectancy', () => {
    const earthYears = new LifeStats(85, 75);
    expect(earthYears.lastOnEarth()).toEqual("You are 85 years old on Earth. You've lived 10 Earth years past your life expectancy!");
  })

//MERCURY

  test('should correctly determine remaining Mercury years from inputted Earth age and life expectancy', () => {
    const earthYears = new LifeStats(25, 75);
    expect(earthYears.lastOnMercury()).toEqual("You are 6 years old on Mercury. You have approximately 12 Mercury years left, if all goes well!");
  })

  test('should correctly determine remaining Mercury years from inputted Earth age and life expectancy, if inputted age is older than life expectancy', () => {
    const earthYears = new LifeStats(85, 75);
    expect(earthYears.lastOnMercury()).toEqual("You are 20.4 years old on Mercury. You've lived 2.4 Mercury years past your life expectancy!");
  })

  //VENUS

  test('should correctly determine remaining Venus years from inputted Earth age and life expectancy', () => {
    const earthYears = new LifeStats(25, 75);
    expect(earthYears.lastOnVenus()).toEqual("You are 15.5 years old on Venus. You have approximately 31 Venus years left, if all goes well!");
  })

  test('should correctly determine remaining Venus years from inputted Earth age and life expectancy, if inputted age is older than life expectancy', () => {
    const earthYears = new LifeStats(85, 75);
    expect(earthYears.lastOnVenus()).toEqual("You are 52.7 years old on Venus. You've lived 6.2 Venus years past your life expectancy!");
  })

//MARS

  test('should correctly determine remaining Mars years from inputted Earth age and life expectancy', () => {
    const earthYears = new LifeStats(25, 75);
    expect(earthYears.lastOnMars()).toEqual(94);
  })

//JUPITER

  test('should correctly determine remaining Jupiter years from inputted Earth age and life expectancy', () => {
    const earthYears = new LifeStats(25, 75);
    expect(earthYears.lastOnJupiter()).toEqual(593);
  })

})

