//using async/await for fetching the data
async function getUsers(){
    try {    
        const response = await fetch("https://dummyjson.com/todos")
        const validData = await response.json();
        console.log(validData);
    } catch(error){
        console.log("Hiiiiiiiiiiiii");
        
    }
}
getUsers()





//Using promises get the reponse
fetch("htps://dummyjson.com/todos")
.then((response) => {
    return response.json() 
}).then((data) => {
    console.log(data);  
})
.catch((error) => {    
    console.log(error);
})




//1. Execution Context:

// Defines the environment where JavaScript runs.
// Includes the Global Execution Context (GEC) and Function Execution Context (FEC).
// Helps manage scope, variables, and this binding.


//2. Temporal Dead Zone (TDZ): A safety mechanism for let and const variables to ensure they are not accessed before they are declared.