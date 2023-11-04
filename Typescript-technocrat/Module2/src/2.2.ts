{
  // Typescript interface

  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
  }

  type RollNumber = number;
  type UserWithRole1 = User1 & { role: string };

  interface UserWithRole2 extends User1 {
    // interface
    role: string;
  }

  const user1: UserWithRole1 = {
    name: "Shuvo",
    age: 28,
    role: "job",
  };

  const user2: UserWithRole2 = {
    name: "Shuvo",
    age: 28,
    role: "job",
  };

  //js --> object ->function --> object

  type RollNumber1 = number[];

  interface RollNumber2 {
    [index: number]: number;
  }

  const roll: RollNumber2 = [1, 2, 3, 4];

  //function interface

  type Add = (num1: number, num2: number) => number;

  interface Add1 {
    (num1: number, num2: number): number;
  }

  const add: Add1 = (num1, num2) => num1 + num2;
}
