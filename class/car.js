const book ={
    title:"Hunger Games 1",
    author:"Harper Lee",
    publicationYear:1998,
    getSummary: function(){
        return `${this.title} was written by ${this.author} and is published by ${this.publicationYear}`
}
    }
console.log(book.getSummary());