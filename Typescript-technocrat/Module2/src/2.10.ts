{
  // Mapped types

  //   const arrofStrings: string[] = ["1", "2", "3", "4", "5", "6"];
  const arrayOfNumbers: number[] = [1, 2, 3, 4, 5, 6];

  const arrofStrings: string[] = arrayOfNumbers.map((number) =>
    number.toString()
  );

  console.log(arrofStrings);

  type AreaNumber = {
    height: number;
    width: number;
  };

  type Height = AreaNumber["height"]; // lookup type

  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString<{ height: string; width: number }> = {
    height: "100",
    width: 100,
  };
}
