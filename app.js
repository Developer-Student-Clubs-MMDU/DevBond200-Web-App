let theme = localStorage.getItem('data-theme');
const changeThemeToDark = () => {
document.getElementById("HTML").setAttribute("data-theme", "dark")
localStorage.setItem("data-theme", "dark")
}

const changeThemeToLight = () => {
document.getElementById("HTML").setAttribute("data-theme", "light")
localStorage.setItem("data-theme", 'light')
}


const checkbox = document.getElementById("checkbox");
checkbox.addEventListener('change', () => {
let theme = localStorage.getItem('data-theme');
if (theme ==='dark'){
changeThemeToLight()
}else{
changeThemeToDark()
}   
});

function changing(){
document.getElementById("HTML").setAttribute("data-theme", localStorage.getItem('data-theme')) ;
if(localStorage.getItem('data-theme')==="dark")
{
document.getElementById("checkbox").checked = true;
}
else if(localStorage.getItem('data-theme')===null)
{
document.getElementById("HTML").setAttribute("data-theme", "light") ;
}
}



let task = document.getElementById("task");
task.addEventListener("click", function(e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  showNotes();
});

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function(element, index) {
    html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Task ${index + 1}</h5>
                        <p class="card-text"> ${element}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;
  });

  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `No Tasks`;
  }
}

function deleteNote(index) {

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}