// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
/**더짧게 만들어 본다 */
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

/**휴먼 에러 방지 목적으로 정리 */
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

/**동일한 code를 function으로 하나로 묶기*/
function paintGreeting(USERNAME_KEY) {
  greeting.innerText = `Hello! ${USERNAME_KEY}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

/**Click Event */
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const USERNAME_KEY = loginInput.value;
  localStorage.setItem("username", USERNAME_KEY);
  paintGreeting(USERNAME_KEY);
}

/**local storage저장 */
const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show the greeting
  paintGreeting(savedUsername);
}
