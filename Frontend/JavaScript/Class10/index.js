let fruits = ["Apple", "Orange", "stabery"];
//fruits.concat("banana","dragon-fruits");
fruits.push("apple","apple2")

//console.log(fruits);

//concat
let fruitss = ["apple", "apple","apple2"];
let addARRRYApp =fruitss.concat( ["apple1", "apple3","apple4"]);
console.log(addARRRYApp);

//include 
let students = ["Anjan","Rohit","Virat","Hardik","Rishab"];
console.log(students.includes("Rahane"));



//slice()
let teamName=["MI","RCB","RR","DC","KKR","pk","SRH","GT","CSK"];
let results =teamName.slice(2,4);
console.log(results);
//console.log(teamName.slice(2));

//splice()
const months=["Jan","Feb","Mar","Apr","May"]
months.splice(2,3,"Anjan","Ranjan"); 
console.log(months);


//forEach()
const array1=[1,2,3,4,5,6,7,8,9]
for(let i=0; i<array1.length; i++){
  const double=array1[i]*2;
  array1[i]=double;

  //console.log(array1);
}
console.log(array1);

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

array2.forEach((value, index) => {
  array2[index] = value * 2;
});

console.log(array2);
