//Array Map Method:

// map : Create new array by performing some operation On each array method
        //element

// let arr=[2,5,7];

// let a=arr.map((value,index,array)=>{
//     console.log(value,index ,array);
//     return value+index;
// })

// console.log("New Array create using map:");

// console.log(a);



// =========================================================================


//  Array filter Method :

// def : filter an array  with values that passes a test .Creates a new Array.

// let arr2=[45,2,13,16,23,5,3,1,0];

// let a2=arr2.filter((value)=>{
//     return value<10;
// })

// console.log(a2);


// ==============================================================================================

// reduce Method : Reduce an array to a single value.

let arr2=[45,2,13,16,23,5,3,1,0];


// let a2=arr2.reduce((h1,h2)=>{
//     return h1+h2;
// })

// console.log(a2);

//You Can write also 

const reduce_fuction=(h1,h2)=>{
    return h1+h2
}

let a2=arr2.reduce(reduce_fuction)
console.log(a2);