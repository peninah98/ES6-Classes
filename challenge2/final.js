const array = [1,2,3,5,4,64,4,3]
const result = (array)=>{
    return array.filter((num)=>{
        return num%2===0
    }).sort((a,b)=>b - a)
}

console.log(result((array)))




// const oddAndNumber = (arr) => {
//     const odd = arr.filter(num => typeof num === 'number' && num % 2 !== 0);
//     const strings = arr.filter(num => typeof num === 'string');
//     const stringLengths = strings.map(str => str.length);

//     const result = [...odd, ...stringLengths];
//     return result;
// }

// console.log(oddAndNumber([1, 2, 3, 4, 5, 'hello', 'Klaraa']));

const oddArrays = (arr)=>{
    
}
