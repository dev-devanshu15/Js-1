const myArr = [1,2,3,4,5,"altaf miya","devanshu"]
console.log(myArr[2],myArr[5])
console.log(myArr.slice(1,4))

myArr.push(6,7)
// myArr.pop()
myArr.unshift(15)
myArr.unshift (100)
myArr.shift()
console.log(myArr)
console.log (myArr.includes(99))
console.log (myArr.indexOf (6))

// const newArr= myArr.join ()
// console.log (newArr)
// console.log (typeof newArr)
// console.log ("A", myArr)

// const arr2 = myArr.slice (1,3)

// console.log (arr2)
// console.log ("B",myArr)

const myarr= [1,2,3,4,5,"devanshu"]
console.log (myarr.slice(1,4))

const all= [...myArr,...myarr]
console.log (all)