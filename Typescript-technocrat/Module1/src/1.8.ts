{

//distructuring 

//object destructing 

const user = {
    id : 123,
    name:{
        firstName: 'John',
        middleName: 'doe',
        lastName:'michel',
    },
    contact:'01712527899',
    address:'Uganda'

}

const {
    contact ,
    name:{middleName}
} = user ;

//Array destructing

const myFriends = ['chandler','ross','Joey','Rachel','Bob','Rods','Sinclair']

const [,,bestFriend,...rest]=myFriends

}