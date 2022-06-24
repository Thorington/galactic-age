
export default class LifeStats {
  constructor(age, lifespan) {
    this.age = age;
    this.lifespan = lifespan;
  }
  lastOnEarth() {
      if (this.age > this.lifespan) {
        let yearsPast = `You are ${this.age} years old on Earth. You've lived ${this.age-this.lifespan} Earth years past your life expectancy!`;
        return (yearsPast);
      } else {
        let yearsLeft = `You are ${this.age} years old on Earth. You have approximately ${this.lifespan-this.age} Earth years left, if all goes well!`;
      return (yearsLeft);
      }
      }
    

  lastOnMercury() {
    const result = ((this.lifespan-this.age)*0.24);
    return (result);
  }
  lastOnVenus() {
    const result = ((this.lifespan-this.age)*0.62);
    return (result);
  }
  lastOnMars() {
    const result = ((this.lifespan-this.age)*1.88);
    return (result);
  }
  lastOnJupiter() {
    const result = ((this.lifespan-this.age)*11.86);
    return (result);
  }
}


