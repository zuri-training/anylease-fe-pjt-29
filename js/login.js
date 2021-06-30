"use strict";

//general signup

const nameInput = document.querySelector("#fullname");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const showPsw = document.querySelector(".password-icon");
const tel = document.querySelector("#tel");
const form = document.querySelector("form");
const errorMsg = document.querySelector(".error-msg");
const errorMsg1 = document.querySelector(".error-msg1");
const errorMsg2 = document.querySelector(".error-msg2");
const errorMsg3 = document.querySelector(".error-msg3");

//form onsubmit

form.addEventListener("submit", () => {});

function formInputValidation() {
  emailInput.addEventListener("blur", () => {
    if (emailInput.value == "" && !emailInput.value.includes("@")) {
      errorMsg.innerHTML = ` <span id = error-logo><i class="fa fa-exclamation-triangle"></i></span>Is Not A Valid Email`;
      errorMsg.classList.add("error-class");
      emailInput.classList.add("error-border");
    } else {
      errorMsg.remove();
      emailInput.classList.remove("error-border");
    }
  });

  passwordInput.addEventListener("blur", () => {
    if (passwordInput.value == "" || passwordInput.value.length < 8) {
      errorMsg1.innerHTML = `<span id = error-logo ><i class="fa fa-exclamation-triangle"></i></span> Password Must Contain At Least Eight Characters`;

      errorMsg1.classList.add("error-class");
      passwordInput.classList.add("error-border");
    } else if (emailInput.value == passwordInput.value) {
      errorMsg1.innerHTML = `<span id = error-logo ><i class="fa fa-exclamation-triangle"></i></span> Password Cannot Be Your Email Address`;
    } else {
      errorMsg1.remove();
      passwordInput.classList.remove("error-border");
    }
  });
}

formInputValidation();

//show password

const showPassword = function () {
  showPsw.addEventListener("click", () => {
    passwordInput.type == "password"
      ? passwordInput.setAttribute("type", "text")
      : passwordInput.setAttribute("type", "password");

    passwordInput.type == "password"
      ? (showPsw.style.color = "gray")
      : (showPsw.style.color = "black");
  });
};
showPassword();
