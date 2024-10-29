//print the number 1 to 5
for(let i=0;i<5;i++){
  console.log(i+1);
}
console.log("Jay jagannath🙏🙏🙏")
for(let i=5;i>=1;i--){
  console.log(i);
}

//let num=console.log(Math.floor(Math.random()*101)); 
let sum=0;
for(let i=0;i<5;i++){
  let num=(Math.floor(Math.random()*101));
  console.log("The random number is : ",num);
 let result=sum+num;//
 console.log(result);
}


//Nested for loop
for(let i=0;i<=5;i++){
  for(let j=1;j<=2;j++){
    console.log(j);
  }
  console.log(i);
}


//star pattern

for(let i=1;i<=5;i++){
  let pattern="";
  for(let j=1;j<=i;j++){
    pattern+="😎";

  }
console.log(pattern);
}