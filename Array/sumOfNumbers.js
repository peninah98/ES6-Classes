function sumOfNumber(arr) {
    return arr.reduce((acc, curr) => {
        return acc += curr
    }, 0)
}

console.log(sumOfNumber([1, 2, 3, 4, 5]))