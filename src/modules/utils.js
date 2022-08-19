import Task from './task.js';

export function createToDoList(){
    const todoList = [];
  
    for (let i = 0; i < 5; i += 1){
      todoList.push(new Task(i, `My To Do Task ${i + 1}`, false));
    }
  
    return (todoList);
}

export function renderToDoList(taskList) {
    const ul_element = document.createElement('ul');

    taskList.forEach((task) => {
        let is_checked = 'checked' ? task.completed : 'unchecked';
        let li_element = document.createElement('li');
        li_element.innerHTML = `
        <span>
            <input type="checkbox" ${is_checked}>
            ${task.description}
        </span>
        <i><ion-icon name="ellipsis-vertical-sharp"></ion-icon></i>
        `;
        ul_element.appendChild(li_element);
    });

    return ul_element;
}
