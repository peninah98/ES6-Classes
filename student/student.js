class Student {
    constructor(rno,fname,lname){
    this.rno = rno
    this.fname = fname
    this.lname = lname
    console.log('inside constructor')
    }
   
   set rollno(newRollno){
    console.log("inside setter")
    this.rno = newRollno
    }
    }
   let s1 = new Student(101,'Sachin','Tendulkar')
   console.log(s1)
   //setter is called
   s1.rollno = 201
   console.log(s1)



   class Book {
        constructor(color,author,pages){
            this.pages = pages
            this.color = color
            this.author = author
        }

        set changeBook (newBook){
            console.log(`Inside a book store`)
            this.color = newBook
        }

    }

    let book1 = new Book(120,'Micheal Paulins','Red')
    book1.color = 800

    console.log(book1)