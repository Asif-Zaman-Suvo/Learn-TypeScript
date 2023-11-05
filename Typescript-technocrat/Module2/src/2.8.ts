{
  //promise typescript

  //api data

  type Todo = {
    userId: number;
    id: number;
    title: string;
    complete: boolean;
  };

  const getData = async (): Promise<Todo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    // console.log(data);

    return data;
  };

  getData();

  //simulate

  type Something = {
    something: string;
  };

  const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { something: "something" };
      if (data) {
        resolve(data);
      } else {
        reject("This is rejected");
      }
    });
  };

  //callling promise

  const showPromise = async (): Promise<Something> => {
    const data = await createPromise();
    return data;
  };

  showPromise();
}
