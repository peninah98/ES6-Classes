const myMap = new Map([
    ['names' , 12],
    ['ages' , 12],
    ['email' , 'annemarie@gmail.com'],
])

console.log(myMap)

// Adding property in map

myMap.set('parents','both')
myMap.set('dogs',2)
console.log(myMap)

// getting element
let name = myMap.get('names') 
console.log(name)

myMap.delete('dogs')

console.log(myMap.size)
console.log(myMap)

// Deleting all properties of map using clear() method
// myMap.clear()

console.log(myMap.has('dogs'))
console.log(typeof myMap)
console.log( myMap.keys())
console.log( myMap.values())
console.log( myMap.entries())
    




// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

// List all entries
let text = "";
fruits.forEach (function(value, key) {
  text += key + ' = ' + value;
})
