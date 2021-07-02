"use strict";

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
    console.log(`Skriv inn riktig ${logRequired}`);
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
  validation(emailInput, tester, emailInput, "E-post");
  validation(passwordInput, passwordChecker, passwordInput, "Passord");
  if (
    emailInput.classList.contains("valid") &&
    passwordInput.classList.contains("valid")
  ) {
    console.log("Du har logget inn");
  }
});
