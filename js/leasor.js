"use strict";

//general signup

const nameInput = document.querySelector("#fullname");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const businessId = document.querySelector("#businessId");
const showPsw = document.querySelector(".password-icon");
const tel = document.querySelector("#tel");
const form = document.querySelector("form");
const errorMsg = document.querySelector(".error-msg");
const errorMsg1 = document.querySelector(".error-msg1");
const errorMsg2 = document.querySelector(".error-msg2");
const errorMsg3 = document.querySelector(".error-msg3");
const errorMsg4 = document.querySelector(".error-msg4");

//form onsubmit

form.addEventListener("submit", () => {});

function formInputValidation() {
  nameInput.addEventListener("blur", () => {
    if (nameInput.value == "" || nameInput.value.length <= 0) {
      errorMsg.innerHTML = `<span id = error-logo><i class="fa fa-exclamation-triangle"></i></span> Must Be Specified`;
      errorMsg.classList.add("error-class");
      nameInput.classList.add("error-border");
    } else {
      errorMsg.remove();
      nameInput.classList.remove("error-border");
    }
  });

  businessId.addEventListener("blur", () => {
    if (businessId.value == "" || businessId.value.length <= 0) {
      errorMsg1.innerHTML = `<span id = error-logo><i class="fa fa-exclamation-triangle"></i></span> Must Be Specified`;
      errorMsg1.classList.add("error-class");
      businessId.classList.add("error-border");
    } else {
      errorMsg1.remove();
      businessId.classList.remove("error-border");
    }
  });

  emailInput.addEventListener("blur", () => {
    if (emailInput.value == "" && !emailInput.value.includes("@")) {
      errorMsg2.innerHTML = ` <span id = error-logo><i class="fa fa-exclamation-triangle"></i></span> Is Not A Valid Email`;
      errorMsg2.classList.add("error-class");
      emailInput.classList.add("error-border");
    } else {
      errorMsg2.remove();
      emailInput.classList.remove("error-border");
    }
  });

  tel.addEventListener("blur", () => {
    if (tel.value == "" || tel.value.length < 11 || isNaN(Number(tel.value))) {
      let details =
        tel.value.length < 11
          ? `Number Cannot Be Less than 11`
          : `Input Can Only Be Number`;
      errorMsg3.innerHTML = `<span id = error-logo><i class="fa fa-exclamation-triangle"></i></span> ${details}`;

      errorMsg3.classList.add("error-class");
      tel.classList.add("error-border");
    } else {
      errorMsg3.remove();
      tel.classList.remove("error-border");
    }
  });

  passwordInput.addEventListener("blur", () => {
    if (passwordInput.value == "" || passwordInput.value.length <= 8) {
      errorMsg4.innerHTML = `<span id = error-logo ><i class="fa fa-exclamation-triangle"></i></span> Password Must Contain At Least Eight Characters`;

      errorMsg4.classList.add("error-class");
      passwordInput.classList.add("error-border");
    } else if (
      nameInput.value == passwordInput.value ||
      emailInput.value == passwordInput.value
    ) {
      errorMsg4.innerHTML = `<span id = error-logo ><i class="fa fa-exclamation-triangle"></i></span> Password Cannot Be Your Name Or Email Address`;
    } else {
      errorMsg4.remove();
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
