document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get input values
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value) / 100; // Convert height to meters
  
    // Calculate BMI
    let bmi = weight / (height * height);
  
    // Display result
    let bmiResult = document.getElementById('result');
    bmiResult.innerHTML = `<h2>Your BMI is: ${bmi.toFixed(1)}</h2>`;
  
    // Determine BMI category
    let bmiCategory;
    if (bmi < 18.5) {
      bmiCategory = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      bmiCategory = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
      bmiCategory = "Overweight";
    } else {
      bmiCategory = "Obese";
    }
  
    // Add BMI category message
    bmiResult.innerHTML += `<p>You are ${bmiCategory}.</p>`;
  });
  