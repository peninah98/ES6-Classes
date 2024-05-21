const arr = ["hello12", "pe34", "ooops98"]
const result = []
const numbers = []
const finalResult = arr.map((element) => {
  element.split("").filter((item) => {
    if (typeof item === "string") result.push(item).join("")
    return numbers.push(item).join()
  })
})

console.log(finalResult)
