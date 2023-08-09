class SpaceShuttle {
    constructor(targetPlane){
        this.target = targetPlane;
    }

    takeOff(){
        console.log(`To ${this.targetPlane} !`)
    }

}

const spaceShuttle = new SpaceShuttle('Rwandair')
