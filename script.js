// Selectors
const fahrenheitValue = document.querySelector("#fahrenheit-input-value"),
  celsiusResult = document.querySelector("#celsius-result"),
  celsiusButton = document.querySelector("#celsius-btn"),
  celsiusValue = document.querySelector("#celsius-input-value"),
  fahrenheitResult = document.querySelector("#fahrenheit-result"),
  fahrenheitButton = document.querySelector("#fahrenheit-btn"),
  refreshFahrToCel = document.querySelector("#f-to-c-refresh-btn"),
  refreshCelToFahr = document.querySelector("#c-to-f-refresh-btn");

// Event Listeners

celsiusButton.addEventListener("click", fahrenheitToCelsius);
fahrenheitButton.addEventListener("click", celsiusToFahrenheit);
refreshFahrToCel.addEventListener("click", clearFahrToCelValues);
refreshCelToFahr.addEventListener("click", clearCelToFahrValues);

// Functions
function fahrenheitToCelsius(e) {
  e.preventDefault();
  let fahrenheitDegrees = parseFloat(fahrenheitValue.value);
  celsiusResult.value = (fahrenheitDegrees - 32) / 1.8;
}

function celsiusToFahrenheit(e) {
  e.preventDefault();
  let celsiusDegrees = parseFloat(celsiusValue.value);
  fahrenheitResult.value = celsiusDegrees * 1.8 + 32;
}

function clearFahrToCelValues(e) {
  e.preventDefault();
  fahrenheitValue.value = "";
  celsiusResult.value = "";
}

function clearCelToFahrValues(e) {
  e.preventDefault();
  celsiusValue.value = "";
  fahrenheitResult.value = "";
}
