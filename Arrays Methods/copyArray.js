// const numbers = [2, 3, 4, 5, 6]
// const numbers2 = [...numbers]
// console.log(numbers2)
// console.log(numbers2.indexOf(3))

const obj1 = {
  name: "Penine",
  age: 23,
  hobby: "Reading books",
}

var arraylike = Array.prototype.slice.call(obj1)
console.log(arraylike)
