{
  //function type generic

  const createArray = (params: string): string[] => {
    return [params];
  };

  const createArrayWithGeneric = <T>(params: T): T[] => {
    return [params];
  };

  const result1 = createArray("Bangladesh");
  const resultGeneric = createArrayWithGeneric<number>(453);

  type User = {
    id: number;
    name: string;
  };

  const resGenericObj = createArrayWithGeneric<User>({
    id: 335,
    name: "shuvo",
  });

  // tuple type generic

  const createArrayWithTuple = <T, Q>(params1: T, params2: Q): [T, Q] => {
    return [params1, params2];
  };

  const result10 = createArrayWithTuple<string, number>("Bangladesh", 222);
  const resultGeneric2 = createArrayWithTuple<
    number,
    { id: number; name: string }
  >(455, {
    id: 245,
    name: "shuvo",
  });

  type User2 = {
    id: number;
    name: string;
  };

  const resGenericObj2 = createArrayWithGeneric<User>({
    id: 335,
    name: "shuvo",
  });

  const addCourseToStudent = <T>(student: T) => {
    const course = "next level web developmet";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "shuvo",
    email: "shuvo@gmail.com",
    devType: "FullStack",
  });

  const student2 = addCourseToStudent({
    name: "shuvo",
    email: "shuvo@gmail.com",
    hasWatch: "AppleWatch",
  });
}
