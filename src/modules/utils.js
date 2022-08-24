export default function addEventListeners(liElement, todoObj) {
  liElement.querySelector('.completed-checkbox').addEventListener('change', function () {
    // Set line-through style to the task description if the checkbox is checked
    liElement.style.textDecoration = this.checked ? 'line-through' : 'none';
    // Set the value of completed property in the array list
    todoObj.updateTask(liElement);
    // todoObj.todoList[liElement.value - 1].completed = this.checked ? true : false;
  });

  liElement.querySelector('.task-description').addEventListener('focus', function () {
    // liElement editing style;
    liElement.style.backgroundColor = '#ffeea8';
    this.style.cursor = 'text';
    liElement.querySelector('.drag-icon').style.display = 'none';
    liElement.querySelector('.trash-icon').style.display = 'block';
  });

  liElement.querySelector('.task-description').addEventListener('focusout', function () {
    liElement.style.backgroundColor = 'transparent';
    this.style.cursor = 'default';
    setTimeout(() => {
      liElement.querySelector('.trash-icon').style.display = 'none';
      liElement.querySelector('.drag-icon').style.display = 'block';
    }, 100);

    // If description is empty, remove the task using remove() function
    if (this.value.trim() === '') {
      todoObj.removeTask(liElement);
    } else {
      // Update the task description value in the array list
      todoObj.updateTask(liElement);
    }
  });

  liElement.querySelector('.task-description').addEventListener('keydown', (e) => {
    /*
    !!CAREFUL!!: you can not use this while using arrow function.
    !!CAUTION!!: removing nor updating an element in this event
    will cause an error due to conflicting with another event.
     */
    if (e.keyCode === 13) {
      e.target.blur();
    }
  });

  liElement.querySelector('.trash-icon').addEventListener('click', () => {
    todoObj.removeTask(liElement);
    // liElement.remove();
  });

  liElement.querySelector('.drag-icon').addEventListener('click', () => {
    liElement.classList.toggle('draggable-item');
  });
}
