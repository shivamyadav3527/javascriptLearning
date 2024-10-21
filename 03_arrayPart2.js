//AS these are arrays so they belong to non-primitve datatype therefore they will occupy the heap memory.

let marvels = ['ironman' , ['spiderman', ['doctor strange'], 'captain america']]
let dc = ['superman', ['flash', ['wonder women']], 'aquaman', 'batman']
let indianHeroes = ['krish' , ['flying jatt', 'saktiman']]


marvels.push(dc);
console.log(marvels); // [marvels, [dc]]  , It will give array inside array(0 level concat).




/*CONCAT OPERATOR
we can pass as many as element in the concat it will concat all but there is one case here that is
It do the ONE LEVEL CONCATENATION only.
*/
let final_heroes = marvels.concat(dc); //As concat will return array after merging so we have to store it.
console.log(final_heroes); //['ironman' , 'spiderman', 'doctor strange', 'captain america','superman', 'flash', 'wonder women', 'aquaman', 'batman']

let final_heroes1 = marvels.concat(indianHeroes);
console.log(final_heroes1); // [marvels , ['flying jatt', 'saktiman']]




//SPREAD OPERATOR is same as CONCAT.
//It do the ONE LEVEL CONCATENATION only.
/*The spread operator (...) in JavaScript is a powerful syntax that allows an expansion
of iterable elements like arrays, strings, or even objects into individual elements.
It is often used to spread or unpack the contents of these iterables into new arrays,
objects, or function arguments.
 */

let arrf1 = [1, 2];
let arr2 = [3, 4];
let mergedArray = {...arrf1, ...arr2};
let mergedArray1 = [...arrf1, ...arr2]; 
 /* (index became the key for ...arr1 it became {0:1, 1:2}
  for ...arr2{0:3 , 1:4} , last one overwrites)*/
console.log(mergedArray); //{ '0': 3, '1': 4 }
console.log(mergedArray1);//[ 1, 2, 3, 4 ]


let mergedHeroes = [...marvels , ...dc , ...indianHeroes]
console.log(mergedHeroes);
/*[
    'ironman',
    [ 'spiderman', [ 'doctor strange' ], 'captain america' ],
    'superman',
    'flash',
    'wonder women',
    'aquaman',
    'batman',
    'krish',
    [ 'flying jatt', 'saktiman' ]
  ]*/





//***********************************FLAT OPERATOR********************************************* */
//It do the TWO LEVEL CONCATENATION only By DEFAULT BUT WE CAN PASS 'INFINITY' as an argument for all level flatening.
//Using Flat it do the 2 level of merging
let mergedHeroes3 = [...marvels , ...dc , ...indianHeroes].flat();
let mergedHeroes1 = [...marvels , ...dc , ...indianHeroes].flat(Infinity);
console.log(mergedHeroes3); // give get 2 level of merging by default
console.log(mergedHeroes1); //will get all  level of merging.






/**FROM METHOD
 * The Array.from() method in JavaScript is used to create a new array from an array-like
 * or iterable object. It essentially CONVERTS things that AREN'T exactly arrays
 * (like strings, sets, maps, NodeLists, or even objects with a length property)
 * into actual arrays.
 */
    let str = "Hello";
    let arrr1 = Array.from(str);

    console.log(arrr1);
    // Output: ['H', 'e', 'l', 'l', 'o']


    let nodeList = document.querySelectorAll("p");
    let nodeArray = Array.from(nodeList);

    console.log(Array.isArray(nodeArray));  // true


    let arrg = Array.from([1, 2, 3], x => x * 2);
    console.log(arrg);
    Output: [2, 4, 6]



/*
* Here One interesting that it convert object into array only if length key is there
  length tell about how many items can be converted into arrays.
  also we man use function inside the from for the mapping purpose
*/
let obj = {
    0: "apple",
    1: "banana",
    2: "cherry",
    length: 1
  };
  let arr = Array.from(obj); 
  console.log(arr);       // Output: ['apple', 'banana', 'cherry']
  console.log(Array.isArray(arr));  // Output: true


  let obj1 = {
    0: "apple",
    1: "banana",
    2: "cherry",
  };                   //length is not provided.
  let arr1 = Array.from(obj1); 
  console.log(arr1);       // Output: []
  console.log(Array.isArray(arr1));  // Output: true //although it will get converted into array but empty
   
  
  let arr3 = Array.from([1, 2, 3], x => x * 2);
  console.log(arr3);
  // Output: [2, 4, 6]
  
  

  /** OF OPERATOR
   * Array.of is used to to create an array from the individual values 
   * whereas Array.from is used to create an array from an iterable or array-like object
   * and can apply transformation also
   */

  let arr4 = Array.of('123')
  let arr5 = Array.from('123')
  console.log(arr4); //[ '123' ]
  console.log(arr5); //[ '1', '2', '3' ]
  
  



