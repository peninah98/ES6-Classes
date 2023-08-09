const user = {
    Gatete:{
        age : 30,
        email : 'gatete@gmail.com'
    }
}

const { Gatete : {age,email}} = user

const {Gatete : { age:UserAge, email: userEmail}} = user
console.log(user)
console.log(userEmail)