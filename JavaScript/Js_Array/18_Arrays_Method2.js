

// let num =[1,2,3,4,5,6,7,8,9]

// let num_more=[11,12,13,14,15,16,17,18,19]

// 1] Delete operator : Delete the index you assign , but array length remain same . delete not effect on array & delete  element return like :  <1 empty item> ;
// length (Interview Question)


delete num[0];

console.log(num);

// ans :  [ <1 empty item>, 2, 3, 4, 5, 6, 7, 8, 9 ]


// 2] Concat : Used to join arrays to the given array 

    // let new_Array=num.concat(num_more);
    // console.log(new_Array);


// 3] Sort Method : (Interview Question)

    // let num = [23,2, 3,5 ,1,0,30,29];

    // num.sort() // Sorting alphabetacily


    //return will Asending Order.
    // let compare=(a,b)=>{
    //     return a-b;
    // }


    //Deseding Order

    // let compare=(a,b)=>{
    //     return b-a;
    // }



    // num.sort(compare);
    // console.log(num);


// 4] Reverse : reverse an array: 


    // let num = [23,2, 3,5 ,1,0,30,29];
    // num.reverse();
    // console.log(num);


// 5] Splice () : splice can be used to add new items to an array :

    // let num=[2,3,4,5 ,6,7,21,26];
    // let r = num.splice(2,3,1020,1021,1022,1255);

    // 1] splice method ask index to where to starting delete the numbers
    // 2] Second Argument ask : form the first element how many numbers delete
    // 3] third : Which Which Element join New Element in Array .
    // 4] Return Delete values .(r)
    // console.log(num);


// 6] Slice () : Slice out a piece form a array it creats a new array 

    let num =[2,1, 0 , 4, 5, 7]

    // let NewNum=num.slice(3);
    let NewNum=num.slice(3,5)
    console.log(NewNum);