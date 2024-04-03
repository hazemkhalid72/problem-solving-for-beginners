// return an array where the first element is the count of positives number and the second element is sum of negative numbers,0 is
// neither positive nor negative 

// if the input is an empty array or is null return an empty array 


function countPositvesSumNegatives(input){
    let positiveArray= [];
    let negativeArray= 0 ;
    
    for(let i= 0 ; i<input.length ; i++){
        if (input[i] > 0){
            positiveArray.push(input[i])
        }else{
            negativeNumber += input[i]
        }
    }
    return [ positiveArray.length,negativeNumber]
}

console.log(countPositvesSumNegatives([1,2,3,-1,-2,-3]))

// // another solution 

function countPositvesSumNegatives(input){
    let positiveArray= [];
    let negativeNumber= 0 ;

    input.map((ele) => ele > 0 ? positiveArray.push(ele) : negativeNumber += ele)
    return [ positiveArray.length,negativeNumber]
}

console.log(countPositvesSumNegatives([1,2,3,-1,-2,-3]))

// // another solution 

function countPositvesSumNegatives(input){
    let positiveArray =input.filter((x) => x > 0).length
    let negativeNumber=input.filter((x) => x < 0).reduce((acc,current) => acc+current)
    
    return [positiveArray,negativeNumber]
}

console.log(countPositvesSumNegatives([1,2,3,-1,-2,-3]))
