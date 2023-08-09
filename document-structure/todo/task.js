const taskList = document.querySelector(".tasks__list");
const taskInput = document.querySelector(".tasks__input");
const addButton = document.querySelector(".tasks__add");

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  let text = taskInput.value.trim();
  
  if (text !== "") { 
   let newTask = `<div class="task">
      <div class="task__title">
        ${text}
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>`;
    taskList.insertAdjacentHTML("beforeend", newTask);
    taskInput.value = "";
  }
});

taskList.addEventListener("click", (event) => {
  if (event.target.classList.contains("task__remove")) {
    event.target.closest(".task").remove(); 
  }  
});