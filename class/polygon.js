class Polygon{

    constructor(height, width){
        this.height = height,
        this.width = width
    }
    test(){
        console.log(`This is the height of polygoh ${this.height}`)
        console.log(`This is the height of polygoh ${this.width}`)
    }
}

var obj = new Polygon(12,23)
obj.test()

var Person = class {
    constructor(name, age){
        this.age = age
        this.name = name
    }
}