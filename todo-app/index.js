let todos = [];

const input = document.getElementById("todo-input");

const addBtn = document.querySelector(".add-btn");

const todoList = document.querySelector(".todo-list");

addBtn.addEventListener("click", () => {
  console.log("button clicked");

  const newTodo = input.value;

  let isDuplicated = false;

  todoList.childNodes.forEach((e) => {
    const todo = e.firstElementChild.textContent;

    if (todo === newTodo) {
      isDuplicated = true;
      return;
    }
  });

  if (isDuplicated) {
    alert("Todo already exists");
  } else {
    const newLi = document.createElement("li");

    newLi.innerHTML = `
    <p>${newTodo}</p>
    <button class="delete-btn">Delete</button>
    `;

    todoList.appendChild(newLi);
  }
});
