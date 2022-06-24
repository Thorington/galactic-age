
export default class LifeStats {
  constructor(age, lifespan) {
    this.age = age;
    this.lifespan = lifespan;
  }
  lastOnEarth() {
    if (this.age > this.lifespan) {
      let earthResult = `You are ${this.age} years old on Earth. You've lived ${this.age - this.lifespan} Earth years past your life expectancy!`;
      return (earthResult);
    } else {
      let earthResult = `You are ${this.age} years old on Earth. You have approximately ${this.lifespan - this.age} Earth years left, if all goes well!`;
      return (earthResult);
    }
  }
  lastOnMercury() {
    if (this.age > this.lifespan) {
      let mercuryResult = `You are ${(this.age * 0.24)} years old on Mercury. You've lived ${((this.age * 0.24) - (this.lifespan * 0.24)).toFixed(1)} Mercury years past your life expectancy!`;
      return (mercuryResult);
    } else {
      let mercuryResult = `You are ${(this.age * 0.24)} years old on Mercury. You have approximately ${((this.lifespan * 0.24) - (this.age * 0.24))} Mercury years left, if all goes well!`;
      return (mercuryResult);
    }
  }

  lastOnVenus() {
    const result = ((this.lifespan - this.age) * 0.62);
    return (result);
  }
  lastOnMars() {
    const result = ((this.lifespan - this.age) * 1.88);
    return (result);
  }
  lastOnJupiter() {
    const result = ((this.lifespan - this.age) * 11.86);
    return (result);
  }
}


