
var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todo = Json.parse(localStorage.getItem("list_todo"))||[];
funtion renderTodos() {
listElement.innerHTML = "";

for (todo of todos) {
var todoElement = document.createElement("li");
var todoText = document.createTextNode(todo);
var linkElement = document.creatrElement("a");

linkElement.setAttribute("href", "#");
var pos = todos.indexof(todo);
linkElement.setAttribute("onclick","deletetodo(" + pos + ")");

var linkText = document.createTextNode("done");
linkElement.appendChild(linkText);

todoElement.appendChild(todoText);
todoElement.appendChild(linkElement);
todoElement.appendChild(todoElement);
}}

renderTodos();
funtion addTodo() {
var todoText = inputElement.value;

todos.push(todoText);
inputElement.value = "";
renderTodos();
saveToStorage();
}

buttonElement.onclick = btn_add;
function deletetodo(pos)
{
todos.splice(pos,1);
renderTodos();
saveToStorage();
}
function saveToStorage() {
localStorage.setItem("list_todos",JSON.stringify(todos));
}