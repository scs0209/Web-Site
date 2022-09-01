const toDoForm = document.getElementById("todo-form");
//위에서 이미 todo-form을 찾았기 때문에 그 안에 있는 input태그만을 찾을 수 있는 코드를 선언할 수 있다.
//const toDoInput = document.querySelector("#todo-form input");같은 의미
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = []; // (todo)에 들어오는 텍스트를 배열로 묶어 보관하기 위해 빈 array를 생성해준다.

function saveToDos () {
  //JSON.stringify는 array자체를 문자열로 만들어준다.(localstorage에서 배열 형태로 저장됨.)
  localStorage.setItem("todos", JSON.stringify(toDos));
}


// 버튼에 delete기능을 추가한 코드
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}


//그리는 것을 담당
function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌"
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);//위에 span과 li를 만들었는데, 내가 하고싶은거 span잉 li안에 들어가는 거기 때문에 이 코드를 써서 span을 li에 넣어준다.
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event){
  event.preventDefault();
  const newTodo = toDoInput.value;
  //text 상자 안에 글을 작성하고 enter를 눌렀을 때 그 글이 초기화 되게 만들기 위해 toDoInput.value = ""; 을 통해 value를 빈 텍스트로 한다.
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);//위에 있는 paintToDo 함수 호출
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

//localStorage는 배열은 저장 x 오직 텍스트만 저장 가능