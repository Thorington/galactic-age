
export default class Age {
  constructor(age) {
    this.age = age;
  }

  mercurify() {
    const earthAge = new Age();
    const result = (this.age * .24);
    return (result);
  }

  venusify() {
    const earthAge = new Age();
    const result = (this.age * .62);
    return (result);
  }

  marsify() {
    const earthAge = new Age();
    const result = (this.age * 1.88);
    return (result);
  }

  jupiterify() {
    const earthAge = new Age();
    const result = (this.age * 11.86);
    return (result);
  }

}

