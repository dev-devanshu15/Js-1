
// console.log (user)

// const user2 = {
//     email:"dev15@mail.com",
//     fullname:{
//         userfullname:{
//             firstname:"Devanshu",
//             lastname:"Tiwari"
//         }
//     }
// }

// console.log (user2)
// console.log (user2.fullname)
// console.log (user2.fullname.userfullname)
// console.log (user2.fullname.userfullname.firstname)
// console.log (user2.fullname.userfullname.lastname)


// const obj1={1:"a", 2:"b"}
// const obj2={3:"c", 4:"d"}
// const obj3={5:"e", yash:7}
//const obj4={...obj1,...obj2,...obj3}
// console.log (obj4)

// const obj4 ={obj1,obj2}
// console.log (obj4)

// const  obj5=Object.assign ({},obj1,obj2,obj3)
// console.log (obj1)
// console.log (obj5)
// console.log (obj5===obj1)

// console.log (user)
// console.log (Object.keys(user))
// console.log (Object.values(user))
// console.log (Object.entries(user))

const eg = [
    {
        id:1,
        email:"virat@gmail.com"
    },
    {
        id:2,
        email:"kohli@gmail.com"
    }
]
console.log(eg[0]["email"])
console.log (eg)

// console.log (Object.keys(user))
// console.log (Object.values(user))
// console.log (Object.entries(user))
// console.log (user.hasOwnProperty("age"))
// console.log (user.hasOwnProperty("name"))


const user={}
user.name="altaf"
user.position="senoir tech manager"
user.age=29

console.log (Object.keys(user))
console.log (Object.values(user))
console.log (Object.entries(user))
console.log (user.hasOwnProperty("age"))
console.log (user.hasOwnProperty("position"))
console.log (user.hasOwnProperty("altaf"))





