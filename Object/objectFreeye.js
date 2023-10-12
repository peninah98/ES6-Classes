const myObj = {
    name : "Penine",
    age : 29
}

Object.freeze(myObj)
console.log(myObj)

myObj.nationality = "Rwanda"
delete myObj.age

console.log(" After adding and deleting properties on freezed object  oops!!! No changes at all!!",myObj)