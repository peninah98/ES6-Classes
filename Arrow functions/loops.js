const cars = ['BMW','Toyota',"Hyundai"]
let X = ''

for( const car of cars){
    X += car + ' '
}

console.log(X)

let str = ''
let string = 'Joshua'

for(const letter of string){
    str += letter +' '
}

console.log(str)
console.log(string.split('').join(' '))