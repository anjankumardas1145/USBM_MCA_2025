//FOR loop through
let arr=["a","b","c","d","e","f"];
for(var i=0; i<arr.length; i++){
  let ans=arr[i];
  console.log(ans);
}

//forEach loop through
let arrr=["a","b","c","d","e","f"];

arrr.forEach((ele,i)=>{
console.log(ele,i);
});
// try it again
let arrrr=["a","b","c","d","e","f"];
arrrr.forEach((ele)=>{
console.log(ele);
});

//map(arrrr)

let arrrrrr=["a","b","c","d","e","f"];
let newArr=arrrrrr.map((ele)=>{
console.log(ele);
});



let arrrrr = ["a", "b", "c", "d"];

arrrrr.map((ele, i) => {
  // console.log(ele, i);
  console.log(ele.toUpperCase());
});


let newArray=arrrrr.map((ele,i) =>{
  return ele.toUpperCase();
})

console.log(newArray);

let newArrr=[1,2,3,4,5,6 ,7,8,9,10,11,12,13,14];
const result = newArrr.filter((ele) => {
return  ele%2!==0;
})
console.log(result);



//Object
let student={
  Name:"Rohit",
  Age:37,
  Education:"BCom",
Roll:45,
}
console.log(student);
console.log(student.Name);
console.log(student.Age);
console.log(student.Education);
console.log(student.Roll)

let crickerter = new Object();
crickerter.name = "Virat";
crickerter.age =36;
crickerter.education = "BCom";
crickerter.roll =18;
console.log(crickerter);
//accessin element in two ways:
console.log(crickerter["name"]);//Bracket notation
console.log(crickerter.age);//dot notation









