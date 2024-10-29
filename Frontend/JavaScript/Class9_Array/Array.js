//
let newArray=[];
console.log(newArray);
console.log(typeof newArray);


//why we use 
let name="Anjan";
let age=22;
let profession="Criminal";
let isMarried=false;

//how array helps us

//DECLARATION:
let arr=["Anjan",22,"Criminal",false];
console.log(arr)
//or
let arrayInput=new Array("Ranjan",25,"Criminal",false);
console.log(arrayInput);

//Array Methods
let fruits = ["apple", "banana", "orange","grape"];
console.log("The length of the array is ",fruits.length);

//Accessing
console.log(fruits[0]);
let acLength=fruits.length;
console.log(fruits[acLength-1]);

//Modify

//apple to Balasore
fruits[0]="Balasore";
console.log(fruits);

//add 
let addFruits="papaya";
fruits.push(addFruits);
console.log(fruits);
//pop():Remove from the last
fruits.pop();

console.log(fruits);
//shift():REmove from the first
fruits.shift();
console.log(fruits)

//unshift():Add element at the first
fruits.unshift('Anjan');
console.log(fruits);

