const oneArray = (array) => {
    return array.flat(infinity)
}

console.log(oneArray([1, 2, 3, [5, 6, 6, [2, 'hello'], ['he', 'hu']]]))