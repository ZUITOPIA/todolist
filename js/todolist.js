const todoForm = document.querySelector("#enterTodo");
const todoInput = document.querySelector("#enterTodo input");
const todoList = document.querySelector("#todolist");

let todoSet = []; // 입력받은 newTodo 배열'처럼' 받기

function savedTodoArray(){
    localStorage.setItem("todoSet", JSON.stringify(todoSet));
}

function removeTodo(){
    const removeList = event.target.parentElement; 
    removeList.remove();
}

function createTodoElement(newTodo){
    const span = document.createElement("span"); 
    span.innerText = newTodo;
    return span;
}

function createDeleteButton(){
    const deleteButton = document.createElement("button");
    deleteButton.addEventListener("click", removeTodo);
    deleteButton.innerText = "x";
    return deleteButton;
}

function showTodo(newTodo){
    const li = document.createElement("li");
    const span = createTodoElement(newTodo);
    const deleteButton = createDeleteButton();
    li.appendChild(span);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
}



function handleTodo(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    todoSet.push(newTodo);
    showTodo(newTodo); // 받은 newTodo 화면에 출력
    savedTodoArray(); // 입력받은 newTodo들을 local storage에 저장
} 


todoForm.addEventListener("submit", handleTodo);


const savedToDos = localStorage.getItem("todoSet");

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); 
  todoSet = parsedToDos;
  parsedToDos.forEach(showTodo);
}
