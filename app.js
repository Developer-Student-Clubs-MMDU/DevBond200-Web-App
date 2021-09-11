const taskInput = document.getElementById("task-input"),
 	tasktitle = document.getElementById("task-title"),
	addTask = document.getElementById("task-add"),
	taskList = document.getElementById("task-list"),
	taskbutton = document.getElementById("task-btn"),
	taskwrapper = document.getElementById("task-wrapper"),
	taskform = document.getElementById("task-form");
//

taskbutton.addEventListener("click", function () {
	taskwrapper.style.display = "none";
	taskform.style.display = "block";
});

function createTaskItem(taskTitle,task) {

	let taskcard = document.createElement("div");
	let taskTit = document.createElement("div");
	let taskDisc = document.createElement("p");

	taskcard.classList.add("taskcard");
	taskTit.classList.add("taskTitle");
	taskDisc.classList.add("taskDisc");
	
	taskTit.innerText = taskTitle;
	taskDisc.innerText = task;

	taskList.appendChild(taskcard);
	taskcard.appendChild(taskTit);
	taskcard.appendChild(taskDisc);
}

addTask.addEventListener("click", function () {
	createTaskItem(tasktitle.value,taskInput.value);
	tasktitle.value = "";
	taskInput.value = "";
	taskwrapper.style.display = "block";
	taskform.style.display = "none";
});
