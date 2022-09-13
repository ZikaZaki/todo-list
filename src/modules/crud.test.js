import ToDo from './crud.js';
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */

const todo = new ToDo();

describe('ToDo-List: Add & Remove', () => {
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
});
