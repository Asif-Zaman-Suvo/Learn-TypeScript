{
  //conditional type

  type A = number;
  type B = undefined;

  type X = A extends null ? true : false; // x is a conditional type

  type Y = A extends null ? true : B extends undefined ? undefined : any; // y is a nested conditional type

  type Sheikh = {
    bikes: "string";
    car: "string";
    ship: "string";
  };

  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;
  type hasBikes = CheckVehicle<"bikes">;
}
