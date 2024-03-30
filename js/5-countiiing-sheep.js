// consider an array list of sheep where some sheep may be missing form their place we neen a funcion than counts the number of sheep present in the array (true means present)

function countSheeps(arrayOfSheep){
    let counter= 0;
    for(let i = 0 ; i<arrayOfSheep.length ; i++){
        if(arrayOfSheep[i] === true){
            counter++
        }else{
            counter
        }
    }
    return counter
}
console.log(countSheeps(
    [   
        true, true, true, true,
        true, false, true, true,
        false, false, true, false,
        true, false, true, true,
        true, false, true, true,
    ]
    ))

    // // another solution 


function countSheeps(arrayOfSheep){
    let counter= 0;
    arrayOfSheep.map((ele) => ele=== true ? counter++ : counter)
    return counter
}
console.log(countSheeps(
    [   
        true, true, true, true,
        true, false, true, true,
        false, false, true, false,
        true, false, true, true,
        true, false, true, true,
    ]
    ))


