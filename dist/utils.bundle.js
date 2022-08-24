"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["utils"],{

/***/ "./src/modules/utils.js":
/*!******************************!*\
  !*** ./src/modules/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addEventListeners)
/* harmony export */ });
function addEventListeners(liElement, todoObj) {
  liElement.querySelector('.completed-checkbox').addEventListener('change', function () {
    console.log('im changed');
    // Set line-through style to the task description if the checkbox is checked
    liElement.style.textDecoration = this.checked ? 'line-through' : 'none';

    // Set the value of completed property in the array list
    // todoObj.updateTask(liElement);
    todoObj.todoList[liElement.value - 1].completed = this.checked ? true : false;
    console.log(this.checked);
    console.log(todoObj.todoList[liElement.value - 1].completed);
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
    // !!CAREFUL!! you can not use this while using arrow function
    if (e.keyCode === 13) {
      if (e.target.value.trim() !== '') {
        todoObj.updateTask(liElement);
        e.target.blur();
      } else {
        e.target.remove();
        todoObj.removeTask(liElement);
      }
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/utils.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3V0aWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKGxpRWxlbWVudCwgdG9kb09iaikge1xuICBsaUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlZC1jaGVja2JveCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZygnaW0gY2hhbmdlZCcpO1xuICAgIC8vIFNldCBsaW5lLXRocm91Z2ggc3R5bGUgdG8gdGhlIHRhc2sgZGVzY3JpcHRpb24gaWYgdGhlIGNoZWNrYm94IGlzIGNoZWNrZWRcbiAgICBsaUVsZW1lbnQuc3R5bGUudGV4dERlY29yYXRpb24gPSB0aGlzLmNoZWNrZWQgPyAnbGluZS10aHJvdWdoJyA6ICdub25lJztcblxuICAgIC8vIFNldCB0aGUgdmFsdWUgb2YgY29tcGxldGVkIHByb3BlcnR5IGluIHRoZSBhcnJheSBsaXN0XG4gICAgLy8gdG9kb09iai51cGRhdGVUYXNrKGxpRWxlbWVudCk7XG4gICAgdG9kb09iai50b2RvTGlzdFtsaUVsZW1lbnQudmFsdWUgLSAxXS5jb21wbGV0ZWQgPSB0aGlzLmNoZWNrZWQgPyB0cnVlIDogZmFsc2U7XG4gICAgY29uc29sZS5sb2codGhpcy5jaGVja2VkKTtcbiAgICBjb25zb2xlLmxvZyh0b2RvT2JqLnRvZG9MaXN0W2xpRWxlbWVudC52YWx1ZSAtIDFdLmNvbXBsZXRlZCk7XG4gIH0pO1xuXG4gIGxpRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXNjcmlwdGlvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZnVuY3Rpb24gKCkge1xuICAgIC8vIGxpRWxlbWVudCBlZGl0aW5nIHN0eWxlO1xuICAgIGxpRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZWVhOCc7XG4gICAgdGhpcy5zdHlsZS5jdXJzb3IgPSAndGV4dCc7XG4gICAgbGlFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcmFnLWljb24nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGxpRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudHJhc2gtaWNvbicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9KTtcblxuICBsaUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGVzY3JpcHRpb24nKS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIGZ1bmN0aW9uICgpIHtcbiAgICBsaUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICB0aGlzLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxpRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudHJhc2gtaWNvbicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBsaUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRyYWctaWNvbicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH0sIDEwMCk7XG5cbiAgICAvLyBJZiBkZXNjcmlwdGlvbiBpcyBlbXB0eSwgcmVtb3ZlIHRoZSB0YXNrIHVzaW5nIHJlbW92ZSgpIGZ1bmN0aW9uXG4gICAgaWYgKHRoaXMudmFsdWUudHJpbSgpID09PSAnJykge1xuICAgICAgdG9kb09iai5yZW1vdmVUYXNrKGxpRWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFVwZGF0ZSB0aGUgdGFzayBkZXNjcmlwdGlvbiB2YWx1ZSBpbiB0aGUgYXJyYXkgbGlzdFxuICAgICAgdG9kb09iai51cGRhdGVUYXNrKGxpRWxlbWVudCk7XG4gICAgfVxuICB9KTtcblxuICBsaUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGVzY3JpcHRpb24nKS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAvLyAhIUNBUkVGVUwhISB5b3UgY2FuIG5vdCB1c2UgdGhpcyB3aGlsZSB1c2luZyBhcnJvdyBmdW5jdGlvblxuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICBpZiAoZS50YXJnZXQudmFsdWUudHJpbSgpICE9PSAnJykge1xuICAgICAgICB0b2RvT2JqLnVwZGF0ZVRhc2sobGlFbGVtZW50KTtcbiAgICAgICAgZS50YXJnZXQuYmx1cigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZS50YXJnZXQucmVtb3ZlKCk7XG4gICAgICAgIHRvZG9PYmoucmVtb3ZlVGFzayhsaUVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgbGlFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmFzaC1pY29uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdG9kb09iai5yZW1vdmVUYXNrKGxpRWxlbWVudCk7XG4gICAgLy8gbGlFbGVtZW50LnJlbW92ZSgpO1xuICB9KTtcblxuICBsaUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRyYWctaWNvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGxpRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdkcmFnZ2FibGUtaXRlbScpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==