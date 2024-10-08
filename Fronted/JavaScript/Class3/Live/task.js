// let letter='c';
// if(letter==='a' || letter==='e' || letter==='i' ||letter==='o' || letter==='u'){
//   console.log(letter, " is a vowel");
// }else{
//   console.log( letter, " is a consonant");
// }

//or 
let char = 'b';  

switch(char) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log(char + " is a vowel.");
        break;
    default:
        console.log(char + " is a consonant.");
}
