const taskInput = document.getElementById("task-input"),
	addTask = document.getElementById("task-add"),
	taskList = document.getElementById("task-list");

function createTaskItem(task) {
	let li = document.createElement("li");
	li.classList.add("task");
	li.innerText = task;

	taskList.appendChild(li);
}

addTask.addEventListener("click", function () {
	createTaskItem(taskInput.value);
	taskInput.value = "";
});
