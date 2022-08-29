const h1 = document.querySelector(".title:first-child h1");


function handleTitleClick() {
  const clickedClass = "click";
  if(h1.classList.contains(clickedClass)){
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
}
//h1에 class name을 지정해주는 코드 console창에서 확인할 수 있다.

h1.addEventListener("click", handleTitleClick);
