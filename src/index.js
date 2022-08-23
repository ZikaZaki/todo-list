// import _ from 'lodash';
import './style.css';
import ToDo from './crud.js';

/* Global Variables */
const todo = new ToDo();

// Add task input-field keyup event listener
document.querySelector("#add_input_field").addEventListener("keyup", (e) => {
    // console.log(e.target);
    if(e.keyCode === 13 && e.target.value.trim() !== ""){
        todo.addTask(e.target.value);
        e.target.value = "";
    }
});

// Add task button click event listener
document.querySelector("#add_task_btn").addEventListener("click",() => {
    if(document.querySelector("#add_input_field").value.trim() !== "")
        todo.addTask(document.querySelector("#add_input_field").value);
    document.querySelector("#add_input_field").value = "";
});

// Add clear-all-completed button click event listener
document.querySelector("#clear_all_btn").addEventListener("click", todo.clearAllCompleted);

window.onload = () => {
    todo.todoList = JSON.parse(localStorage.getItem('todo-list')) || [];
    // console.log(todo.todoList);
    // console.log(localStorage.getItem('todo-list'));

    //call renderAll function
    if(todo.todoList.length > 0){
        todo.todoList.forEach((task) => todo.renderTask(task));
    }
}
