import LifeStats from '../src/lifestats.js';

describe('LifeStats', () => {

  test('should correctly create life-stats object from inputted Earth age and life expectancy', () => {
    const statsOnEarth = new LifeStats(25, 75);
    expect(statsOnEarth.age).toEqual(25);
    expect(statsOnEarth.lifespan).toEqual(75);
  })

  test('should correctly determine remaining Earth years from inputted Earth age and life expectancy', () => {
    const earthYears = new LifeStats(25, 75);
    expect(earthYears.lastOnEarth()).toEqual(50);
  })

  test('should correctly determine remaining Mercury years from inputted Earth age and life expectancy', () => {
    const earthYears = new LifeStats(25, 75);
    expect(earthYears.lastOnMercury()).toEqual(12);
  })

  test('should correctly determine remaining Venus years from inputted Earth age and life expectancy', () => {
    const earthYears = new LifeStats(25, 75);
    expect(earthYears.lastOnVenus()).toEqual(31);
  })

  test('should correctly determine remaining Mars years from inputted Earth age and life expectancy', () => {
    const earthYears = new LifeStats(25, 75);
    expect(earthYears.lastOnMars()).toEqual(31);
  })

})

