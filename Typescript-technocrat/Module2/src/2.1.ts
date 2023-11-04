{
  // type assertions in typescript

  let anything: any;

  anything = "Here in next level web development";
  anything = 122;

  anything as number;

  const kgToGm = (value: number | string): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `This is ${convertedValue}`;
    }

    if (typeof value === "number") {
      return `This is ${value * 1000}`;
    }
  };

  const result1 = kgToGm(1000) as number;
  const result2 = kgToGm("1000") as string;

  //try catch

  type ErrorMessage = {
    message: string;
  };

  try {
  } catch (e) {
    console.log((e as ErrorMessage).message);
  }
}
