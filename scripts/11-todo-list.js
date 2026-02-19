const todoList = [
  { name: "make dinner", dueDate: "2026-12-22" },
  { name: "wash dishes", dueDate: "2022-12-22" },
];
renderTodoList();
function renderTodoList() {
  // by the for each method
  let todoListHTML = "";
  todoList.forEach(function (todoObject, i) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    // this techniques call generating html
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onClick="
    todoList.splice(${i},1);
    renderTodoList();   
    "class="delete-todo-btn">Delete</button>
    `;
    todoListHTML += html;
  });
  // for (let i = 0; i < todoList.length; i++) {
  //   // const todoObject = todoList[i];
  //   // // const name = todoObject.name;
  //   // // const dueDate = todoObject.dueDate;
  //   // //destructuring for js oject second approach
  //   // const { name, dueDate } = todoObject;
  //   // // this techniques call generating html
  //   // const html = `
  //   // <div>${name}</div>
  //   // <div>${dueDate}</div>
  //   // <button onClick="
  //   // todoList.splice(${i},1);
  //   // renderTodoList();
  //   // "class="delete-todo-btn">Delete</button>
  //   // `;
  //   // todoListHTML += html;
  // }
  // console.log(todoListHTML);
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

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
function handelAddKeydown(event) {
  // console.log(event.key);
  if (event.key === "Enter") {
    addTodo();
  }
}
