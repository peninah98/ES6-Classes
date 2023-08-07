var numArray = []
var i

for(i = 0; i< 3; i++){
    numArray.push(i)
}
console.log(numArray)
console.log(i)


var printNumTwo 

for(var i = 0; i < 3 ; i++){
    if(i === 2){
        printNumTwo = function (){
            return i
        }
    }
}

console.log(`Effects of using var ${printNumTwo()}`)


// let printNumTwo 
// for(let i = 0; i < 3 ; i++){
//     if(i === 2){
//         printNumTwo = function (){
//             return i
//         }
//     }
// }

// console.log(`Effects of using var ${printNumTwo()}`)
// console.log(i)