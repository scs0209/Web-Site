const clock = document.querySelector("h2#clock");

function sayHello() {
  console.log("hello");
}

setInterval(sayHello, 5000);//첫번째 argument는 내가 실행하고자 하는 function, 두번째는 호출되는 function 간격을 몇 ms(milliseconds)로 할 지 씀