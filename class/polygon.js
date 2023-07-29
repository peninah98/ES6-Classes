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

    display(){
        console.log(`God is love don't forget this God is Faithful ${this.age} ${this.name}`)
    }
}

var person = new Person('Gasana',120)
person.display()


class Contact {
    constructor(firstname,pnone){
        this.firstname = firstname
        this.phone = pnone
    }

    save(){
        console.log(`
        Name : ${this.firstname}
        Phone: ${this.phone}`)
    }
}

var contact = new Contact('Keza','0782602290') 
contact.save()