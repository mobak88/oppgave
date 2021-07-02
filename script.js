// Variabler

const btnGoogle = document.querySelector(".google");
const btnLogin = document.querySelector(".login");
const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");
const form = document.querySelector(".form");
const passwordChecker = /(?=.{8,})/;
const tester =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Mail validering

const validation = function (input, rule, inputValue, logRequired) {
  inputValue = input.value;

  if (inputValue.match(rule)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    console.log(`Type in correct ${logRequired}`);
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
};

// Events

btnGoogle.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Du har logget inn med Google");
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validation(emailInput, tester, emailInput, "Email");
  validation(passwordInput, passwordChecker, passwordInput, "Password");
  if (emailInput.classList.contains("valid") && passwordInput.length < 8) {
    console.log("You logged in");
  }
});
