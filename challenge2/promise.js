

const promise = new Promise((resolve,reject)=>{
  let a = 2 - 2
  if(a == 4){
    resolve('success')
  }
  else{
    reject("error")
  }
})

promise.then((message)=>{
    console.log('This is an then method ' + message)
}).catch((message)=>{
    console.log(`this is the catch ${message}`)
}).finally(()=>{
    console.log(`we were doing mathematical operation`)
})


const arr = [2,3,434,545,656,77]

