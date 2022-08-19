import Task from './task.js';

export function createToDoList() {
  const todoList = [];

  for (let i = 0; i < 5; i += 1) {
    if (i === 1) todoList.push(new Task(i, `My To Do Task ${i + 1}`, true));
    else todoList.push(new Task(i, `My To Do Task ${i + 1}`, false));
  }

  return (todoList);
}

export function renderToDoList(taskList) {
  const ulElement = document.createElement('ul');

  taskList.forEach((task) => {
    const liElement = document.createElement('li');
    let isChecked = 'unchecked';
    if (task.completed) {
      isChecked = 'checked';
      liElement.style.textDecoration = 'line-through';
    }
    liElement.innerHTML = `
        <span>
            <input type="checkbox" ${isChecked}>
            ${task.description}
        </span>
        <i><ion-icon name="ellipsis-vertical-sharp"></ion-icon></i>
        `;
    ulElement.appendChild(liElement);
  });

  return ulElement;
}
