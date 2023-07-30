class House {
    constructor(height, width){
        this.height = height;
        this.width  = width;
    }

   static door(){
        console.log(`
        I will own a beautiful house with prayers room and guests rooms 
        the doors will have ${this.height} height and ${this.width}`)
    }
}

var house = new House(90,2)
House.door()