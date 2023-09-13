const form = document.getElementById("form-div");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const task = document.getElementById("task");
  if (task.value === "") {
    return;
  }

  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task-div");
  taskDiv.innerHTML = `
  <label>${task.value}</label><button>ELIMINA</button>
  `;
  document.getElementById("task-list").appendChild(taskDiv);
  task.value = "";

  taskDiv.querySelector("label").addEventListener("click", function (event) {
    event.target.style.textDecoration = "line-through";
  });

  taskDiv.querySelector("button").addEventListener("click", function (event) {
    event.target.parentElement.remove();
  });
});
