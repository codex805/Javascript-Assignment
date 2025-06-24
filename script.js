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

    const buttonGroup = document.createElement("div");
    buttonGroup.appendChild(ediBtn);
    buttonGroup.appendChild(deleteBtn);
    
    li.appendChild(span);
    li.appendChild(buttonGroup);
    list.appendChild(li);
    
}

//Edit to Do
function ediTodo(span, button){
    const  oldText = span.textContent;

    const input = document.createElement("input");
    input.type = "text";
    input.value = oldText;
    input.className = "form-control form-control-sm me-2";
     span.replaceWith(input);
     button.textContent = "Save";
    
     button.onclick = () => {
        const newText = input.value.trim();
        if(newText != ""){
            span.textContent = newText;
            input.replaceWith(span);
            button.textContent = "Edit";
            button.onclick = () =>  ediTodo(span, button)
        }
     }
}