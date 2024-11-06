//nested object
let person={
  name: "Anjan",
  age: 22,
  address: {
    state: "Odisha",
    city: "BLS",
    pin:756035
  }
}
//the task
let userName={
  userId: "ANJAN", 
  email:"anjantechnology@gmail.com",
  grnder:"male",
  comments:["iam interested in","comt2","comt3","comt4"],
  address: {
    state: "odisha",
    dist:"Bls",

  }
} 
//Accessing the element from nexted object
console.log(`${userName.userId} ${userName.email} ${userName.address.state} ${userName.comments} ${userName.comments[0]}
  ${userName.comments[0]} `);


  console.log(JSON.stringify(userName.address)); // Output: {"state":"odisha","dist":"Bls"}

