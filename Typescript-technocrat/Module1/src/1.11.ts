{
  // ternary operator || Optional Chaining operator || Nulish operator

  const age: number = 20;

  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Not Adult");
  }

  const isAdult = age >= 18 ? "Adult" : "NotAdult";
  //   console.log({ isAdult });

  //nullish qualicine operator
  //null && undefined desicion

  const isAuthenticated = "";
  const result = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  console.log({ result }, { result2 });

  //Optional Chaining operator

  type User = {
    name: string;
    address: {
      permanent?: string;
      present: string;
      city: string;
    };
    job?: string;
  };

  const user: User = {
    name: "Shuvo",
    address: {
      present: "Dhaka",
      city: "Dhaka",
    },
  };

  const permanentAddress = user?.address?.permanent ?? "No permanent address";
  console.log({ permanentAddress });

  const job = user?.job ?? "no job";
  console.log({ job });
}
