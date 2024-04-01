// in the simple assignment you are given a number and have to make it negative but maybe the number is already negative?



function makeNegative(negativeNumber){
    if(negativeNumber > 0 ){
        console.log(-negativeNumber)
    }else{
        console.log(negativeNumber)
    }
}

makeNegative(-50)


// // another solution


function makeNegative(negativeNumber){
    negativeNumber > 0 ? console.log(-negativeNumber) : console.log(negativeNumber)
}

makeNegative(709)

