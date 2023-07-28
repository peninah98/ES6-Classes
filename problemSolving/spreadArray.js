// Spread operator in expanding an array
const arr = [1,2,3,4,5,6,7,8,9,4,3,32,3,4,4,4,5]
const arr2 =[12,3,4,2,3,"Penine", ...arr]
console.log(arr2)


// spread operator in combining an array

const arr3 = [...arr,...arr2]
console.log(arr3)


// Spread operator in function argument

const numbers = [23,34,54,54]
const sum = (a,b,d)=>{
    return a+b+d
}
const result=sum(...numbers)
console.log(result)

// spread opeator in splitting a string

const str = 'Elsie'
const splittedString = [...str]
console.log(splittedString)
console.log(splittedString.reverse().sort())