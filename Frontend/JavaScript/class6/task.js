//Write program that calculates the sum of all digits of a given number
let num=1234;
let sum=0;
while(num>0){
  let rem=num%10;
  sum+=rem;
  //num=num/10;
  num = Math.floor(num / 10); // Remove the last digit
}
console.log("The sum of the number is : " ,sum)


//fibonacci series

// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Ask the user let pa for the number of terms
// rl.question('Enter the number of terms for the Fibonacci series: ', (inputNum) => {
//   let n = parseInt(inputNum);//suppose 5
  //declare first and second term

  let n=10;
  let a = 0, b = 1;
for (let i = 1; i <= n; i++) {
    console.log(a); //0
    let nextTerm = a + b; //0+1=1
    a = b; // means value of b is assign to a i,e a=1
    b = nextTerm; // b=1
  }


console.log("Jay jagannath🙏🙏🙏")
//Q3
let num2=10;
console.log(`Multiplication Table of ${num2}:`);
for(let i=1;i<=num2;i++){
  let result=i*num2;
  console.log(`${num2} x ${i} = ${result}`);
  
}

//Q4:


//Q5:
for(let i=1;i<=5;i++){
  let pattern="";
  for(let j=1;j<=i;j++){
    pattern+="*";

  }
console.log(pattern);
}

//Q6:
for(let i=1;i<=5;i++){
  let pattern="";
  for(let j=1;j<5-i+1;j++){
    pattern+="😎";
  }
  console.log(pattern);
}
// console.log("Anjan");
//Q6::OR
for (let i = 5; i >= 1; i--) {
 pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  console.log(pattern);
}


//Q7:



for (let i = 1; i <= 5; i++) {
  let pattern = "";

  // for spaces
  for (let j = 1; j <= 5 - i; j++) {
    pattern += " ";
  }

  // for stars
  for (let j = 1; j <= (2*i-1); j++) {
    pattern += "*";
  }

  
  console.log(pattern);
}


// Q8:
//let a = 5; // Height of the diamond (number of rows in the upper half)

// Upper half of the diamond
for (let i = 1; i <= 5; i++) {
  let pattern = "";

  // Add spaces for the upper half
  for (let j = 1; j <= 5 - i; j++) {
    pattern += " ";
  }

  // Add stars for the upper half
  for (let j = 1; j <= (2 * i - 1); j++) {
    pattern += "*";
  }

  // Print the current line for the upper half
  console.log(pattern);
}

// Lower half of the diamond
for (let i = 5 - 1; i >= 1; i--) {
  let pattern = "";

  // Add spaces for the lower half
  for (let j = 1; j <= 5 - i; j++) {
    pattern += " ";
  }

  // Add stars for the lower half
  for (let j = 1; j <= (2 * i - 1); j++) {
    pattern += "*";
  }

  // Print the current line for the lower half
  console.log(pattern);
}


//Q9
//here row =5 col=5

let totalRows = 5; // Number of rows
let totalCols = 5; // Number of columns

// Outer loop
for (let i = 1; i <= totalRows; i++) {
  let pattern = ""; // Initialize an empty string for each row

  // Inner loop
  for (let j = 1; j <= totalCols; j++) {
    // Check for boundary 
    if (i === 1 || i === totalRows || j === 1 || j === totalCols) {
      pattern += "*"; // Print star for boundary
    } else {
      pattern += " "; // for hollow part
    }
  }

  console.log(pattern); // Print the current row
}
//floyds's triangle
console.log("FLOUDS'S TRIANGLE")
let count=1;
for(let i=1;i<=5;i++){
  for(let j=1;j<=i;j++){
    process.stdout.write(count + " "); 
    //console.log(count);
    count++;

  }
  console.log()
}
