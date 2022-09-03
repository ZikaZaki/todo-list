import ToDo from './crud.js';
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */

const todo = new ToDo();

describe('ToDo-List: All CRUD Functionalities', () => {
  document.body.innerHTML = `
    <section class="todo-section">
                <div class="section-title">
                    <h2>To-Do List App!</h2>
                    <div class="title-underline"></div>
                </div>
                <div class="todo-list-wrapper">
                    <div class="list-reload">
                        <span>Today's To Do</span><button class="list-icon" id="reload_btn"><i><ion-icon name="sync-outline"></ion-icon></i></button>
                    </div>
                    <form action="#">
                        <div class="input-field">
                            <input id="add_input_field" type="text" placeholder="Add your list...">
                            <button class="list-icon" id="add_task_btn" type="submit"><ion-icon name="return-down-back-sharp"></ion-icon></button>
                        </div>
                        <ul id="draggable_list" class="draggable-list">
                            <!-- To Do List will be injected dynamically via JavaScript -->
                        </ul>
                    </form>
                    <div class="clear-completed">
                        <button  id="clear_all_btn">Clear all completed</button>
                    </div>
                </div>
            </section>`;

  // Testing the Add functionality
  describe('Add Functionality', () => {
    // Test Case 1: Check if the tasks are added to the todoList
    test('Test ToDo-List to have 3 tasks', () => {
      todo.addTask('Test Task 1');
      todo.addTask('Test Task 2');
      todo.addTask('Test Task 3');
      expect(todo.todoList.length).toBe(3);
    });

    // Test Case 2: Check if the tasks are added to the LocalStorage
    test('Test LocalStorage to have 2 tasks', () => {
      todo.addTask('Test Task 4');
      todo.addTask('Test Task 5');
      const todoList = JSON.parse(localStorage.getItem('todo-list'));
      expect(todoList.length).toBe(5);
    });

    // Test Case 3: Check if the tasks are added to the DOM
    test('Test DOM to have 6 tasks', () => {
      todo.addTask('Test Task 6');
      const liElements = document.querySelectorAll('.draggable-item');
      expect(liElements).toHaveLength(6);
    });
  });

  // Testing the Remove functionality
  describe('Remove Functionality', () => {
    // Test Case 1: Check if the task is removed from the todoList
    test('Test ToDo-List to have only 5 tasks left', () => {
      const liElements = document.querySelectorAll('.draggable-item');
      todo.removeTask(liElements[3]);
      expect(todo.todoList.length).toBe(5);
    });

    // Test Case 2: Check if the task is removed from the LocalStorage
    test('Test LocalStorage to have only 5 tasks left', () => {
      const todoList = JSON.parse(localStorage.getItem('todo-list'));
      expect(todoList.length).toBe(5);
    });

    // Test Case 3: Check if the task is removed from the DOM
    test('Test DOM to have only 5 tasks left', () => {
      const liElements = document.querySelectorAll('.draggable-item');
      expect(liElements).toHaveLength(5);
    });
  });

  // Testing the Update functionality
  describe('Update Functionality', () => {
    // Test Case 1: Check if the task is updated in the todoList
    test('Test ToDo-List to have the first task updated', () => {
      const liElements = document.querySelectorAll('.draggable-item');
      liElements[0].querySelector('.task-description').value = 'Test Task 1 Updated';
      liElements[0].querySelector('.completed-checkbox').checked = true;
      todo.updateTask(liElements[0]);
      expect(todo.todoList[0].description).toBe('Test Task 1 Updated');
      expect(todo.todoList[0].completed).toBe(true);
    });

    // Test Case 2: Check if the first task is updated in the LocalStorage
    test('Test LocalStorage to have teh first task updated', () => {
      const todoList = JSON.parse(localStorage.getItem('todo-list'));
      expect(todoList[0].description).toBe('Test Task 1 Updated');
      expect(todoList[0].completed).toBe(true);
    });

    // Test Case 3: Check if the first task is updated in the DOM
    test('Test DOM to have the first task updated', () => {
      const liElements = document.querySelectorAll('.draggable-item');
      const taskDescription = liElements[0].querySelector('.task-description').value;
      const taskStatus = liElements[0].querySelector('.completed-checkbox').checked;
      expect(taskDescription).toBe('Test Task 1 Updated');
      expect(taskStatus).toBe(true);
    });
  });

   // Testing the ClearAllCompleted functionality
   describe('ClearAllCompleted Functionality', () => {
    // Test Case 1: Check if the completed tasks are removed from the todoList
    test('Test ToDo-List to have the completed tasks removed', () => {
      const liElements = document.querySelectorAll('.draggable-item');
      liElements[0].querySelector('.completed-checkbox').checked = true;
      liElements[1].querySelector('.completed-checkbox').checked = false;
      liElements[2].querySelector('.completed-checkbox').checked = true;
      liElements[3].querySelector('.completed-checkbox').checked = true;
      liElements[4].querySelector('.completed-checkbox').checked = false;
      todo.updateTask(liElements[0]);
      todo.updateTask(liElements[2]);
      todo.updateTask(liElements[3]);
      todo.clearAllCompleted();
      expect(todo.todoList.length).toBe(2);
    });

    // Test Case 2: Check if the completed tasks are removed from the LocalStorage
    test('Test LocalStorage to have teh first task updated', () => {
      const todoList = JSON.parse(localStorage.getItem('todo-list'));
      expect(todoList.length).toBe(2);
    });

    // Test Case 3: Check if the completed tasks are removed from the DOM
    test('Test DOM to have the first task updated', () => {
      const liElements = document.querySelectorAll('.draggable-item');
      expect(liElements.length).toBe(2);
    });
  });
});
