{
  //key of operator typescript

  type VehicleType = {
    car: string;
    bus: string;
    zip: string;
  };

  type Owner1 = "car" | "bus" | "zip";
  type Owner2 = keyof VehicleType;

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "shuvo",
    age: 28,
    email: "asif@gmail.com",
  };

  const car = {
    model: "re23d",
    year: 2019,
  };

  const result1 = getPropertyValue(user, "name");
  const result2 = getPropertyValue(car, "year");
}
