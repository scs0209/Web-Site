const toDoForm = document.getElementById("todo-form");
//위에서 이미 todo-form을 찾았기 때문에 그 안에 있는 input태그만을 찾을 수 있는 코드를 선언할 수 있다.
//const toDoInput = document.querySelector("#todo-form input");같은 의미
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

//그리는 것을 담당
function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);//위에 span과 li를 만들었는데, 내가 하고싶은거 span잉 li안에 들어가는 거기 때문에 이 코드를 써서 span을 li에 넣어준다.
  span.innerText = newTodo;
  toDoList.appendChild(li);
}

function handleToDoSubmit(event){
  event.preventDefault();
  const newTodo = toDoInput.value;
  //text 상자 안에 글을 작성하고 enter를 눌렀을 때 그 글이 초기화 되게 만들기 위해 toDoInput.value = ""; 을 통해 value를 빈 텍스트로 한다.
  toDoInput.value = "";
  paintToDo(newTodo);//위에 있는 paintToDo 함수 호출
}

toDoForm.addEventListener("submit", handleToDoSubmit);