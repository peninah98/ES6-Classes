// There are pre-defined symbols with specific meaning and used to customise and extend the behaviours of certain builtin operattions in javascript

const myItarable = {
    [Symbol.iterator]: function* (){
        yield 1;
        yield 2;
        yield 3
    }
}

for(const value of myItarable){
    console.log(value)
}