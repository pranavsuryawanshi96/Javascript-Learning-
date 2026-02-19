const todoList = [
  { name: "make dinner", dueDate: "2026-12-22" },
  { name: "wash dishes", dueDate: "2022-12-22" },
];
renderTodoList();
function renderTodoList() {
  let todoListHTML = "";
  todoList.forEach((todoObject, i) => {
    const { name, dueDate } = todoObject;
    // this techniques call generating html
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-todo-btn js-delete-todo-btn">Delete</button>
    `;
    todoListHTML += html;
  });
  // console.log(todoListHTML);
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
  // adding html btn to page to select all delete btn we can use all querySelectorAll
  document.querySelectorAll(".js-delete-todo-btn").forEach((deleteBtn, i) => {
    deleteBtn.addEventListener("click", () => {
      todoList.splice(i, 1);
      renderTodoList();
    });
  });
}
// instead of doing onclick in html we can do addEventListener in js
document.querySelector(".js-add-todo-btn").addEventListener("click", () => {
  addTodo();
});
function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;
  const name = inputElement.value;
  if (name === "" || dueDate === "") {
    alert("Please enter todo name and date");
    return;
  }
  //   console.log(name);
  todoList.push({
    // name: name,
    // dueDate: dueDate,
    dueDate,
    name,
  });
  // console.log(todoList);
  inputElement.value = "";
  renderTodoList();
}
function handleAddKeydown(event) {
  // console.log(event.key);
  if (event.key === "Enter") {
    addTodo();
  }
}
