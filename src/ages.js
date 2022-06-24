
export default class Age {
  constructor(age) {
    this.age = age;
  }

  mercurify() {
  const earthAge = new Age();
  const result = (this.age*.24);
  return (result);
  }

  venusify() {
    const earthAge = new Age();
    const result = (this.age*.62);
    return (result);
    }

}
  
