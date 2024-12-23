const os=require("os");
console.log(os);
console.log(os,os.homedir());
console.log(os.hostname())
console.log(os.platform())
console.log(os.release());
console.log(os.userInfo())
//console.log(userInfo.username())

// const userInfo = os.userInfo();
// console.log(` My Username is: ${userInfo.username}`);

// const totalMemory = os.totalmem() / (1024 ** 3);
// console.log(`Total Memory: ${totalMemory.toFixed(2)} GB`);

const totalMemoryBytes = os.totalmem();

// Convert to GB
const totalMemoryGB = (totalMemoryBytes / (1024 ** 3)).toFixed(2);

console.log(`Total Memory: ${totalMemoryGB} GB`);
