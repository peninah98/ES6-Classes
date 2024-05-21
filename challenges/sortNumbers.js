// const arr = ["hello12", "pe34", "ooops98"]
// const result = []
// const numbers = []
// const finalResult = arr.map((element) => {
//   //   element.split("").filter((item) => {
//   //     if (typeof item === "string") result.push(item).join("")
//   //     return numbers.push(item).join()
//   //   })
//   console.log(
//     element.split("").filter((item) => typeof Number(item) === "number")
//   )
// })

const arr = ["hello12", "pe34", "ooops98"]

const resultStrings = [] // Array to hold strings
const resultNumbers = [] // Array to hold numbers

// Iterate over each element in the array
arr.forEach((element) => {
  // Split the element into parts based on spaces
  const parts = element.split("")

  // Iterate over each part
  parts.forEach((part) => {
    // Check if the part is a number
    if (!isNaN(Number(part))) {
      // Convert the part to a number and push it to the numbers array
      resultNumbers.push(Number(part))
    } else {
      // Push the part as a string to the strings array
      resultStrings.push(part)
    }
  })
})

// Recombine strings and numbers
const finalResults = arr.map((element, index) => {
  let combined = ""
  const numbersPart = resultNumbers[index].toString() // Convert number back to string if needed
  const stringsPart = resultStrings[index].join("")

  // Combine strings and numbers as per your requirement
  combined += stringsPart + numbersPart

  return combined
})

console.log(finalResults)
