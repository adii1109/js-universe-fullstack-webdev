let Student={
    harry:85,
    Chaitanya:99,
    Monika:4,
    Adii:95
}



//Promblem No:1 


// for (let i=0;i<Object.keys(Student).length;i++){
//     console.log("The marks of " + Object.keys(Student)[i]+ " are "+Student[Object.keys(Student)[i]]);
// }


//Promblem No: 2

// for (let key in Student){
//     console.log("The marks of "+ key + " are "+Student[key])
// }


//Promblem No :3 
// this program will run until user don't write correct number



// let CorrectNumber=4;
// let i;
// while(CorrectNumber!=i){
//     i=prompt("Enter The Number:");
// }
// console.log("You Enter The Correct Number.");



//promblem No : 4
//Write a Mean of 4 number use arrow Function


let Mean=(a,b,c,d)=>{
    
    console.log((a+b+c+d)/4);
}

Mean(1,2,3,4);