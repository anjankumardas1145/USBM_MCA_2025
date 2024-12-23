
console.log("Anjan Kumar Das")
console.log("Backend");

const math=require("./math")

const fs=require("fs");

//custom module
console.log(math.add(5,6))

console.log(math.mul(5,6))

console.log(math.sub(5,6))

console.log(math.div(5,6))



//in-built module
console.log(fs);
fs.writeFileSync("notes.md","i love virat kohli \n");
// fs.readFileSync("");
// fs.mkdirSync("");
//append:add the string end of the file
fs.appendFileSync("notes.md","it is the part of mern \n")
fs.appendFileSync("notes.md","it am not interested\n")
const data=fs.readFileSync("notes.md");//buffer datatype-->node.js
console.log(data.toString());


fs.writeFileSync("anjan.js","const PI=3.141\n");
fs.appendFileSync("anjan.js","console.log(PI);\n");
const data1=fs.readFileSync("anjan.js");
console.log(data1.toString());
fs.mkdirSync("class2",{recursive:true});
fs.mkdirSync("somjena");
// fs.renameSync("somjena","soumya");
// fs.rmSync("soumya");