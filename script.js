// Variabler

const btnGoogle = document.querySelector(".google");
const btnLogin = document.querySelector(".login");
const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");

// Events

btnGoogle.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Du har logget inn med Google");
});

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Du har logget inn");
});

// Mail verifisering
