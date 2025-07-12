let tasks = [];

function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();
    if (taskText === '') {
        alert("Please enter a valid task!!");
        return;
    }
    tasks.push(taskText);
    input.value = "";
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
        <span>${task}</span>
        <div class="task-actions">
        <button onclick="editTask(${index})">Edit</button> 
        <button onclick="deleteTask(${index})">delete</button> 
        </div>
        `;
        taskList.appendChild(li);
    });
}

function editTask(index) {
    const newTask = prompt("edit the task:", tasks[index]);
    if (newTask !== null && newTask.trim() !== '') {
        tasks[index] = newTask.trim();
        renderTasks();
    }
}

function deleteTask(index) {
    if (confirm("Are you sire you want to delete this task?"))
        tasks.splice(index, 1);
    renderTasks();
}