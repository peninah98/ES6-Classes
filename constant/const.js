// const a = 10
// if(a === a){
//     a = 12
//     console.log(a)
// }


const numbers = [1,2,3,4,5]
// numbers.push('emma')
console.log(numbers.reduce((accu,currentItem)=>{
    return accu + currentItem
},0))


console.log(numbers.reduce((accumulator,currentItem)=>{
    return accumulator * currentItem
},1))


let filtered = numbers.filter((even)=>even/2 == 1)
console.log(filtered)

let mapping = numbers.map((num)=> num + '*').join('').toString()
console.log(mapping)

for(var i = 0; i<=5; i++){
    console.log(i)
}

console.log(i)