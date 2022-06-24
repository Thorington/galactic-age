import Remainder from './../src/remainder.js';

describe('Remainder', () => {

  test('should correctly determine lifespan remainder in Earth years', () => {
    const remainder = new Remainder(50);
    expect(remainder.earthYears).toEqual(50);
  })
  })

  