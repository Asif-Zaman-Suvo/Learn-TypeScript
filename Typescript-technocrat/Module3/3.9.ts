{
  //interface and abstract methods

  //idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    moveEngine(): void;
  }

  //implementations

  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log("The car is started");
    }
    stopEngine(): void {
      console.log("The car is stopped");
    }
    moveEngine(): void {
      console.log("the car is moving");
    }
    test(): void {
      console.log("the car is testing");
    }
  }

  const normalCar = new Car1();
  normalCar.startEngine();

  //abstract class

  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract moveEngine(): void;
    test(): void {
      console.log("this is test");
    }
  }

  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log("totoya car is started");
    }
    stopEngine(): void {
      console.log("totoya car is stopped");
    }
    moveEngine(): void {
      console.log("The car is moving");
    }
  }

  //   const hondaCar = new Car2();
  //   hondaCar.startEngine();
}
