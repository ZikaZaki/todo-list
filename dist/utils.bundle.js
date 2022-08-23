"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["utils"],{

/***/ "./src/modules/crud.js":
/*!*****************************!*\
  !*** ./src/modules/crud.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoList)
/* harmony export */ });
/* harmony import */ var _utils2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils2.js */ "./utils2.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");



class TodoList {
    constructor(){
        this.todoList = [];
    }

    addTask(task){
        this.todoList.push(task);
        this.renderTask(task);
        localStorage.setItem('todo-List', JSON.stringify(this.todoList));
    }

    removeTask(liElement){
        let chkIndex = liElement.querySelector('.complete-checkbox').value;
        liElement.remove();
        this.todoList = this.todoList.filter((task) => (task.index != chkIndex));
        localStorage.setItem('todo-List', JSON.stringify(this.todoList));
        return this.todoList;
    }

   renderTask(task){
        let liElement = document.createElement('li');
          liElement.innerHTML = `
              <input class="complete-checkbox" type="checkbox" value="${task.index}" >
              <input class="task-txt" type="text" name="${task.index}" value="${task.description}">
      
              <i class="list-icon trash-icon"><ion-icon name="trash-outline"></ion-icon></i>
              <i class="list-icon drag-icon"><ion-icon name="ellipsis-vertical-sharp"></ion-icon></i>
          `;
          // Add event listener to the checkboxes
          let checkbox = liElement.querySelector('.complete-checkbox');
          checkbox.checked = task.completed;
          checkbox.addEventListener('change', () => {
            this.todoList = (0,_utils2_js__WEBPACK_IMPORTED_MODULE_0__.checkChange)(checkbox, this.todoList);
            console.log(this.todoList);
        });

      // Add OnFocus event listener to the text-input
        let taskInput = liElement.querySelector('.task-txt');
        taskInput.addEventListener('focus', (e) => {
            e.target.parentElement.style.backgroundColor='#ffeea8';
            taskInput.style.cursor = 'text';
            e.target.parentElement.querySelector('.drag-icon').style.display = 'none';
            e.target.parentElement.querySelector('.trash-icon').style.display = 'block';
        });
      
      // Add OnFocusOut event listener to the text-input
        taskInput.addEventListener('focusout', (e) => {
            e.target.parentElement.style.backgroundColor = 'transparent';
            taskInput.style.cursor = 'default';
            setTimeout(() => { 
                e.target.parentElement.querySelector('.trash-icon').style.display = 'none'; 
                e.target.parentElement.querySelector('.drag-icon').style.display = 'block';
            }, 100);
            if(taskInput.value === '') {
                this.removeTask(e.target.parentElement);
            }else{
                this.todoList.find((task) => (task.index == taskInput.name)).description = taskInput.value;
                localStorage.setItem('todo-List', JSON.stringify(this.todoList));
                // this.todoList.forEach((task) => {
                //     if(task.index == taskInput.name){
                //     task.description = taskInput.value;
                //     return;
                //     }
                // });
            }
        });

        // Add event listener to the trash-icon
        liElement.querySelector('.trash-icon').addEventListener('click', (e) => {
            this.removeTask(e.target.parentElement, this.todoList);
            console.log(this.todoList);
        });

        document.querySelector('#todo_list').appendChild(liElement);
    }
}




/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
  constructor(index, description, completed = false) {
    this.index = index;
    this.description = description;
    this.completed = completed;
  }
}

/***/ }),

/***/ "./src/modules/utils.js":
/*!******************************!*\
  !*** ./src/modules/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkChange": () => (/* binding */ checkChange),
/* harmony export */   "clearCompleted": () => (/* binding */ clearCompleted),
/* harmony export */   "createToDoList": () => (/* binding */ createToDoList),
/* harmony export */   "renderToDoList": () => (/* binding */ renderToDoList)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/modules/task.js");
/* harmony import */ var _crud_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crud.js */ "./src/modules/crud.js");



function createToDoList() {
  let taskList = [];

  for (let i = 0; i < 5; i += 1) {
    if (i === 0) taskList.push(new _task_js__WEBPACK_IMPORTED_MODULE_0__["default"](i + 1, `My To Do Task ${i + 1}`, true));
    else taskList.push(new _task_js__WEBPACK_IMPORTED_MODULE_0__["default"](i + 1, `My To Do Task ${i + 1}`, false));
  }

  return taskList;
}

function renderToDoList(todoList) {
  // Reset the list before rendering
  document.querySelector('#todo_list').innerHTML = '';
  todoList.todoList.forEach((task) => todoList.renderTask(task));
}

function clearCompleted(todoList) {
  todoList.todoList.forEach((task) => (task.completed).removeTask(task));
  renderToDoList(todoList);
}

function checkChange(chk, todoList) {
  chk.parentElement.querySelector('.task-txt').style.textDecoration = chk.checked ? 'line-through'  : 'none';
  // Update the taskList
  return todoList.todoList.filter((task) =>(task.index == chk.value).completed = chk.checked);

  // return taskList.map((task)=>{
  //   if(task.index == chk.value){
  //     task.completed = chk.checked;
  //   }
  //   return task;
  // });
}

/***/ }),

/***/ "./utils2.js":
/*!*******************!*\
  !*** ./utils2.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkChange": () => (/* binding */ checkChange),
/* harmony export */   "clearCompleted": () => (/* binding */ clearCompleted),
/* harmony export */   "createToDoList": () => (/* binding */ createToDoList),
/* harmony export */   "renderTask": () => (/* binding */ renderTask),
/* harmony export */   "renderToDoList": () => (/* binding */ renderToDoList)
/* harmony export */ });
/* harmony import */ var _src_modules_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/modules/task.js */ "./src/modules/task.js");

// import { removeTask } from './crud.js';

function createToDoList() {
  let taskList = [];

  for (let i = 0; i < 5; i += 1) {
    if (i === 0) taskList.push(new _src_modules_task_js__WEBPACK_IMPORTED_MODULE_0__["default"](i + 1, `My To Do Task ${i + 1}`, true));
    else taskList.push(new _src_modules_task_js__WEBPACK_IMPORTED_MODULE_0__["default"](i + 1, `My To Do Task ${i + 1}`, false));
  }

  return taskList;
}

function renderToDoList(taskList) {
  // Reset the list before rendering
  document.querySelector('#todo_list').innerHTML = '';

  // Render the list items
  taskList.forEach((task) => {
    let liElement = document.createElement('li');
    liElement.innerHTML = `
        <input class="complete-checkbox" type="checkbox" value="${task.index}" >
        <input class="task-txt" type="text" name="${task.index}" value="${task.description}">

        <i class="list-icon trash-icon"><ion-icon name="trash-outline"></ion-icon></i>
        <i class="list-icon drag-icon"><ion-icon name="ellipsis-vertical-sharp"></ion-icon></i>
      `;

    // Add event listener to the checkboxes
    let checkbox = liElement.querySelector('.complete-checkbox');
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => {
      taskList = checkChange(checkbox, taskList);
      console.log(taskList);
    });
    
    checkChange(checkbox, taskList);

    // Add event listener to the trash-icon
    liElement.querySelector('.trash-icon').addEventListener('click', () => {
      taskList = removeTask(liElement, taskList);
      console.log(taskList);
    });
    
    const taskTxt = liElement.querySelector('.task-txt');
      // Add OnFocus event listener to the text-input
      taskTxt.addEventListener('focus', () => {
        liElement.style.backgroundColor='#ffeea8';
        taskTxt.style.cursor = 'text';
        liElement.querySelector('.drag-icon').style.display = 'none';
        liElement.querySelector('.trash-icon').style.display = 'block';
      });
      // Add OnFocusOut event listener to the text-input
      taskTxt.addEventListener('focusout', ()=> {
        liElement.style.backgroundColor = 'transparent';
        taskTxt.style.cursor = 'default';
        setTimeout(() => { 
          liElement.querySelector('.trash-icon').style.display = 'none'; 
          liElement.querySelector('.drag-icon').style.display = 'block';
        }, 100);
        // liElement.querySelector('.trash-icon').style.display = 'none';
        if(taskTxt.value === '') {
          // taskList = taskList.filter((task) => {
          //   return (task.index != taskTxt.name); 
          // });
          // liElement.remove();
          taskList = removeTask(liElement, taskList);
        }else{
          taskList = taskList.filter((task)=>{
            if(task.index == taskTxt.name){
              task.description = taskTxt.value;
            }
            return task;
          });
        }
      });
      document.querySelector('#todo_list').appendChild(liElement);
  });


  
}

function renderTask(task){
  let liElement = document.createElement('li');
    liElement.innerHTML = `
        <input class="complete-checkbox" type="checkbox" value="${task.index}" >
        <input class="task-txt" type="text" name="${task.index}" value="${task.description}">

        <i class="list-icon trash-icon"><ion-icon name="trash-outline"></ion-icon></i>
        <i class="list-icon drag-icon"><ion-icon name="ellipsis-vertical-sharp"></ion-icon></i>
    `;
    // Add event listener to the checkboxes
    let checkbox = liElement.querySelector('.complete-checkbox');
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => {
      taskList = checkChange(checkbox, taskList);
      console.log(taskList);
    });
    
    checkChange(checkbox, taskList);
}
function clearCompleted(taskList) {
  let index = 1;
  taskList = taskList.filter((task) => {
    if (!task.completed){
      task.index = index;
      index += 1;
      return task;
    }
  });
  return taskList;
}

function checkChange(chk, taskList) {
  chk.parentElement.querySelector('.task-txt').style.textDecoration = chk.checked ? 'line-through'  : 'none';
  // Update the taskList
  return taskList.map((task)=>{
    if(task.index == chk.value){
      task.completed = chk.checked;
    }
    return task;
  });
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/utils.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vdXRpbHMyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNoZWNrQ2hhbmdlIH0gZnJvbSAnLi4vLi4vdXRpbHMyLmpzJztcclxuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9MaXN0IHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy50b2RvTGlzdCA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRhc2sodGFzayl7XHJcbiAgICAgICAgdGhpcy50b2RvTGlzdC5wdXNoKHRhc2spO1xyXG4gICAgICAgIHRoaXMucmVuZGVyVGFzayh0YXNrKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kby1MaXN0JywgSlNPTi5zdHJpbmdpZnkodGhpcy50b2RvTGlzdCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVRhc2sobGlFbGVtZW50KXtcclxuICAgICAgICBsZXQgY2hrSW5kZXggPSBsaUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlLWNoZWNrYm94JykudmFsdWU7XHJcbiAgICAgICAgbGlFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMudG9kb0xpc3QgPSB0aGlzLnRvZG9MaXN0LmZpbHRlcigodGFzaykgPT4gKHRhc2suaW5kZXggIT0gY2hrSW5kZXgpKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kby1MaXN0JywgSlNPTi5zdHJpbmdpZnkodGhpcy50b2RvTGlzdCkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvZG9MaXN0O1xyXG4gICAgfVxyXG5cclxuICAgcmVuZGVyVGFzayh0YXNrKXtcclxuICAgICAgICBsZXQgbGlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgIGxpRWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiY29tcGxldGUtY2hlY2tib3hcIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIiR7dGFzay5pbmRleH1cIiA+XHJcbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwidGFzay10eHRcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCIke3Rhc2suaW5kZXh9XCIgdmFsdWU9XCIke3Rhc2suZGVzY3JpcHRpb259XCI+XHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwibGlzdC1pY29uIHRyYXNoLWljb25cIj48aW9uLWljb24gbmFtZT1cInRyYXNoLW91dGxpbmVcIj48L2lvbi1pY29uPjwvaT5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImxpc3QtaWNvbiBkcmFnLWljb25cIj48aW9uLWljb24gbmFtZT1cImVsbGlwc2lzLXZlcnRpY2FsLXNoYXJwXCI+PC9pb24taWNvbj48L2k+XHJcbiAgICAgICAgICBgO1xyXG4gICAgICAgICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBjaGVja2JveGVzXHJcbiAgICAgICAgICBsZXQgY2hlY2tib3ggPSBsaUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlLWNoZWNrYm94Jyk7XHJcbiAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdGFzay5jb21wbGV0ZWQ7XHJcbiAgICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudG9kb0xpc3QgPSBjaGVja0NoYW5nZShjaGVja2JveCwgdGhpcy50b2RvTGlzdCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudG9kb0xpc3QpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gQWRkIE9uRm9jdXMgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIHRleHQtaW5wdXRcclxuICAgICAgICBsZXQgdGFza0lucHV0ID0gbGlFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXR4dCcpO1xyXG4gICAgICAgIHRhc2tJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yPScjZmZlZWE4JztcclxuICAgICAgICAgICAgdGFza0lucHV0LnN0eWxlLmN1cnNvciA9ICd0ZXh0JztcclxuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZHJhZy1pY29uJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudHJhc2gtaWNvbicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgLy8gQWRkIE9uRm9jdXNPdXQgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIHRleHQtaW5wdXRcclxuICAgICAgICB0YXNrSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XHJcbiAgICAgICAgICAgIHRhc2tJbnB1dC5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRyYXNoLWljb24nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyBcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRyYWctaWNvbicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICBpZih0YXNrSW5wdXQudmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVRhc2soZS50YXJnZXQucGFyZW50RWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2RvTGlzdC5maW5kKCh0YXNrKSA9PiAodGFzay5pbmRleCA9PSB0YXNrSW5wdXQubmFtZSkpLmRlc2NyaXB0aW9uID0gdGFza0lucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG8tTGlzdCcsIEpTT04uc3RyaW5naWZ5KHRoaXMudG9kb0xpc3QpKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMudG9kb0xpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGlmKHRhc2suaW5kZXggPT0gdGFza0lucHV0Lm5hbWUpe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRhc2suZGVzY3JpcHRpb24gPSB0YXNrSW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byB0aGUgdHJhc2gtaWNvblxyXG4gICAgICAgIGxpRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudHJhc2gtaWNvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVUYXNrKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQsIHRoaXMudG9kb0xpc3QpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRvZG9MaXN0KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9fbGlzdCcpLmFwcGVuZENoaWxkKGxpRWxlbWVudCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcclxuICBjb25zdHJ1Y3RvcihpbmRleCwgZGVzY3JpcHRpb24sIGNvbXBsZXRlZCA9IGZhbHNlKSB7XHJcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcclxuICB9XHJcbn0iLCJpbXBvcnQgVGFzayBmcm9tICcuL3Rhc2suanMnO1xyXG5pbXBvcnQgVG9kb0xpc3QgZnJvbSAnLi9jcnVkLmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb0RvTGlzdCgpIHtcclxuICBsZXQgdGFza0xpc3QgPSBbXTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpICs9IDEpIHtcclxuICAgIGlmIChpID09PSAwKSB0YXNrTGlzdC5wdXNoKG5ldyBUYXNrKGkgKyAxLCBgTXkgVG8gRG8gVGFzayAke2kgKyAxfWAsIHRydWUpKTtcclxuICAgIGVsc2UgdGFza0xpc3QucHVzaChuZXcgVGFzayhpICsgMSwgYE15IFRvIERvIFRhc2sgJHtpICsgMX1gLCBmYWxzZSkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRhc2tMaXN0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVG9Eb0xpc3QodG9kb0xpc3QpIHtcclxuICAvLyBSZXNldCB0aGUgbGlzdCBiZWZvcmUgcmVuZGVyaW5nXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9fbGlzdCcpLmlubmVySFRNTCA9ICcnO1xyXG4gIHRvZG9MaXN0LnRvZG9MaXN0LmZvckVhY2goKHRhc2spID0+IHRvZG9MaXN0LnJlbmRlclRhc2sodGFzaykpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJDb21wbGV0ZWQodG9kb0xpc3QpIHtcclxuICB0b2RvTGlzdC50b2RvTGlzdC5mb3JFYWNoKCh0YXNrKSA9PiAodGFzay5jb21wbGV0ZWQpLnJlbW92ZVRhc2sodGFzaykpO1xyXG4gIHJlbmRlclRvRG9MaXN0KHRvZG9MaXN0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQ2hhbmdlKGNoaywgdG9kb0xpc3QpIHtcclxuICBjaGsucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay10eHQnKS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IGNoay5jaGVja2VkID8gJ2xpbmUtdGhyb3VnaCcgIDogJ25vbmUnO1xyXG4gIC8vIFVwZGF0ZSB0aGUgdGFza0xpc3RcclxuICByZXR1cm4gdG9kb0xpc3QudG9kb0xpc3QuZmlsdGVyKCh0YXNrKSA9Pih0YXNrLmluZGV4ID09IGNoay52YWx1ZSkuY29tcGxldGVkID0gY2hrLmNoZWNrZWQpO1xyXG5cclxuICAvLyByZXR1cm4gdGFza0xpc3QubWFwKCh0YXNrKT0+e1xyXG4gIC8vICAgaWYodGFzay5pbmRleCA9PSBjaGsudmFsdWUpe1xyXG4gIC8vICAgICB0YXNrLmNvbXBsZXRlZCA9IGNoay5jaGVja2VkO1xyXG4gIC8vICAgfVxyXG4gIC8vICAgcmV0dXJuIHRhc2s7XHJcbiAgLy8gfSk7XHJcbn0iLCJpbXBvcnQgVGFzayBmcm9tICcuL3NyYy9tb2R1bGVzL3Rhc2suanMnO1xyXG4vLyBpbXBvcnQgeyByZW1vdmVUYXNrIH0gZnJvbSAnLi9jcnVkLmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb0RvTGlzdCgpIHtcclxuICBsZXQgdGFza0xpc3QgPSBbXTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpICs9IDEpIHtcclxuICAgIGlmIChpID09PSAwKSB0YXNrTGlzdC5wdXNoKG5ldyBUYXNrKGkgKyAxLCBgTXkgVG8gRG8gVGFzayAke2kgKyAxfWAsIHRydWUpKTtcclxuICAgIGVsc2UgdGFza0xpc3QucHVzaChuZXcgVGFzayhpICsgMSwgYE15IFRvIERvIFRhc2sgJHtpICsgMX1gLCBmYWxzZSkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRhc2tMaXN0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVG9Eb0xpc3QodGFza0xpc3QpIHtcclxuICAvLyBSZXNldCB0aGUgbGlzdCBiZWZvcmUgcmVuZGVyaW5nXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9fbGlzdCcpLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAvLyBSZW5kZXIgdGhlIGxpc3QgaXRlbXNcclxuICB0YXNrTGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICBsZXQgbGlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGxpRWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGlucHV0IGNsYXNzPVwiY29tcGxldGUtY2hlY2tib3hcIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIiR7dGFzay5pbmRleH1cIiA+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzPVwidGFzay10eHRcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCIke3Rhc2suaW5kZXh9XCIgdmFsdWU9XCIke3Rhc2suZGVzY3JpcHRpb259XCI+XHJcblxyXG4gICAgICAgIDxpIGNsYXNzPVwibGlzdC1pY29uIHRyYXNoLWljb25cIj48aW9uLWljb24gbmFtZT1cInRyYXNoLW91dGxpbmVcIj48L2lvbi1pY29uPjwvaT5cclxuICAgICAgICA8aSBjbGFzcz1cImxpc3QtaWNvbiBkcmFnLWljb25cIj48aW9uLWljb24gbmFtZT1cImVsbGlwc2lzLXZlcnRpY2FsLXNoYXJwXCI+PC9pb24taWNvbj48L2k+XHJcbiAgICAgIGA7XHJcblxyXG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBjaGVja2JveGVzXHJcbiAgICBsZXQgY2hlY2tib3ggPSBsaUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlLWNoZWNrYm94Jyk7XHJcbiAgICBjaGVja2JveC5jaGVja2VkID0gdGFzay5jb21wbGV0ZWQ7XHJcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgIHRhc2tMaXN0ID0gY2hlY2tDaGFuZ2UoY2hlY2tib3gsIHRhc2tMaXN0KTtcclxuICAgICAgY29uc29sZS5sb2codGFza0xpc3QpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGNoZWNrQ2hhbmdlKGNoZWNrYm94LCB0YXNrTGlzdCk7XHJcblxyXG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSB0cmFzaC1pY29uXHJcbiAgICBsaUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRyYXNoLWljb24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGFza0xpc3QgPSByZW1vdmVUYXNrKGxpRWxlbWVudCwgdGFza0xpc3QpO1xyXG4gICAgICBjb25zb2xlLmxvZyh0YXNrTGlzdCk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgY29uc3QgdGFza1R4dCA9IGxpRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay10eHQnKTtcclxuICAgICAgLy8gQWRkIE9uRm9jdXMgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIHRleHQtaW5wdXRcclxuICAgICAgdGFza1R4dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcclxuICAgICAgICBsaUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yPScjZmZlZWE4JztcclxuICAgICAgICB0YXNrVHh0LnN0eWxlLmN1cnNvciA9ICd0ZXh0JztcclxuICAgICAgICBsaUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRyYWctaWNvbicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgbGlFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmFzaC1pY29uJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBBZGQgT25Gb2N1c091dCBldmVudCBsaXN0ZW5lciB0byB0aGUgdGV4dC1pbnB1dFxyXG4gICAgICB0YXNrVHh0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKCk9PiB7XHJcbiAgICAgICAgbGlFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XHJcbiAgICAgICAgdGFza1R4dC5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IFxyXG4gICAgICAgICAgbGlFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmFzaC1pY29uJykuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgXHJcbiAgICAgICAgICBsaUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRyYWctaWNvbicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgLy8gbGlFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmFzaC1pY29uJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBpZih0YXNrVHh0LnZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgLy8gdGFza0xpc3QgPSB0YXNrTGlzdC5maWx0ZXIoKHRhc2spID0+IHtcclxuICAgICAgICAgIC8vICAgcmV0dXJuICh0YXNrLmluZGV4ICE9IHRhc2tUeHQubmFtZSk7IFxyXG4gICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAvLyBsaUVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICB0YXNrTGlzdCA9IHJlbW92ZVRhc2sobGlFbGVtZW50LCB0YXNrTGlzdCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0YXNrTGlzdCA9IHRhc2tMaXN0LmZpbHRlcigodGFzayk9PntcclxuICAgICAgICAgICAgaWYodGFzay5pbmRleCA9PSB0YXNrVHh0Lm5hbWUpe1xyXG4gICAgICAgICAgICAgIHRhc2suZGVzY3JpcHRpb24gPSB0YXNrVHh0LnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0YXNrO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9fbGlzdCcpLmFwcGVuZENoaWxkKGxpRWxlbWVudCk7XHJcbiAgfSk7XHJcblxyXG5cclxuICBcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRhc2sodGFzayl7XHJcbiAgbGV0IGxpRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBsaUVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxpbnB1dCBjbGFzcz1cImNvbXBsZXRlLWNoZWNrYm94XCIgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCIke3Rhc2suaW5kZXh9XCIgPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzcz1cInRhc2stdHh0XCIgdHlwZT1cInRleHRcIiBuYW1lPVwiJHt0YXNrLmluZGV4fVwiIHZhbHVlPVwiJHt0YXNrLmRlc2NyaXB0aW9ufVwiPlxyXG5cclxuICAgICAgICA8aSBjbGFzcz1cImxpc3QtaWNvbiB0cmFzaC1pY29uXCI+PGlvbi1pY29uIG5hbWU9XCJ0cmFzaC1vdXRsaW5lXCI+PC9pb24taWNvbj48L2k+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJsaXN0LWljb24gZHJhZy1pY29uXCI+PGlvbi1pY29uIG5hbWU9XCJlbGxpcHNpcy12ZXJ0aWNhbC1zaGFycFwiPjwvaW9uLWljb24+PC9pPlxyXG4gICAgYDtcclxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byB0aGUgY2hlY2tib3hlc1xyXG4gICAgbGV0IGNoZWNrYm94ID0gbGlFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wbGV0ZS1jaGVja2JveCcpO1xyXG4gICAgY2hlY2tib3guY2hlY2tlZCA9IHRhc2suY29tcGxldGVkO1xyXG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICB0YXNrTGlzdCA9IGNoZWNrQ2hhbmdlKGNoZWNrYm94LCB0YXNrTGlzdCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRhc2tMaXN0KTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBjaGVja0NoYW5nZShjaGVja2JveCwgdGFza0xpc3QpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhckNvbXBsZXRlZCh0YXNrTGlzdCkge1xyXG4gIGxldCBpbmRleCA9IDE7XHJcbiAgdGFza0xpc3QgPSB0YXNrTGlzdC5maWx0ZXIoKHRhc2spID0+IHtcclxuICAgIGlmICghdGFzay5jb21wbGV0ZWQpe1xyXG4gICAgICB0YXNrLmluZGV4ID0gaW5kZXg7XHJcbiAgICAgIGluZGV4ICs9IDE7XHJcbiAgICAgIHJldHVybiB0YXNrO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiB0YXNrTGlzdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQ2hhbmdlKGNoaywgdGFza0xpc3QpIHtcclxuICBjaGsucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay10eHQnKS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IGNoay5jaGVja2VkID8gJ2xpbmUtdGhyb3VnaCcgIDogJ25vbmUnO1xyXG4gIC8vIFVwZGF0ZSB0aGUgdGFza0xpc3RcclxuICByZXR1cm4gdGFza0xpc3QubWFwKCh0YXNrKT0+e1xyXG4gICAgaWYodGFzay5pbmRleCA9PSBjaGsudmFsdWUpe1xyXG4gICAgICB0YXNrLmNvbXBsZXRlZCA9IGNoay5jaGVja2VkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRhc2s7XHJcbiAgfSk7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=