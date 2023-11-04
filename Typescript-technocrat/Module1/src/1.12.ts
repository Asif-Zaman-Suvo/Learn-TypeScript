{
  //nullable type

  const searchName = (value: string | null) => {
    if (value) {
      console.log("searching...");
    } else {
      console.log("not found name");
    }
  };

  searchName(null);

  //unknown type

  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convartedValue = (value * 1000) / 3600;
      console.log(`The speed is ${convartedValue} ms^-1`);
    } else if (typeof value === "string") {
      const [result, unit] = value.split(" ");
      const convartedValue = (parseFloat(result) * 1000) / 3600;
      console.log(`The speed is ${convartedValue} ms^-1`);
    } else {
      console.log("wrong input");
    }
  };

  getSpeedInMeterPerSecond("1000 kmh^-1");

  ///never type

  const throwError = (message: string): never => {
    throw new Error(message);
  };

  throwError("This is error");
}
