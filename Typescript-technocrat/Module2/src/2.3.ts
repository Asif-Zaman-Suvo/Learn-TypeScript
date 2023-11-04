{
  // Generic type Of Typescript

  type GenericType<T> = Array<T>;

  const rollNumber: GenericType<number> = [1, 2, 3, 4, 5, 6, 7, 8];

  const mentors: GenericType<string> = ["Super", "duperature", "Temperature"];

  const TemperatureIsHigh: GenericType<boolean> = [true, false, false, true];

  // Array of objects

  const user: GenericType<{ name: string; age: string }> = [
    {
      name: "John",
      age: "22",
    },
    {
      name: "Suvo",
      age: "19",
    },
  ];

  //Generic Type Tuple Typescript

  type GenericTuple<X, Y> = [X, Y];

  const manush: GenericTuple<string, string> = ["Shuvo", "Asif"];

  const userWithID: GenericTuple<number, { name: string; email: string }> = [
    122,
    { name: "John", email: "asif@gmail.com" },
  ];
}
