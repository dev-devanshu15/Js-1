// let myDate = new Date()
// console.log (myDate.toString())
// console.log (myDate.toDateString())
// console.log (myDate.toISOString())
// console.log (myDate.toJSON())
// console.log (myDate.toLocaleDateString())

// console.log (myDate.toLocaleTimeString())
// console.log (myDate.toLocaleString())

// let myDate = new Date("11-15-2006")
// console.log (myDate.toLocaleString())


// let myDate1 = Date.now ()
// console.log (myDate1)


// let date = new Date ()
// console.log (date)
// console.log (date.getDay())
// console.log (date.getMonth())

let date =new Date ()
console.log (date)
console.log (date.toDateString())
console.log (date.toString())
console.log (date.toLocaleString())
console.log (date.getMonth()+1)
console.log (date.getDate())
console.log (date.getDate())
console.log (date.getFullYear())
console.log  (date.toLocaleString('default', {year:'2-digit' }))  
console.log  (date.toLocaleString('default', {year:'numeric'}))  
console.log  (date.toLocaleString('default', {weekday:'long' }))  



console.log  (`${date.getDate()} date, and the month is ${date.getMonth()+1}`)
