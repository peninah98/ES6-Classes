
const myObj = {
    prop1:'Hello',
    prop2:'Goodbye'
}
const handler = {
    get: (_target,prop,reciever)=>{

    }
    set: (){

    }
}


const proxy = new Proxy(myObj,handler)
console.log(proxy.prop1)
console.log(proxy.prop2)