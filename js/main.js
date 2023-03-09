"use strict";
const signUpForm = document.querySelector('[name="signUpForm"]');
const formMessage = document.getElementById("form-message");
const userEmailInput = document.getElementById("userEmail");
const validityState = userEmailInput.validity;
const submitBtn = document.getElementById("submitBtn");

function displayFormError() {
  formMessage.classList.remove("greenText");
  formMessage.style.visibility = "visible";
  userEmailInput.classList.remove("valid-input");
  userEmailInput.classList.add("invalid-input");
}
function displayFormSuccess() {
  formMessage.classList.add("greenText");
  formMessage.style.visibility = "visible";
  userEmailInput.classList.remove("invalid-input");
  userEmailInput.classList.add("valid-input");
}

signUpForm.addEventListener("submit", function (event) {
  if (validityState.valueMissing) {
    event.preventDefault();
    formMessage.innerHTML = "Oops! Please add your email";
    displayFormError();
  } else if (validityState.patternMismatch) {
    event.preventDefault();
    formMessage.innerHTML = "Oops! That doesn’t look like an email address";
    displayFormError();
  } else {
    event.preventDefault();
    formMessage.innerHTML = "Thank you for subscribing!";
    displayFormSuccess();
  }
});
