import Lifespan from '../src/lifespan.js';

describe('Lifespan', () => {

  test('should correctly create lifespan object in inputted Earth years', () => {
    const earthLifespan = new Lifespan(76);
    expect(earthLifespan.lifespan).toEqual(76);
  })
  })