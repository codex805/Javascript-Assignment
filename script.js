// JavaScript select 
const input = document.querySelector("#todoInput");
const adddBtn = document.querySelector("#addBtn");
const list = document.querySelector("#todoList");

// add TO-Do

adddBtn.addEventListener("click", ()=>{
    const text = input.value.trim();
    if(text !== ""){
       addTodoItem(text);
       input.value = "";
    }
});

// function condation  craate TO-DO

function addTodoItem(text) {
    const li = document.createElement("li");
    //class NAme
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    const span = document.createElement("span");
    span.textContent = text;

    //Create Button
    const ediBtn = document.createElement("button");
    ediBtn.textContent = "Edit";
    ediBtn.className = "btn btn-sm btn-warning me-2";
    ediBtn.addEventListener("click", () => ediTodo(span, ediBtn));
    //deleteButton 
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "btn btn-sm btn-danger";
    deleteBtn.addEventListener("click", () => li.remove());
    
    
}