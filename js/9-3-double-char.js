// givn a srting you have to return string in which each CharacterData(case-sensitive)is repeated once.


function doubleChar(str){
    return str.split("").map((ele)=> ele.repeat(2)).join("")
}
console.log(doubleChar("hazem"))