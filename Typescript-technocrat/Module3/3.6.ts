{
  //getter and setter

  class BankAccount {
    public readonly name: string;
    public id: number;
    protected _balance: number;

    constructor(name: string, id: number, balance: number) {
      this.name = name;
      this.id = id;
      this._balance = balance;
    }

    // addDeposite(amount: number) {
    //   this._balance = this._balance + amount;
    // }

    //setter
    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }

    // getBalance() {
    //   return this._balance;
    // }

    get balance() {
      // getter
      return this._balance;
    }
  }

  const goribAccount = new BankAccount("shuvo", 111, 50);
  goribAccount.deposit = 50;
  const totalBalance = goribAccount.balance;

  console.log(totalBalance);

  class StudentBackAccount extends BankAccount {
    test() {
      this._balance;
    }
  }
}
