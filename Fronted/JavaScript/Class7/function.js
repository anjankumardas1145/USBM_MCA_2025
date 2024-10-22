// Write a function to print your name 
sayName();
function sayName(){
    console.log(`Anjan Kumar Das`);
  }
//invoke or call

  // //Write a function to print your name with argument and parameter
  //  function printName(  name){
  //   console.log(`My name is ${name}`);
  //  } 
  //  printName(`Anjan`);


  //  //Write a function to print name,age and city
  //  function printDetails(name,age,city){
  //   console.log(`My name is ${name},age is ${age} and city is ${city}`);
  //  }
  //  //printDetails("Anjan");
  //  printDetails("Anjan",22,"Balasore");


  //  function printDetailss(name,age,city){
  //   return `My name is ${name},age is ${age} and city is ${city}`;
  //   console.log("Anjan ");// this line can not be executed because it is after the return key word
  //  }
  //  //console.log(printDetailss("Anjan",22,"Balasore")); not a good practice 
  //   let result=printDetailss("Anjan",22,"Balasore");
  //   console.log(result);



  //ARROW FUNCTION
 // console.log(printName("Anjan"));// if i write this line then it show error because it Cannot access 'printName' before initialization or reference error
  const printName=(name,age,city)=>{
    return `My name is ${name},${age},${city}`;
  }
  console.log(printName("Anjan",22,"Balasore"));
 