// you get array of numbers, return the sum of all of the positives ones,

function calc1(arr){
    let even = 0 ;  
for(let i = 0 ; i<arr.length ;i++){
    if(arr[i] > 0 ){
        even+=arr[i]
    }
}
console.log(`${even}`)
}
calc1([-1,-23,3,-2,-1,34])


// another solution


function calc2(arr){
let even = 0 ;  
return arr.map((ele) => ele > 0  ? console.log(even += ele) : console.log(even))
}
calc2([-1,23,3,-2,-1,34])

// // another solution


function calc3(arr){
    let even = 0 ;  
    return arr.filter((ele) => ele > 0 ? console.log(even += ele):console.log(even))
}
calc3([-1 ,-23 , 3, -2 , -1 , 34 , 1])


// // another solution

function calc4(arr){
    let even = 0 ;  
return arr.filter((ele) => ele > 0).reduce((acc,current) => console.log(acc + current))
}
calc4([-1 , -23 , 3 , -2 , -1 , 34 , 1])