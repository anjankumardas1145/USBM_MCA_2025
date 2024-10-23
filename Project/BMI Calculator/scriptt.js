const calculateBMI = () => {
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;

  const bmi = (weight / (height * height));
  const output=bmi.toFixed(2);

  let resultMessage=" ";

  if (bmi < 18.5) {
      resultMessage = `Your BMI is ${output}. You are underweight.`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
      resultMessage = `Your BMI is ${output}. You have a normal weight.`;
  } else if (bmi >= 25 && bmi <= 29.9) {
      resultMessage =`Your BMI is ${output}. You are overweight.`;
  } else {
      resultMessage = `Your BMI is ${output}. This Calculator is not for You🙏`;
  }

  document.getElementById('result').textContent = resultMessage;
};

