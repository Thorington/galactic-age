
export default class LifeStats {
  constructor(age, lifespan) {
    this.age = age;
    this.lifespan = lifespan;
  }
  //EARTH

  lastOnEarth() {
    if (this.age > this.lifespan) {
      let earthResult = `You are ${(this.age).toFixed(1)} years old on Earth. You've lived ${(this.age - this.lifespan).toFixed(1)} Earth years past your life expectancy!`;
      return (earthResult);
    } else {
      let earthResult = `You are ${(this.age).toFixed(1)} years old on Earth. You have approximately ${(this.lifespan - this.age).toFixed(1)} Earth years left, if all goes well!`;
      return (earthResult);
    }
  }
  //MERCURY

  lastOnMercury() {
    if (this.age > this.lifespan) {
      let mercuryResult = `You are ${(this.age * 0.24).toFixed(1)} years old on Mercury. You've lived ${((this.age * 0.24) - (this.lifespan * 0.24)).toFixed(1)} Mercury years past your life expectancy!`;
      return (mercuryResult);
    } else {
      let mercuryResult = `You are ${(this.age * 0.24).toFixed(1)} years old on Mercury. You have approximately ${((this.lifespan * 0.24) - (this.age * 0.24)).toFixed(1)} Mercury years left, if all goes well!`;
      return (mercuryResult);
    }
  }

  //VENUS

  lastOnVenus() {
    if (this.age > this.lifespan) {
      let venusResult = `You are ${(this.age * 0.62).toFixed(1)} years old on Venus. You've lived ${((this.age * 0.62) - (this.lifespan * 0.62)).toFixed(1)} Venus years past your life expectancy!`;
      return (venusResult);
    } else {
      let venusResult = `You are ${(this.age * 0.62).toFixed(1)} years old on Venus. You have approximately ${((this.lifespan * 0.62) - (this.age * 0.62)).toFixed(1)} Venus years left, if all goes well!`;
      return (venusResult);
    }
  }

  //MARS

  lastOnMars() {
    if (this.age > this.lifespan) {
      let marsResult = `You are ${(this.age * 1.88).toFixed(1)} years old on Mars. You've lived ${((this.age * 1.88) - (this.lifespan * 1.88)).toFixed(1)} Mars years past your life expectancy!`;
      return (marsResult);
    } else {
      let marsResult = `You are ${(this.age * 1.88).toFixed(1)} years old on Mars. You have approximately ${((this.lifespan * 1.88) - (this.age * 1.88)).toFixed(1)} Mars years left, if all goes well!`;
      return (marsResult);
    }
  }

  //JUPITER

  lastOnJupiter() {
    if (this.age > this.lifespan) {
      let jupiterResult = `You are ${(this.age * 11.86).toFixed(1)} years old on Jupiter. You've lived ${((this.age * 11.86) - (this.lifespan * 11.86)).toFixed(1)} Jupiter years past your life expectancy!`;
      return (jupiterResult);
    } else {
      let jupiterResult = `You are ${(this.age * 11.86).toFixed(1)} years old on Jupiter. You have approximately ${((this.lifespan * 11.86) - (this.age * 11.86)).toFixed(1)} Jupiter years left, if all goes well!`;
      return (jupiterResult);
    }
  }
}
