
// chapter 5 Practice Set:

//Practice problem No.1
// Create an array of Number and take input from the user to add numbers to the array .

// let arr=[23,53,23,5,2];
// let a2=(prompt('Enter the number that you want add into array:'));
// a2=Number.parseInt(a2);
// arr.push(a2);



// console.log(arr);


// ===========================================================

// Practice problem No:2 
// Keep Adding the numbers to the array in until 0 is added to the array .

// let arr=[];

// let a;
// do{
//      a=prompt('Enter the number:');
//     a=Number.parseInt(a);
//     arr.push(a);
// }while(a!=0);

// console.log(arr);


// =========================================================================

//Practice Problem No :3

// filters for numbers that  divisable by 10 form a given an array 

// let arr=[2,20,10,30,1000, 230,6,3,2,2,8,9,5];

// let div_10=arr.filter((value)=>{
//     return (value%10==0)
// })

// console.log(div_10);
// ===============================================================================


// Practice Promblem No :4

// let arr=[1,2,3,4, 5,6,7,8,9,10];

// let  square=arr.map((value)=>{
//     return value*value;
// })

// console.log(square);


//=================================================================================

//Practice Problem No :5 

// Use reduce to calculate factorial of given numbers from an array from first n natural numbers

let arr2=[1,2,3,4,5 ,6,7,8,9,10]

const reduce_fuction=(h1,h2)=>{
    return h1*h2
}

let a2=arr2.reduce(reduce_fuction)
console.log(a2);
//===============================================================