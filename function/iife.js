
// ;(function (message) {
//   console.log(message)
// })("Hello, IIFE!")


(function (a, b) {
  let sum = a - b
  console.log(sum);
})(2, 4)


console.log(this === global);