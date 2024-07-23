class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  static myType() {
    console.log("Animal");
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}

let dog = new Animal("Tommy", 4)
console.log(dog.describe());

// static method can be called using class name as these methods are only associate to class.
Animal.myType();