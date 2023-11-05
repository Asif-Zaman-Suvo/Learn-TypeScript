{
  // interface for generic types
  interface Developer<T, X = null> {
    name: string;
    device: {
      brand: string;
      model: string;
      releases: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type SmartWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<SmartWatch> = {
    name: "Shuvo",
    device: {
      brand: "asus",
      model: "ssfww",
      releases: 2018,
    },
    smartWatch: {
      brand: "xiaomi",
      model: "22442",
      display: "oled",
    },
  };

  type AppleWatch = {
    brand: string;
    model: string;
    heartTest: boolean;
    sleepRate: boolean;
  };

  interface Bike {
    model: string;
    capacity: number;
  }

  const richDeveloper: Developer<AppleWatch, Bike> = {
    name: "Shuvo",
    device: {
      brand: "mac",
      model: "ssfasfww",
      releases: 2022,
    },
    smartWatch: {
      brand: "apple",
      model: "tw252",
      heartTest: true,
      sleepRate: true,
    },

    bike: {
      model: "zixxer",
      capacity: 150,
    },
  };
}
