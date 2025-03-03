function Book(title, author, year) {
  this.title = title
  this.author = author
  this.year = year
  this.getBookSummary = function () {
    return `${this.title} was written by ${this.author} and is published by ${this.publicationYear}`
  }
}

const book1 = new Book("book 1", "Suzanne Collins", 2008)
const book2 = new Book("Book 2", "Pauline", 2001)

console.log(book1.getBookSummary())
