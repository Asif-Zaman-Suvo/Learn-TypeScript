{
  //constrains typescript

  const addCourseToStudent = <T extends { name: string; email: string }>(
    student: T
  ) => {
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

  const student3 = addCourseToStudent({
    name: "shuvo",
    email: "shuvo@gmail.com",
    emni: "emni",
  });
}
