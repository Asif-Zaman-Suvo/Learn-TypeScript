{
  // Union Types

  type FrontendDeveloper = "Fakibaj Developer" | "Junior Developer";

  type FullStackDeveloper = "Frontend Developer" | "Expert Developer";

  type DeveloperType = FrontendDeveloper | FullStackDeveloper;

  const newDeveloper: FrontendDeveloper = "Junior Developer";

  type User = {
    name: string;
    email?: string;
    bloodGroup: "O+" | "A+" | "B+" | "AB+";
    gender: "Male" | "Female";
  };

  const user: User = {
    name: "shuvo",
    email: "shuvo@gmail.com",
    bloodGroup: "O+",
    gender: "Male",
  };

  //intersection types

  type FrontDeveloper = {
    skills: string[];
    designation1: "Front End Developer";
  };
  type BackDeveloper = {
    skills: string[];
    designation2: "Back End Developer";
  };

  type FullDeveloper = FrontDeveloper & BackDeveloper;

  const fullStackDeveloper: FullDeveloper = {
    skills: ["node", "deno", "react"],
    designation1: "Front End Developer",
    designation2: "Back End Developer",
  };
}
