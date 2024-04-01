// jenny has written a function that return a greeting for a user however,she's in love with johnny and and would like 
// to greet him slightly different she added a special case to her function but she made a mistake



// function greet(name){
//     return "hello, " + name + "!";
//     if(name === "johnny")
//     return "Hello, my love!";
// }

// solution is

function greet(name){
    return name !=="johnny" ? "hello, " + name + "!" : "Hello, my love!"
}
console.log(greet("johnny"))