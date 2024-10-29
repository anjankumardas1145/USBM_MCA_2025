let countdown; // here this is a varibale used to store the count down

const startTimer = (()=> {
    const timeInput = document.getElementById('timeInput').value; // Get the input from the user and this value will be stored in an another //varibale called timeInput.
    
    let timeLeft = parseInt(timeInput);

    //This line is important because,whenever a user gives the input as string (or any other types) instead of a number you need to convert the string input into a number.Becasue javaScript handle number and string differently.
// Ex:Suppose timeInput will be "Anjan".
//parseInt(timeInput) will return NaN,beacuse NaN means not a number
//The below validation checks for NaN and alerts the user to enter a valid number.
// check if the input is a string then for validation for the user we need a alert message that please enter a number here
//the secondition is for positive number only

  if (isNaN(timeLeft)||timeLeft<=0) {
          alert('Please enter a valid positive number of seconds.');
          return;
}
    
  document.getElementById('countdownDisplay').textContent =` Time left:${timeLeft} second`;

   clearInterval(countdown); // Clear any previous interval, you can check the program after comment the line and see what happen 😎

    countdown = setInterval(() => {
        timeLeft--; 
        document.getElementById('countdownDisplay').textContent = `Time left: ${timeLeft} seconds`;

        if (timeLeft <= 0) {
//clearInterval(countdown); // Stop the timer when it reaches zero
            document.getElementById('countdownDisplay').textContent =`Time is up!`;
        } 
        
    }, 1000); // Interval is set to 1000 milliseconds (1 second)
});
