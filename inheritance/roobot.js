class Roboot {
        test(){
            console.log("call from parent class")

        }
}

class Child extends Roboot {

}

class Leaf extends Child {

}

var obj = new Leaf()
obj.test()