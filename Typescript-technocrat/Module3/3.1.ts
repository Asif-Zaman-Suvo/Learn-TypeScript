{
  // class OOP Typescript

  class Animal {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}
    makeAnimal() {
      console.log(
        `This is Animal ${this.name} and the sound of this animal is ${this.sound}`
      );
    }
  }
  const dog = new Animal("Pitbull", "dog", "bark");
  const cat = new Animal("Persian", "cat", "meao meao");

  dog.makeAnimal();
  cat.makeAnimal();
}
