// Function


//Write a function two numbers average;


// function TwoAverage(a,b){
//     return (a+b)/2;

// }


// let j=TwoAverage(12,30);
// console.log(j);



// ===================================================================================

// Arrow Fuction


//1]

// const sum=(a,b)=>{
//     return a+b
// }


// let y = sum(21,11);

// console.log(y);



//2]



// const hello=()=>{
//     console.log("Hey bro, What's Up");
// }


// hello();
//======================================================


//Basic Calculator 


let a=prompt("Enter the first number");
a=Number.parseInt(a);
let b=prompt("Enter the Second  number");
b=Number.parseInt(b);
let c=prompt("Enter the operator :");

const Calculator=(a,b,c)=>{

    if (c=='+'){
        console.log('add:',a+b);
    }

    else if (c=='-'){
        console.log('sub:',a-b);
    }


    else if (c=='*'){
        console.log('multi:',a*b);
    }
        
    else if (c=='/'){
        if (a<b){
            console.log('div:',b/a);
        }

        else{
            console.log('div:',a/b);
        }
       
    }
        
}

Calculator(a,b,c);