{
  // polymorphism in  oop

  class Person {
    getSleep() {
      console.log("i am sleeping for 8 hours in a day");
    }
  }

  class Student extends Person {
    getSleep() {
      console.log("I am sleeping for 7 hours");
    }
  }

  class Developer extends Person {
    getSleep() {
      console.log("I am sleeping for 5 hours");
    }
  }

  const getSleepingHours = (param: Person) => {
    param.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  getSleepingHours(person1);
  getSleepingHours(person2);
  getSleepingHours(person3);

  // polymorphism in oop

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }
    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
  };

  const shape1 = new Shape();
  const cirle = new Circle(9);
  const rectangle = new Rectangle(8, 8);

  getShapeArea(shape1);
  getShapeArea(cirle);
  getShapeArea(rectangle);
}
