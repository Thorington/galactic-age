
export default class LifeStats {
  constructor(age, lifespan) {
    this.age = age;
    this.lifespan = lifespan;
  }
  //EARTH

  lastOnEarth() {
    if (this.age > this.lifespan) {
      let earthResult = `You are ${this.age} years old on Earth. You've lived ${this.age - this.lifespan} Earth years past your life expectancy!`;
      return (earthResult);
    } else {
      let earthResult = `You are ${this.age} years old on Earth. You have approximately ${this.lifespan - this.age} Earth years left, if all goes well!`;
      return (earthResult);
    }
  }
  //MERCURY

  lastOnMercury() {
    if (this.age > this.lifespan) {
      let mercuryResult = `You are ${(this.age * 0.24)} years old on Mercury. You've lived ${((this.age * 0.24) - (this.lifespan * 0.24)).toFixed(1)} Mercury years past your life expectancy!`;
      return (mercuryResult);
    } else {
      let mercuryResult = `You are ${(this.age * 0.24)} years old on Mercury. You have approximately ${((this.lifespan * 0.24) - (this.age * 0.24))} Mercury years left, if all goes well!`;
      return (mercuryResult);
    }
  }

  //VENUS

  lastOnVenus() {
    if (this.age > this.lifespan) {
      let venusResult = `You are ${(this.age * 0.62)} years old on Venus. You've lived ${((this.age * 0.62) - (this.lifespan * 0.62)).toFixed(1)} Venus years past your life expectancy!`;
      return (venusResult);
    } else {
      let venusResult = `You are ${(this.age * 0.62)} years old on Venus. You have approximately ${((this.lifespan * 0.62) - (this.age * 0.62))} Venus years left, if all goes well!`;
      return (venusResult);
    }
  }

  //MARS

  lastOnMars() {
    const result = ((this.lifespan - this.age) * 1.88);
    return (result);
  }

  //JUPITER

  lastOnJupiter() {
    const result = ((this.lifespan - this.age) * 11.86);
    return (result);
  }
}


