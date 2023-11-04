{
  //type alias object

  type Student = {
    name: string;
    age: number;
    contact?: string;
    gender: string;
    address: string;
  };

  const student1: Student = {
    name: "suvo",
    age: 124,
    contact: "01521331328",
    gender: "male",
    address: "bangladesh",
  };
  const student2: Student = {
    name: "suvo",
    age: 124,
    gender: "male",
    address: "bangladesh",
  };

  //string type alias

  type Username = string;

  const username: Username = "shuvo";

  //boolean type alias
  type IsAdmin = boolean;
  const IsAdmin: IsAdmin = true;

  //function type alias

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;
}
