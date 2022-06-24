import LifeStats from '../src/lifestats.js';

describe('LifeStats', () => {

  test('should correctly create life-stats object from inputted Earth age and life expectancy', () => {
    const statsOnEarth = new LifeStats(25,75);
    expect(statsOnEarth.age).toEqual(25);
    expect(statsOnEarth.lifespan).toEqual(75);
  })

test('should correctly determine remaining Earth years from inputted Earth age and life expectancy', () => {
    const remainingEarthYears = new LifeStats(25,75);
    expect(remainingEarthYears.lastOnEarth()).toEqual(50);
  })
  
  })

