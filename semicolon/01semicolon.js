const hey = 'hey'
const you = 'hey'
//this codes will not run, it wil throw an error (can not read properties of undefiened (reading foreach))
// To solve this we will need to add the semicolon at the end of this line so the error can be fixed
const heyYou = hey + ' ' + you

['h', 'e', 'y'].forEach((letter) => console.log(letter))