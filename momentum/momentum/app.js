const h1 = document.querySelector(".title:first-child h1");


function handleTitleClick() {
  const currentColor = h1.style.color;
  let newColor;
  if(currentColor === "blue"){
    newColor = "tomato"
  } else {
    newColor = "blue"
  }
  h1.style.color = newColor;
} 
//함수안에 변수를 선언해줌으로써 코드를 기존보다 더 가독성있게 해준다.


h1.addEventListener("click", handleTitleClick);
