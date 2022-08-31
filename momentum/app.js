const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");


function onLogInSubmit(event){
  event.preventDefault();//기본동작이 실행되는 것을 막아줌
  console.log(loginInput.value);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
  alert("clicked");
}

loginForm.addEventListener("submit", onLogInSubmit);
link.addEventListener("click", handleLinkClick);//handleLinkClick에 ()를 같이 타이핑하면 브라우저가 켜질때 자동으로 한번 실행된 후 실행되지 않으므로 절대 ()를 같이 써주면 안된다.


/* 
addEventListener 안에 있는 함수는 직접 실행하지 않는다.
브라우저가 실행시켜주고 브라우저에서 해당 이벤트에 대한 정보 즉, object를 가지게 된다. addEventListener의 함수에서 object에 대한 자리만 할당해주면 해당 이벤트가 발생시킨 정보들에 대한 object들을 볼 수 있다.
이때 해당 이벤트가 가진 기본 Default값을 발생시키지 않기 하게 위해선 preventDefault을 이용하여 막을 수 있다
*/