const myArr = [1,2,3,4,"shivam"];
console.log((myArr)); //[ 1, 2, 3, 4, 'shivam' ]

myArr.push(5);  //insert item from the end into array
console.log(myArr); //[ 1, 2, 3, 4, 'shivam', 5 ]

myArr.pop(); //remove item from the end
console.log(myArr); //[ 1, 2, 3, 4, 'shivam' ]

myArr.unshift(9); //insert item from the start of the array
console.log(myArr); //[ 9, 1, 2, 3, 4, 'shivam' ]

myArr.shift(); //remove item from the start
console.log(myArr); //[ 1, 2, 3, 4, 'shivam' ]

//INTERVIEW IMP
let newArr =myArr.join(); //Convert array into string
console.log(myArr);
console.log(newArr.toUpperCase()); //1,2,3,4,SHIVAM


//INTERVIEW IMP
/*Two major difference between slice and splice
1. slice(1,3) only include first argument and exclude second argument whereas 
    splice includes both first and second argument.

2. slice don't make any change in the main array whereas splice make changes in the 
    original array you can see in the example below.
 */
const array1 = [1 , 2 , 3 , 4 , 5];
console.log("A => ", array1); //A =>  [ 1, 2, 3, 4, 5 ]

let slice1 = array1.slice(1,3);
console.log("Sliced => ", slice1); //Sliced =>  [ 2, 3 ]
console.log("B => ", array1); //B =>  [ 1, 2, 3, 4, 5 ]


let splice1 = array1.splice(1,3);
console.log("Spliced => ", splice1); //Spliced =>  [ 2, 3, 4 ]
console.log("C => ", array1); //C =>  [ 1, 5 ]







