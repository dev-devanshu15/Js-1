const sym=Symbol("key1")

const user1= {
    name:"Devanshu",
    "full name":"Devanshu Tiwari",
    age:21,
    [sym]:"mykey1",
    email:"devanshu15112gmail.com",
    caste:"brahmin",
    religion:"hindu",
    location:"Mumbai"
}


// console.log (user1.name)
// console.log (user1["name"])
// console.log (user1["full name"])
// console.log (user1[sym])

// user1.email=("yash@gmail.com")


// Object.freeze(user1)

// user1.email=("altafgmail.com")
// console.log (user1)

user1.greeting = function(){
    console.log ("Hello JS user")
}
user1.greeting2 = function(){
    console.log (`Hello JS user ${this.name}`)
}
console.log (user1.greeting())
console.log (user1.greeting2())
