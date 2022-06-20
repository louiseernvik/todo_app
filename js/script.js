let addTaskBtn = document.getElementById('add-task-btn');
let uncompletedTasks = document.getElementById('uncompleted-tasks');
let addTaskInput = document.getElementById('add-task-input');
let completedTaskList = document.getElementById('completed-task-list');

addTaskBtn.addEventListener('click', function(){

    //div för task-list
    let taskList = document.getElementById('task-list');
    taskList.classList.add('task-list');
    //skapa div för content
    let taskContent = document.createElement('div');
    taskContent.classList.add('content');
    //lägg content i diven "tasks"
    taskList.appendChild(taskContent);

    //skapa inputfield textfält
    let newTaskField = document.createElement('input');
    newTaskField.classList.add('task-field');
    newTaskField.setAttribute("readonly", "readonly");
    newTaskField.type = 'text';
    taskContent.appendChild(newTaskField);
    newTaskField.value = addTaskInput.value;
    addTaskInput.value = '';

    //skapa edit-knapp
    let editBtn = document.createElement('button');
    editBtn.innerText = 'Edit';
    editBtn.classList.add('edit-btn', 'button');
    taskContent.appendChild(editBtn);

    //edit-knapp funktion
    editBtn.addEventListener('click', (e) => {
        if (editBtn.innerText.toLowerCase() == "edit") {
            editBtn.innerText = "Save";
            newTaskField.removeAttribute("readonly");
            newTaskField.focus();
        } else {
            editBtn.innerText = "Edit";
            newTaskField.setAttribute("readonly", "readonly");
        }
    });

    //skapa delete-knapp
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.classList.add('delete-btn', 'button');
    deleteBtn.innerHTML = '<i class="fas fa-trash" ></i>';
    taskContent.appendChild(deleteBtn);

    //delete-knapp funktion
    deleteBtn.addEventListener('click', (e) => {
        taskList.removeChild(taskContent);
    });

    //skapa done-knapp
    let doneBtn = document.createElement('button');
    doneBtn.innerText = 'Done';
    doneBtn.classList.add('done-btn', 'button');
    doneBtn.innerHTML = '<i class="fas fa-check" ></i>';
    taskContent.appendChild(doneBtn);

    //done-knapp funktion
    doneBtn.addEventListener('click', (e) => {
        completedTaskList.appendChild(taskContent);
        taskContent.removeChild(doneBtn);
        taskContent.removeChild(deleteBtn);
        newTaskField.classList.add("completed-input");

        let newDeleteBtn = document.createElement('button');
        newDeleteBtn.innerText = 'Delete';
        newDeleteBtn.classList.add('new-delete-btn', 'button');
        newDeleteBtn.innerHTML = '<i class="fas fa-trash" ></i>';
        taskContent.appendChild(newDeleteBtn);

        newDeleteBtn.addEventListener('click', (e) => {
            completedTaskList.removeChild(taskContent);
        });
    });
})