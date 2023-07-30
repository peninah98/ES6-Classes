class Computer{
    display(){
        console.log('This is a parent class')
    }
}

class Tablet extends Computer {
    display(){
        console.log("I'm an iPad")
    }
}

var computer = new Tablet()
computer.display()