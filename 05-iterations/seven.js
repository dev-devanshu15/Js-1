const mynumb=[1,2,3,4,5,6,7,8,9,10]

// const nu=mynumb.map( (num)=> num+10 ) 

// console.log (nu)

//forEach 
// const number = []; // 1. Create an empty array to store results

// mynumb.forEach((num) => {
//     number.push(num + 10); // 2. Manually add each result to the new array
// });

// console.log(number);



// const no=mynumb
//              .map( (num)=> num * 10 )
//              .map( (num)=> num +2 )
//              .filter ( (kk) => kk > 50 )

// console.log (no)

//  const result = [1, 2, 3, 4]
//   // Returns [2, 3, 4]
//   .map(n => n * 2)
//    .filter(n => n > 5)
//   console.log (result) 

const num1=[1,2,3]

const num2=num1.reduce ( (acc,curval)=> {
    //console.log (`accumalator : ${acc} and currentvalue: ${curval}`)
    return acc + curval }, 0)

//console.log(num2)

const shoping =[
    {
        couse:"JS course",
        price:999
    },
    {
        couse:"Html course",
        price:705
    },
    {
        couse:"Java course",
        price:4999
    },
    {
        couse:"CSS course",
        price:3999
    },
    {
        couse:"C++ course",
        price:2999
    },
    {
        couse:"PY course",
        price:1299
    }
]

const altaf= shoping.reduce( (acc,prices) =>{
    //console.log (`the first price is  :${acc} each line is ${prices.price}`)
    return  acc+prices.price},0 )
//console.log (altaf)



