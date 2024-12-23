const express=require("express");
const app=express();


app.get("/Home",(req,res)=>{
  res.send("Home page")
});
app.get("/Contact",(req,res)=>{
  res.send("Contact page")
});
const port=4000;
app.listen(port,()=>{
  console.log(`server is running at port number ${port}`)
})


app.post("/add.product",(req,res)=>{
  
})



app.post();
app.put();
app.delete();