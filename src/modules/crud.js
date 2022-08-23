import Task from "./task.js";
import { addEventListeners } from "./utils.js";

export default class ToDo {
    constructor(){
        this.todoList = [];
    }
    
    renderTask(task){
        //render task to the page
        // ....here's the code to render the li element
        const liElement = document.createElement("li");
        liElement.classList.add("draggable-item");
        liElement.setAttribute("value", task.index);
        liElement.setAttribute("draggable", "true");
        
        liElement.innerHTML = `
        <input class="completed-checkbox" type="checkbox">
        <input class="task-description" type="text" name="${task.index}" value="${task.description}">

        <i class="list-icon trash-icon"><ion-icon name="trash-outline"></ion-icon></i>
        <i class="list-icon drag-icon"><ion-icon name="ellipsis-vertical-sharp"></ion-icon></i>
        `;

        //after rendering, add event listeners to the task
        addEventListeners(liElement, this);

        //finally append the liElement to the todo-list
        document.querySelector("#draggable_list").appendChild(liElement);
    }

    updateIndexes(){
        //update list index of the remaining tasks
        [...document.querySelectorAll(".draggable-item")]
            .forEach((item, index) => {
                item.setAttribute("value", index + 1);
                item.querySelector(".task-description").setAttribute("name", index + 1);
                this.todoList[index].index = index + 1;
            });
    }

    addTask(description){
        const task = new Task(this.todoList.length + 1, description);
        //add task to the array list
        this.todoList.push(task);
        // console.log("task is pushed", this.todoList);
        //update local storage
        //localStorage.setItem("todoList", JSON.stringify(this.todoList));
        localStorage.setItem('todo-list', JSON.stringify(this.todoList));

        //render task into the page
        this.renderTask(task);
    }

    removeTask(liElement){
        //remove task from the array list
        this.todoList.splice(liElement.value - 1, 1);
        
        //remove task from the page
        liElement.remove();
        
        //update list index of the remaining tasks
        this.updateIndexes();

        // update local storage
        // localStorage.setItem("todoList", JSON.stringify(this.todoList));
        localStorage.setItem('todo-list', JSON.stringify(this.todoList));

    }

    updateTask(liElement){
        //get updated task from the page
        const description = liElement.querySelector(".task-description").value;
        //update task in the array list
        this.todoList[liElement.value - 1].description = description;

        // get updated checkbox from the page
        const chkState = liElement.querySelector(".completed-checkbox").checked;
        // update checkbox in the array list
        this.todoList[liElement.value - 1].completed = chkState;
        
        // console.log(this.todoList);
        
        // update local storage
        // localStorage.setItem("todoList", JSON.stringify(this.todoList));
        localStorage.setItem('todo-list', JSON.stringify(this.todoList));

    }

    clearAllCompleted(){
        //remove all completed tasks from the array list
        this.todoList = this.todoList.filter(task => !task.completed);
        
        //remove all completed tasks from the page
        [...document.querySelectorAll(".draggable-item")]
            .forEach(item => {
                if(item.querySelector(".completed-checkbox").checked){
                    item.remove();
                }
            }
        );
        
        //update list index of the remaining tasks
        this.updateIndexes();
        
        // update local storage
        // localStorage.setItem("todoList", JSON.stringify(this.todoList));
        localStorage.setItem('todo-list', JSON.stringify(this.todoList));
    }
    
}