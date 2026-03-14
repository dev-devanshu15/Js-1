//"Filter"
const mynum=[1,2,3,4,5,6,7,8,9,10]

const variable=mynum.filter( (num)=> num>4 )
//console.log (variable)


const kitab=[
    {
        title:"book " , genre:"Historic", publish:1992, edition:2010 
    },
    {
        title:"book1 " , genre:"Non-Historic", publish:1991, edition:2016
    },
    {
        title:"book2 " , genre:"science", publish:1996, edition:2019
    },
    {
        title:"book3 " , genre:"sports", publish:1998, edition:2000
    },
    {
        title:"book4" , genre:"sports", publish:1992, edition:2012
    }
]

// let books = kitab.filter( (bk)=>bk.title=="book " )

// books = kitab.filter ( (bk) => { 
//      return bk.edition>2010 && bk.genre=="sports"
//     } )

// console.log (books)

let book= kitab.filter( (bk) =>bk.genre=="sports" )

book = kitab.filter ( (bk)=>{
    return bk.edition<2015 &&  bk.title=="book "
} )

console.log(book)