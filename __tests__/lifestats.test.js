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
    expect(earthYears.lastOnEarth()).toEqual("You are 25.0 years old on Earth. You have approximately 50.0 Earth years left, if all goes well!");
  })

  test('should correctly determine remaining Earth years from inputted Earth age and life expectancy, if inputted age is older than life expectancy', () => {
    const earthYears = new LifeStats(85, 75);
    expect(earthYears.lastOnEarth()).toEqual("You are 85.0 years old on Earth. You've lived 10.0 Earth years past your life expectancy!");
  })

//MERCURY

  test('should correctly determine remaining Mercury years from inputted Earth age and life expectancy', () => {
    const earthYears = new LifeStats(25, 75);
    expect(earthYears.lastOnMercury()).toEqual("You are 6.0 years old on Mercury. You have approximately 12.0 Mercury years left, if all goes well!");
  })

  test('should correctly determine remaining Mercury years from inputted Earth age and life expectancy, if inputted age is older than life expectancy', () => {
    const earthYears = new LifeStats(85, 75);
    expect(earthYears.lastOnMercury()).toEqual("You are 20.4 years old on Mercury. You've lived 2.4 Mercury years past your life expectancy!");
  })

  //VENUS

  test('should correctly determine remaining Venus years from inputted Earth age and life expectancy', () => {
    const earthYears = new LifeStats(25, 75);
    expect(earthYears.lastOnVenus()).toEqual("You are 15.5 years old on Venus. You have approximately 31.0 Venus years left, if all goes well!");
  })

  test('should correctly determine remaining Venus years from inputted Earth age and life expectancy, if inputted age is older than life expectancy', () => {
    const earthYears = new LifeStats(85, 75);
    expect(earthYears.lastOnVenus()).toEqual("You are 52.7 years old on Venus. You've lived 6.2 Venus years past your life expectancy!");
  })

//MARS

test('should correctly determine remaining Mars years from inputted Earth age and life expectancy', () => {
  const earthYears = new LifeStats(25, 75);
  expect(earthYears.lastOnMars()).toEqual("You are 47.0 years old on Mars. You have approximately 94.0 Mars years left, if all goes well!");
})

test('should correctly determine remaining Mars years from inputted Earth age and life expectancy, if inputted age is older than life expectancy', () => {
  const earthYears = new LifeStats(85, 75);
  expect(earthYears.lastOnMars()).toEqual("You are 159.8 years old on Mars. You've lived 18.8 Mars years past your life expectancy!");
})

//JUPITER

test('should correctly determine remaining Jupiter years from inputted Earth age and life expectancy', () => {
  const earthYears = new LifeStats(25, 75);
  expect(earthYears.lastOnJupiter()).toEqual("You are 315.3 years old on Jupiter. You have approximately 574.2 Jupiter years left, if all goes well!");
})

test('should correctly determine remaining Jupiter years from inputted Earth age and life expectancy, if inputted age is older than life expectancy', () => {
  const earthYears = new LifeStats(85, 75);
  expect(earthYears.lastOnJupiter()).toEqual("You are 1008.1 years old on Jupiter. You've lived 118.6 Jupiter years past your life expectancy!");
})

})

