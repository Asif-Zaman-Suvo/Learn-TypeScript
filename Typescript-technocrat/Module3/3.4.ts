{
  // instance of type guard

  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
    makeSound() {
      console.log("i can make sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log(`i am ${this.name} and iam barking`);
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeMeao() {
      console.log(`i am ${this.name} and iam meawing`);
    }
  }

  //smart way te handle krar jonne funtion use korte pari

  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };

  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMeao();
    } else {
      animal.makeSound;
    }
  };

  const dog = new Dog("Pitbull", "Dog");
  const cat = new Cat("Mini", "Cat");
  getAnimal(dog);
}
