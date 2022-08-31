//div id = login-form부분을 html에서 js로 가져옴
// const loginForm = document.getElementById("login-form");
//getElementById는 #을 사용할 필요가 없다 id인것을 이미 명시함
//querySelector에서는 #이 id라는 뜻이디.
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

//위의 코드와 똑같은 의미이다.
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function loginBtn(){
  const username = loginInput.value;
  console.log(username);
}

loginButton.addEventListener("click", loginBtn);
loginInput.addEventListener()