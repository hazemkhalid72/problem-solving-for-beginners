// can you fund the needle in the haystack?

// write a function (findNeedle)the takes an (array) full of junk but 
// containing one "needle" 

// After your function finds the needle it should return a massage (as a string)that asys:

// "found the needle at postion" plus the index it found the needle so: 

function findNeedle(haystack){
    for(let i= 0 ; i<haystack.length; i++ ){
        if(haystack[i]==="needle"){
            return console.log(`found the needle at postion`+ i)
        }
    }
}
findNeedle(["hazem","khalid","mohamed","needle","mustafa","mohamed","os","hz","needle"])


 // // another solution 



function findNeedle(haystack){
    let index = 0;
    haystack.map((ele) => ele !== "needle" ? index++ : console.log(`found the needle at postion ${index}`))
}
findNeedle(["hazem","khalid","mohamed","needle","mustafa","mohamed","os","hz","needle"])


// // another solution 


function findNeedle(haystack){
    console.log("found the needle at postion "+ haystack.indexOf("needle"));
}
findNeedle(["hazem","khalid","mohamed","needle","mustafa","mohamed","os","hz"])
