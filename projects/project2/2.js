const form = document.querySelector("form");
//const height= parseInt(document.querySelector('#height').value)
//This case will give you empty value
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");
  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid height ${weight}`;
  }else{
    const BMI = (weight / (height * height)).toFixed(2);
    result.innerHTML=`<span> Your BMI is ${BMI}</span>`
  }
});
