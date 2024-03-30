// write a function called repeatSrt which repeats the given string exacty n TimeRanges.


function repeatStr(str , num){
    let newStr="";
    for(let i =0 ; i <= num ; i++){
        newStr+=str[i]
    }
    return newStr;
}
console.log(repeatStr( "hello" , 10 ))


// // another solution


function repeatStr( str , num){
    let newStr="";
    newStr+=str.repeat(num)
    return newStr;
}
console.log(repeatStr( "i" , 6 ))