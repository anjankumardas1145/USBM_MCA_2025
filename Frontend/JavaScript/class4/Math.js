// let num1=25;
// let num2=45.9;
// let addition=num1+num2;
// console.log(addition);
// console.log(Math.round(addition));
// console.log()


// //Squre root
// console.log(Math.pow(num1,2));
// console.log(Math.pow(num2));NaN
// console.log(Math.sqrt(11));

// //cell and floor 

// //Math.ceil(): This method returns the smallest integer greater than or equal to a given number
// //Math.floor(): This method returns the largest integer less than or equal to a given number.
// console.log(Math.ceil(98.75));//99
// console.log(Math.floor(98.75));//98
// console.log(Math.ceil(325.49));//326
// console.log(Math.floor(325.49));//325
// console.log(Math.floor(345.1));//345
// console.log(Math.ceil(345.1));//457
// //ROUND FUNCTION
// //Math.round() function to round a number to the nearest integer. If the fractional part of the number is 0.5 or higher, it rounds up; otherwise, it rounds down.


// console.log(Math.round(50.98));
// console.log(Math.round(12.56));
// console.log(Math.round(12.45));

// //MAX and Min
// console.log(Math.max(11,4,78));
// console.log(Math.min(11,54,45,89));


// //abs
// //Math.abs() function is used to get the absolute value of a number, which means it returns the number without its sign.

// console.log(Math.abs(-98));
// console.log(Math.abs(-0.876));

//Random function

// console.log(Math.random());//
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());

// //How many number in 1 -9;
// let min = 1;
// let max = 9;
// let count = max - min + 1; // +1 to include both endpoints i.e 1 and 9
// console.log(count); // Output: 9

// //Question
// let start = 5;
// let end = 27;
// let totalNum=(end-start)+1;//23
// console.log(Math.random()*totalNum);//(0 to 23)
// console/log(Math.random()*totalNum);



// Dates : to create date object
let date=new Date();
console.log(date);



console.log(date.toISOString());
console.log(date.getFullYear());
console.log(date.getMonth()+1);//bcz index start from zero so add 1,to get the exact result
console.log(date.getDay()+1);
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());



