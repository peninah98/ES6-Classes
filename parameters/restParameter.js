function howMany(...args){
    return `You have passed ${args.length} arguments`
}

console.log(howMany(1,2,3,4,6,6,4,3,2))
console.log(howMany(1,2,3,null,{},['Me']))


const sum = (...rest) => {
  
    let total = 0;
    for (let i = 0; i < rest.length; i++) {
      total += rest[i];
    }
    return total;
  }
  
  console.log(sum(0,1,2))