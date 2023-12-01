
//Arrays:


let marks_of_class_12=[90,92,87,"Fail",null,78,98,"Not Present"];

//1] Accessing value:
// Index Start from 0 end with (array.length - 1)
// console.log(marks_of_class_12[0]);
// console.log(marks_of_class_12[6]);


// 2] Finding the Length
// Length will return accurate number.
// console.log(marks_of_class_12.length);


// 3] Chasing Value
    // marks_of_class_12[3]="Pass" 
    // console.log(marks_of_class_12); //Chasing the value in array


// 4] Adding New Value in Array

    console.log(marks_of_class_12.length);
    marks_of_class_12[8]=99;  //Adding New Value in Array.
    console.log(marks_of_class_12);
    console.log(marks_of_class_12.length);



// 5] Type Of Array

    console.log(typeof marks_of_class_12); //Object


// for(let i=0;i<marks_of_class_12.length;i++){
//     console.log(marks_of_class_12[i]+"")
// }