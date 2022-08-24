import Task from './task.js';
import addEventListeners from './utils.js';

export default class ToDo {
  constructor() {
    this.todoList = [];
  }

  renderTask(task) {
    // render task to the page
    // ....here's the code to render the li element
    const liElement = document.createElement('li');
    liElement.classList.add('draggable-item');
    liElement.setAttribute('value', task.index);
    liElement.setAttribute('draggable', 'true');

    liElement.innerHTML = `
        <input class="completed-checkbox" type="checkbox">
        <input class="task-description" type="text" name="${task.index}" value="${task.description}">

        <i class="list-icon trash-icon"><ion-icon name="trash-outline"></ion-icon></i>
        <i class="list-icon drag-icon"><ion-icon name="ellipsis-vertical-sharp"></ion-icon></i>
        `;

    // after rendering, add event listeners to the task
    addEventListeners(liElement, this);

    // set checkbox state
    liElement.querySelector('.completed-checkbox').checked = task.completed;
    // Set line-through style to the task description if the checkbox is checked
    liElement.style.textDecoration = task.completed ? 'line-through' : 'none';

    // finally append the liElement to the todo-list
    document.querySelector('#draggable_list').appendChild(liElement);
  }

  updateIndexes() {
    // update list index of the remaining tasks
    document.querySelectorAll('.draggable-item')
      .forEach((item, index) => {
        item.setAttribute('value', index + 1);
        item.querySelector('.task-description').setAttribute('name', index + 1);
      });

    // Must have its own forEach loop because of the way the DOM is structured
    this.todoList.forEach((task, index) => {
      task.index = index + 1;
    });
  }

  addTask(description) {
    const task = new Task(this.todoList.length + 1, description);

    // add task to the array list
    this.todoList.push(task);

    // update local storage
    localStorage.setItem('todo-list', JSON.stringify(this.todoList));

    // render task into the page
    this.renderTask(task);
  }

  removeTask(liElement) {
    // get the index of the task to be removed
    const taskIndex = liElement.value - 1;

    // remove task from the array list
    this.todoList.splice(taskIndex, 1);
    // remove task from the page
    liElement.remove();
    // update list index of the remaining tasks
    this.updateIndexes();
    // update local storage
    localStorage.setItem('todo-list', JSON.stringify(this.todoList));
  }

  updateTask(liElement) {
    // get updated task from the page
    const taskDesc = liElement.querySelector('.task-description').value;
    // get updated checkbox from the page
    const chkState = liElement.querySelector('.completed-checkbox').checked;
    // get task index
    const taskIndex = liElement.value - 1;

    // update task in the array list
    this.todoList[taskIndex].description = taskDesc;
    // update checkbox in the array list
    this.todoList[taskIndex].completed = chkState;
    // update local storage
    localStorage.setItem('todo-list', JSON.stringify(this.todoList));
  }

  clearAllCompleted() {
    // remove all completed tasks from the array list
    this.todoList = this.todoList.filter((task) => !task.completed);
    // remove all completed tasks from the page
    document.querySelectorAll('.draggable-item').forEach((item) => {
      if (item.querySelector('.completed-checkbox').checked) {
        item.remove();
      }
    });

    // update list index of the remaining tasks
    this.updateIndexes();
    // update local storage
    localStorage.setItem('todo-list', JSON.stringify(this.todoList));
  }
}