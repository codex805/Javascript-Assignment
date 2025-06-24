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
})