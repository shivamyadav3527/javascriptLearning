//In objects in js key are always there is double quotes even if we don't put quotes on key.

const obj1 = {
    name: "shivam yadav",
    age: 24,
    "address batao": "kanpur"
}

/*Two methods to access the object value 
*1. Dot method (console.log(obj1.name);)
*2. Square brcaes method (console.log(obj1.[address  batao]);
we cannot use dot method to access values which have spaces like address batao
*/
console.log(obj1.name);
console.log(obj1["address batao"]);



//QUESTION => Print the value of Symbol datatype in the object.
const sym1 = Symbol("sym123")

const obj2 = {
    [sym1] : "hakuna matata",  //This is the syntax of using Symbol inside objects.
    name: "shivam yadav",
    age: 24,
    "address batao": "kanpur"
}
console.log(obj2[sym1]);



//We can also freeze the object so that no one can change the value of attribute inside it
//although there will not be any error but values will not be changes even if try to change it.
obj2.name = "ballu yadav"
console.log(obj2.name); // ballu yadav

Object.freeze(obj2);
obj2.name = "simba yadav";
console.log(obj2.name); //ballu yadav


const obj5 = {1: "a" , 2: "b"}
const obj6 = {3: "c", 4: "d"}
const obj7 = {5: "c", 6: "d"}


const objres = Object.assign(obj5, obj6, obj7); //here obj5 is target  and rest are source

console.log(objres);
console.log(obj5 == objres); //give true as values are storing in the obj5

const objres1 = Object.assign({}, obj5, obj6); //here {} is target an rest is source
console.log(obj5 == objres1); //give false as values are storing in the new object


//Or we can also use spred operator for the merging of the object
const obj8 = {...obj6 , ...obj7};
console.log(obj8);


