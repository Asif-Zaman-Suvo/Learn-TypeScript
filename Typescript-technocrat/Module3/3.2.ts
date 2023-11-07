{
  //

  class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numberOfhours: number) {
      console.log(`${this.name} will sleep ${numberOfhours}`);
    }
  }

  class Student extends Parent {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }

    getSleep(numberOfhours: number) {
      console.log(`${this.name} will sleep ${numberOfhours}`);
    }
  }

  const student1 = new Student("shuvo", 23, "uganda");

  class Teacher extends Parent {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }
    getSleep(numberOfhours: number) {
      console.log(`${this.name} will sleep ${numberOfhours}`);
    }

    getClasses(numberOfClass: number) {
      console.log(`${this.name} will sleep ${numberOfClass}`);
    }
  }
  const teacher = new Teacher("shuvo", 23, "uganda", "Teacher");
}
