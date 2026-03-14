//Map class

// const map=new Map()
// map.set("In","india")
// map.set("Fr","france")
// map.set("Ch","china")

// for (const [key,value] of map) {
//     console.log (key ,"and value is",value)
    
// }


const obj={
      firstname:"Devanshu",
      lastname:"Tiwari",
      firstname1:"Devansh",
      lastname1:"Tiwar",
      firstname2:"Devan",
      lastname2:"Tiwa"
}

for (const value in obj) {
    // console.log(obj[value])
    
    
}


//It cant use object
// for (const ttt of obj) {
//     console.log (`Usernames are :- ${ttt}`)
// }


//This is "for-in" it can use objects
// for (const valu in obj) {
//     console.log (`${valu} and the value is ${obj[valu]}`)
    
// }



//"for-in" loop for arrays
// const arr=["Gleenwalk", "Macallan", "Jagermiester", "Red Label", "Black and White","Double Black"]

// for (const etc in arr) {
//     console.log (arr[etc]) 
// }


const map=new Map()
map.set("In","india")
map.set("Fr","france")
map.set("Ch","china")

for (const [key,value] of map) {
    console.log (key,value)
    
}

const arr =["ab","cdfg","dghj","fhrtgv"]
for (const key in arr) {
    console.log (key + arr[key])
     
}

