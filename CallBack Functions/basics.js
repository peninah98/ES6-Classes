setTimeout(() => {
  console.log("Hello after 1sec");
}, 1000);




let a=100;
console.log("start")

new Promise((resolve,reject)=>{
    resolve("Me second")
}).then((a)=>console.log(a))


console.log("finish")





