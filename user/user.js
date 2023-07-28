class User{
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.paassword = password

    }
    static countUsers(){
        console.log('There are 50 users')
    }

    register(){
        console.log(this.username +" registered successfully") 
    }
}

// let bob = new User('bob',"bob@gmail.com","1234567890")
// bob.register()

// User.countUsers()

class Member extends User{
    constructor(username,email,password,memberPackages){
        super(username,email,password)
    this.package = memberPackages 
    } 

    getpackage(){
        console.log(this.username + ' is subscribed to ' +this.package+' package')
    }
   
}

let mike = new Member('mike','mike@gmail.com','12233433433','Standard')
mike.getpackage()
mike.register()