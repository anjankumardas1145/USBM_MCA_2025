//for current time to show the greeting msg to the user
const greetUser = () => {
  let date=new Date();//date class
  const currentHour=date.getHours();
  //const currentHour = new Date().getHours();  

  if (currentHour < 12) {
      console.log("Good Morning!");
  } else if (currentHour === 12) {
      console.log("Good Noon!");
  } else {
      console.log("Good Afternoon!");
  }
};

greetUser();//call the functionn

const greetUserr=(name,time)=>{
  if(time<12){
    return `Hey ${name} Good morning`;
  }else if(iime<18){
    return `Hey ${name} Good Afternoon`;
  }
  else{
    return `Hey ${name} Good goodevening`;
  }
}
let result=greetUserr("Anjan",11);
console.log(result);

//A simple calculator using Arrow function arrowfunction 
const calculator = (a, b, op) => {
  switch (op) {
      case '+':
          return a + b;
          
      case '-':
          return a - b;
          
      case '*':
          return a * b;
      case '/':
          return a/b;
      default:
          return 'Invalid operator';
  }
};

console.log(calculator(10, 5, '/')); // Output: 2



// const add=(a,b)=>console.log(add(5,6));
// add()



const aadd=(a,b)=>a+b;
console.log(aadd(5,7));


//BMI Calculator


  
const calculateBMI = (height, weight) => {
  //  BMI = weight (kg) / (height (m) * height (m))
  let bmi = weight / (height * height);
  
  return bmi.toFixed(2);
  
};


let height = 5.5; // Height in meters
let weight = 51;   // Weight in kilograms

let bmi = calculateBMI(height, weight);
console.log("Your BMI is: " + bmi);


// make a user authentication system using call back function






      
//
setInterval(()=>{
  console.log("Hey usbm "),5;
})
