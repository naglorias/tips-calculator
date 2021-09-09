let billAmount = document.getElementById("bill-amount");
let personsNumber = document.getElementById("persons-number");
let qualityRate = document.querySelector("#quality-rates");
let calculateButton = document.getElementById("calculate");
let showTip = document.querySelector(".showtip");

const calculateTips = () => {
  let tip = (
    (billAmount.value * qualityRate.value) /
    100 /
    personsNumber.value
  ).toFixed(1);

  if (tip === "NaN") {
    showTip.innerHTML = "Tip : $0 for each person";
  } else {
    showTip.innerHTML = `Tips: $${tip} for each person`;
  }
};

calculateButton.addEventListener("click", () => {
  calculateTips();
  personsNumber.value = "";
  billAmount.value = "";
  qualityRate.value = "";
});
