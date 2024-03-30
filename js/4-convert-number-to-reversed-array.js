// Given a random non-negative number, you have to return the digits of this number within an array in reverse order

function reverseNumber(x){
    return x.toString()
            .split("")
            .map((ele) => Number(ele))
            .reverse()
}
console.log(reverseNumber(234897325))

