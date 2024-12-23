const path=require("path")
console.log(path)
const rootDirect=path.resolve(__dirname,"..")
console.log(rootDirect)

const rootDir=path.resolve(__dirname,"..")
console.log(rootDir);

console.log(path.join("Class2.js","path.js"))
console.log(path.basename);
const newDirPath = path.join(rootDir, 'abc', '123');
console.log(newDirPath)