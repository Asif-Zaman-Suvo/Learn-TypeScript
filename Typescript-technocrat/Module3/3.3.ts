{
  //Typescript guard check {type guard}
  //type of operator

  const add = (
    param1: string | number,
    param2: string | number
  ): string | number => {
    if (typeof param1 === "number" && param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const addthenumber = add("2", "2");
  console.log(addthenumber);

  //In guard

  type NormalUser = {
    name: string;
  };

  type Adminuser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | Adminuser) => {
    if ("role" in user) {
      console.log(`This is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`This is ${user.name}`);
    }
  };

  const normalUser: NormalUser = {
    name: "Shuvo",
  };

  const adminUser: Adminuser = {
    name: "Asif",
    role: "admin",
  };

  getUser(normalUser);
}
