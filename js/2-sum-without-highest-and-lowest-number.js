// sum all the number of given array except the highest and the lowest element,
// the highest or lowest element respectively is a single element at each edgge,even is there are more than on with the same value


function calc(arr){
    if(arr==null) return 0;
    // find maxNumber
    let maxValue = 0;
    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i] >= maxValue){
            maxValue = arr[i]
        }else{
            maxValue
        }
    }
    // find minNumber
    let minValue ;
    for(let x = 0 ; x < arr.length ; x++){
        // console.log(arr[x])
        if(arr[x] > minValue){
            minValue
        }else{
            minValue =arr[x]
        }
    }
    let filteringArray = arr.filter((ele) => ele !== minValue && ele !== maxValue)
    let newArray =filteringArray.reduce((acc,current)=> acc+current)
    console.log(newArray)
}
calc([1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ])


// // another solution


function calc(arr){
    if(arr==null) return 0;

    let maxValue = Math.max(...arr)
    let minValue = Math.min(...arr)

    let fillteringArray =arr.filter((ele) => ele!== maxValue && ele!=minValue)
    // console.log(fillteringArray);
    let newArray = fillteringArray.reduce((acc,current) => acc+ current)
    console.log(newArray);
}
calc([1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9])


// // another solution


function calc(arr){
    return arr.filter((ele) => ele !== Math.max(...arr) && ele !== Math.min(...arr)).reduce((acc,current) => acc + current)
}
console.log(calc([1,2,3,4,5,6,7,8,9]))


// // another solution


function calc(arr){
    return arr.sort((a,b)=> a - b).slice(1,-1).reduce((acc,current) => acc+current)
}
console.log(calc([1,2,3,4,5,6,7,8,9]))