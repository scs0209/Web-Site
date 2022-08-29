const h1 = document.querySelector(".title:first-child h1");


function handleTitleClick() {
  h1.classList.toggle("clicked");
}
//이전 버전보다 더 쉽게 코드를 수정한 버전

h1.addEventListener("click", handleTitleClick);
