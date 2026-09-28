const taskList = document.querySelector(".task-list");
const addTaskBtn = document.getElementById("add-btn");
const addNewTask = document.querySelector(".new-task");


addTaskBtn.addEventListener("click", () => {
    addNewTask.value;
    const task = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.textContent = addNewTask.value;

    task.appendChild(taskText);
    taskList.appendChild(task);
    addNewTask.value = "";

    const logo = document.createElement("img");
    logo.src = "images/check.svg";
    
    const completeBtn = document.createElement("button");

    task.appendChild(completeBtn);
    completeBtn.appendChild(logo);

    completeBtn.addEventListener("click", () => {
        task.classList.toggle("completed");
    });

    const logo2 = document.createElement("img");
    logo2.src = "images/trash-2.svg";

    const delBtn = document.createElement("button");

    task.appendChild(delBtn);
    delBtn.appendChild(logo2);

    delBtn.addEventListener("click", () => {
        task.remove();
    });
});

