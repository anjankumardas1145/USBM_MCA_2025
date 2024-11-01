function greet(name) {
  console.log(`Hello, ${name}!`);
}

function processUserInput(An) {
  const userName = "An";
  Ankita(userName); // Calling the callback function
}

// Passing 'greet' as a callback to 'processUserInput'
processUserInput(greet);
