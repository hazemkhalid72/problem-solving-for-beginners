// you task to create a function that does four basic mathematical operation 

// the function should take three arguments-operation(string-char),
// value1(number),value2(number).

// the function should return of numbber after applaying the chosen operation



function basicOp1(operation, value1, value2){
    if(operation === "+"){
        return value1 + value2
    }else if(operation === "-"){
        return value1 - value2
    }else if(operation === "*"){
        return value1 * value2
    }else if(operation === "/"){
        return value1 / value2
    }else{
        return "undefind"
    }
}

console.log(basicOp1("+", 4 , 4))
console.log(basicOp1("-", 4 , 4))
console.log(basicOp1("*", 4 , 4))
console.log(basicOp1("/", 4 , 4))
console.log(basicOp1("$", 4 , 4))

   // // another solution 

function basicOp(operation, value1, value2){
    return eval(value1+ operation + value2 )
}
console.log(basicOp("+", 4 , 4))
console.log(basicOp("-", 4 , 4))
console.log(basicOp("*", 4 , 4))
console.log(basicOp("/", 4 , 4))
