// Basic questions
//Q.1:what does math.floor() do in javascript ?
//ANS: Math.floor() is predefined function in javascript,used to rounds down to an integer which is just previous or equal to the given number
//ex: 
// console.log(Math.floor(12.3));//12
// console.log(Math.floor(-9.8));//-10

//  Q.2:
            // How would you Generate random number between 1 -100
    // Basically in JavaScript we use random() to generate a random number.Math.random() ,if we print this line then it will returns the random number between 0 -1 where 0 is inclusive and 1 is exclusive.This function always returns a floating-point number.
    // Here the question is 1 - 100 so we can write console.log(Math.random()*101),this will print random number between 1 -100.As we know random () always return floating point number so to remove the floating point we can use floor method.
    // let's see    console.log(Math.floor(Math.random()*101)); 
    console.log(Math.floor(Math.random()*101)); 


    //Q3:
            //Purpose of Math.ceil()


// //Math.ceil(): It returns the smallest integer greater than or equal to a given number
// EX:Suppose three people can travel on a bike at a time, and there are a total of 32 people. How many bikes are needed to travel everyone? In this case, we need to use the Math.ceil() method.
let possible=3;
let totalPeople=32;
console.log(`Total bike required to travel all the people is:  ${Math.ceil(totalPeople/possible)}`);


//Q4.Math.pow(2,3)
//Ans: used to find the power of a number.It takes two parameters one is base and another is component .Here 2 is base and 3 is component .This is read as 2 raised to the power of  3. Here the output is 8.


//Q.5:
console.log(Math.PI);
//the value is 3.141592653589793




//TASK 📝
               //generate random number between 1 - 100
    console.log(Math.random()*101);//  output will be in floating point number 
    console.log(Math.floor(Math.random()*101));// to remove floating point number here i used floor()
    
    //Q2:Round the number 6.75 down to to the nearest integer
    console.log(Math.floor(6.75));

    //q3: Round the number 9.12 up to to the nearest integer
      console.log(Math.ceil(9.12));

    //  Q4: Generate the random number between 5 - 27 (inclusive)
   let start=5;
    let end=27;
    let total=(end-start)+1;//23 i.e 0 -23
    console.log(Math. floor(Math.random()*total))+5;

    //Q5:add 5 days to the current days
                   let currentDays=new Date();
                   console.log(currentDays.getDay()); //2
                   console.log(currentDays.getDay()+5);//7
                   //currentDays.setDate(currentDays.getDate() + 5);
console.log("Jagannath");
                   //Q6:calculate millisecond 
                   let givenDate=new Date(2023,0,1);
                   let curDate=new Date();
                   let result=givenDate-curDate;
                       console.log(curDate-givenDate);


                   //Q7:Get the current hour
                   let cHOUR=new Date();
                   console.log(cHOUR.getHours());//21

                   //q8: Create a date object for January 1, 2024
                        let date = new Date(); //current date
                         console.log(date)
                             let ans=new Date(2024,0,1);
                              console.log(ans)
////Q.9: get the current day of the week
let curDay=new Date();
console.log(curDay.getDay());//2 tuesday

//Q.10:get the current month
let curMonth=new Date();
console.log(curMonth.getMonth());
console.log(curMonth.getDate());


/* getDate() is a function which returns date of a month
and getDay is a function which returns day of a week*/