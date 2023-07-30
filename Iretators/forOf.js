const numbers =[1,2,4,5,554,5,6,5,6]

for(let num of numbers){
    num = num * num
    console.log(num)
}


// iterator symbol 

const digits = [12,23,4,5,67,778,4,32]
const arrayIterator = digits[Symbol.iterator]()
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
