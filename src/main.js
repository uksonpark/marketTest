const body = document.querySelector("body");
const homeJS = document.createElement("script"),
  loginJS = document.createElement("script");
const loginBtn = document.querySelector(".header-container__sign ul li a");
const logo = document.querySelector(".header-container__logo");

const handleClickLogo = () => {
  homeJS.src = "./views/home.js";
  body.appendChild(homeJS);
};

const handleClickLogin = () => {
  loginJS.src = "./views/login.js";
  body.appendChild(loginJS);
};

function init() {
  logo.addEventListener("click", handleClickLogo);
  loginBtn.addEventListener("click", handleClickLogin);
}

init();
