const input = document.querySelector("#task");
const addButton = document.querySelector("#add");
const taskDetails = document.querySelector("#tasks");
const completed = document.querySelector("#completed");

addButton.addEventListener("click", (e) => {
    e.preventDefault();
    if(input.value === ""){
        alert("Please enter a task");
    }else{
        createTask(input.value);
        input.value = "";
    }
});

function createTask(task){
    const container = document.createElement("div");
    const details = document.createElement("p");
    details.textContent = task;
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";

    container.append(checkbox, details, deleteBtn);
    taskDetails.appendChild(container);

    checkbox.addEventListener("change", ()=>{
        if(checkbox.checked){
            details.style.textDecoration = "line-through";
            taskDetails.removeChild(container);
            completed.appendChild(container);
        }else {
            details.style.textDecoration = "none";
            taskDetails.appendChild(container);
            completed.removeChild(container);
        }
    })

    deleteBtn.addEventListener("click", ()=>{
        container.parentElement.removeChild(container);
    })
}