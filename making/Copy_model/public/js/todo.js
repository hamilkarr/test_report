const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function checkToDo(check) {
  const li = check.target.previousElementSibling;
  li.classList.toggle("done");
  console.log("hi");
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;

  const checkBtn = document.createElement("button");
  checkBtn.setAttribute("class", "xi-check");
  checkBtn.addEventListener("click", checkToDo);

  const delBtn = document.createElement("button");
  delBtn.setAttribute("class", "xi-close");
  delBtn.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(checkBtn);
  li.appendChild(delBtn);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const toDoForm = document.getElementById("todo-form");
  const toDoInput = toDoForm.querySelector("input");
  const toDoList = document.getElementById("todo-list");

  const TODOS_KEY = "toDos";

  let toDos = [];
  /* 
  function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  }

  function checkToDo(check) {
    const li = check.target.previousElementSibling;
    li.classList.toggle("done");
  }

  function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
  }

  function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const checkBtn = document.createElement("button");
    checkBtn.setAttribute("class", "xi-check");
    checkBtn.addEventListener("click", checkToDo);

    const delBtn = document.createElement("button");
    delBtn.setAttribute("class", "xi-close");
    delBtn.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(checkBtn);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
  }

  function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
      text: newTodo,
      id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
  }

  toDoForm.addEventListener("submit", handleToDoSubmit);
 */
  const savedToDos = localStorage.getItem(TODOS_KEY);

  if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
  }

  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
