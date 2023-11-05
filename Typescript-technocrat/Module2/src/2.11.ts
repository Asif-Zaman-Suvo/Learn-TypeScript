{
  // utility types for typescript

  //pick type
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type NameAge = Pick<Person, "name" | "age">;

  //omit type

  type ContactInfo = Omit<Person, "name" | "age">;

  //require type

  type NewType = Required<Person>;

  //partial types

  type PersonPartial = Partial<Person>;

  //ReadOnly types

  type PersonReadOnly = Readonly<Person>;

  const person1: PersonReadOnly = {
    name: "John",
    age: 200,
    contactNo: "0292",
  };

  //   person1.name = "ss";

  //Record types

  //   type MyObj = {
  //     a: string;
  //     b: string;
  //   };

  type MyObj = Record<string, string>;

  const EmptyObj: Record<string, unknown> = {};

  const person2: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
    d: "dd",
  };
}
