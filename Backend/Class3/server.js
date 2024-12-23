const http=require("http");
const fs=require("fs");
const os=require("os");
const path=require("path");
//const http=require("http");

const server=http.createServer((req,res)=>{
  if(req.url="/"){
    res.writeHead(200);
  res.end("welcome to Backend")
  }
});


server.listen(4000,()=>
{
  console.log("My server is running")
})


// const http = require("http");
// const fs = require("fs");
// const os = require("os");
// const path = require("path");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {  // Corrected: Use '===' for comparison
//     res.writeHead(200, { 'Content-Type': 'text/plain' }); // Adding content type for clarity
//     res.end("Welcome to Backend");
//   }
// });

// // Start the server
// server.listen(4000, () => {
//   console.log("My server is running on port 4000");
// });
