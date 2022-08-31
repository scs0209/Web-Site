const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";


function onLogInSubmit(event){
  event.preventDefault();//기본동작이 실행되는 것을 막아줌
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("username", username)//local storage에 username을 saving 하는 코드
  greeting.innerText = `Hello ${username}`;//"Hello " + username;와 같은 뜻 사용하고 싶은걸로 사용하면 된다.
  greeting.classList.remove(HIDDEN_CLASSNAME);
}


loginForm.addEventListener("submit", onLogInSubmit);
