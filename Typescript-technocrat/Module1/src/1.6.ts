{
    
//Learning Function
// Normal Function 
// Arrow Function

function add (num1:number , num2:number=10 ):number {
    return num1 + num2;
}

add (2,2)

const addArrow = (num1:number, num2:number):number =>num1+num2;

//Object --> Function = Metho

const poorUser ={
    name :'Shuvo',
    balance:0,
    addbalance(balance:number):string{
        return `My new balance is ${this.balance+balance}`;
    }
}

const numberArray:number[] =[1,2,3,4,5,6,7]
const newArray :number[] = numberArray.map((item :number) :number=>item*item)

}