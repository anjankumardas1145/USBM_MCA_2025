//readline is a module and also part of Node.js.This module frovides an interface for reading data from readable stream

const readline=require("readline");  //ths line represent the importing of readline module

const r1=readline.createInterface({
  input:process .stdin,//For reading input from from user input 
  output:process.stdout // for showing output  in terminal 
});
              //  r1.question(`Wht is your name ? `,(name)=>{
              //                         console.log(`HYE ${name}`);
  

              //                                               })


              //Copied from Sir's repo

// const readline = require("readline");
// // console.log(readline);

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let item1, item2, item3;

// rl.question("Enter item1", (input1) => {
//   item1 = parseInt(input1);

//   if (item1 % 2 !== 0) console.log("This is Odd:", item1);
// });


//using switch case statement print the exact month in the year



//    let number;
// r1.question(`Enter a number  between 1-12 :`,(userInput)=>{
//   number=parseInt(userInput);
//   switch(number){
//     case 1:
//       console.log(" january");
//       break;
//       case 2:
//         console.log(February);
//         break;
//         case 3:
//           console.log("march");
//           break;
//           case 4:
//             console.log("APRIL");
//             break;
//             case 5:
//               console.log("may");
//               break;
//               case 6:
//                 console.log("June");
//                 break;
//                 case 7:
//                 console.log("July");
//                 break;
//                 case 8:
//                   console.log("August");
//                   break;
//                   case 9:
//                     console.log("September");
//                     break;
//                     case 10:
//                       console.log("October");
//                       break;
//                       case 11:
//                         console.log("November");
//                         break;
//                         case 12:
//                           console.log("December");
//                           break;
//                           default:
//                             console.log("You have not enter the number between 1-12");
//   }
// })

//PRINT WEEK
r1.question(`Enter the number between 1-7 :`,inputNum=>{
  let Days=parseInt(inputNum);
  switch(Days){
    case 1:
      console.log("Sunday");
      break;
      case 2:
        console.log("Monday");
        break;
        case 3:
          console.log("Tuesday");
          break;
          case 4:
            console.log("Wednesday");
            break;
            case 5:

            console.log("Thursday");
            break;
            case 6 :
            console.log("Friday");
            break;
            case 7:
            console.log(Saturday);
            break;
            default:
              console.log("oops look like someone lost track of time ! Every day is a good day to code ! ");


  }
})