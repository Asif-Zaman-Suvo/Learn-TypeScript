{


//spread operator 
//rest operator 
//distructuring 


//learn spread operator 

const bros1:string[] = ['asif','suvo','zaman']
const bros2:string[] = ['ronaldo','messi','neymar']

bros1.push(...bros2)


const mentors1 ={
    math:"suvo",
    physics:"asif",
    chemistry:"zaman",
}

const mentors2 ={
    ict:"tahsin",
    religion:"motin",
    biology:"azad",
}

const mentorList = {
    ...mentors1,
    ...mentors2,
}


///rest opearator learn

const greetFriends = (...friends:string[])=>{
    // console.log(`Hi ${friends}`);

    friends.forEach((friend:string)=>console.log(`hi ${friend}`))
}

greetFriends('abul','babul','kabul','ubul')

}
