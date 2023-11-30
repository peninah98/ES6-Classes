// This is object literal synthax
const cirle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function () {
        console.log("draw a cirle")
    }
}

cirle.draw()


const newCirle = JSON.parse(JSON.stringify(cirle))
console.log(cirle)
console.log(newCirle)


// Factories
function CreateCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log("draw")
        }
    }
}

const circle = CreateCircle(1)
circle.draw()

// factories is the way of creating the method in the object
// factory functions return the  new object when you call the function


function createCar(brand) {
    return {
        brand,
        drive: function () {
            console.log(`${this.brand} is the very fast car!`)
        }
    }
}

const myChoice = createCar("BMW")
myChoice.drive()




function createZoo(animal){
    return{
        animal,
        feed: function(){
            console.log(`Is technologies food? many of them are ${this.animal}`)
        }
    }
}

const github = createZoo("cat")
github.feed()