// import _ from 'lodash';
import './style.css';
import ToDo from './modules/crud.js';

/* Global Variables */
const todo = new ToDo();

// Add task input-field keyup event listener
document.querySelector('#add_input_field').addEventListener('keyup', (e) => {
  // Stop default behaviors
  e.preventDefault();

  if (e.keyCode === 13 && e.target.value.trim() !== '') {
    todo.addTask(e.target.value);

    // reset the input field value
    e.target.value = '';
  }
});

// Add task button click event listener
document.querySelector('#add_task_btn').addEventListener('click', (e) => {
  // Stop default behaviors
  e.preventDefault();

  if (document.querySelector('#add_input_field').value.trim() !== '') {
    todo.addTask(document.querySelector('#add_input_field').value);
  }

  // reset the input field value
  document.querySelector('#add_input_field').value = '';
});

// Add clear-all-completed button click event listener
document.querySelector('#clear_all_btn').addEventListener('click', () => todo.clearAllCompleted());

window.onload = () => {
  // Set local storage.
  todo.todoList = JSON.parse(localStorage.getItem('todo-list')) || [];

  // call renderAll function
  if (todo.todoList.length > 0) {
    todo.todoList.forEach((task) => todo.renderTask(task));
  }
};
