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


const newCirle =JSON.parse(JSON.stringify(cirle))
console.log(cirle)
console.log(newCirle)


// Factories
function CreateCircle(radius){
    return{
        radius,
        draw: function(){
            console.log("draw")
        }
    }
}

const circle = CreateCircle(1)
circle.draw()

// factories is the way of creating the method in the object