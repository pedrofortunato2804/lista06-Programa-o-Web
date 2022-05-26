const inputElement = document.getElementById('inputContent');
const addTask = document.getElementById('toDoButton');

const tasksContainer = document.getElementById('toDo');

const validateInput = () => inputElement.value.trim().length > 0;

const tasksValidate = () => {
    const inputIsValid = validateInput();

    if(!inputIsValid){
        alert("Digite uma tarefa!")
    }

    const taskItemContainer = document.createElement('div');
    taskItemContainer.classList.add('task-item');

    const taskContent = document.createElement('p')
    taskContent.innerHTML = inputElement.value;

    taskContent.addEventListener('click', () => clickAdd());

    const deleteItem = document.createElement('i');
    deleteItem.classList.add('fa-regular');
    deleteItem.classList.add('fa-trash-can');

    deleteItem.addEventListener('click', () => clickDelete());

    taskItemContainer.appendChild(taskContent);
    taskItemContainer.appendChild(deleteItem);

    tasksContainer.appendChild(taskItemContainer);

    inputElement.value = "";
};

const clickAdd = (taskContent) =>{
    const tasks = tasksContainer.childNodes;

    for (const task of tasks){
        if(task.firstChild.isSameNode(taskContent)){
            task.firstChild.classList.toggle("completed");
        }
    }
}

addTask.addEventListener("click", () => tasksValidate());