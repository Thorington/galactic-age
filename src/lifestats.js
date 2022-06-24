
export default class LifeStats {
  constructor(age, lifespan) {
    this.age = age;
    this.lifespan = lifespan;
  }
  lastOnEarth() {
      if (this.age > this.lifespan) {
        let yearsPast = `You've lived ${this.age-this.lifespan} years past your life expectancy in Earth years!`;
        return (yearsPast);
      } else {
        let yearsLeft = `You have approximately ${this.lifespan-this.age} years left, if all goes well!`;
      return (yearsLeft);
      }
      }
    

  lastOnMercury() {
    const onEarth = new LifeStats();
    const result = ((this.lifespan-this.age)*0.24);
    return (result);
  }
  lastOnVenus() {
    const onEarth = new LifeStats();
    const result = ((this.lifespan-this.age)*0.62);
    return (result);
  }
  lastOnMars() {
    const onEarth = new LifeStats();
    const result = ((this.lifespan-this.age)*1.88);
    return (result);
  }
  lastOnJupiter() {
    const onEarth = new LifeStats();
    const result = ((this.lifespan-this.age)*11.86);
    return (result);
  }
}


