function BMI(weight, height) {
  let result = weight / (height * height);
  return result;
}
console.log(BMI(160, 50));

BMI(BMI(160, 50));

function status(bmi) {
  if (bmi < 18.5) {
    return "لديك نقص في الوزن";
  } else if (bmi >= 18.5 && bmi < 25) {
    return "وزنك صحي";
  } else if (bmi >= 25) {
    return "لديك زيادة في الوزن";
  }
}

function calculate() {
  document.getElementById("CLICK").value;
}
let result = weight / (height * height);
