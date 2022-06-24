
export default class LifeStats {
  constructor(age, lifespan) {
    this.age = age;
    this.lifespan = lifespan;
  }
  lastOnEarth() {
    const onEarth = new LifeStats();
    const result = ((this.lifespan) - (this.age));
    return (result);
  }
}


