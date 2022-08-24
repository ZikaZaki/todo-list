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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/utils.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMobGlFbGVtZW50LCB0b2RvT2JqKSB7XG4gIGxpRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGVkLWNoZWNrYm94JykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgIC8vIFNldCBsaW5lLXRocm91Z2ggc3R5bGUgdG8gdGhlIHRhc2sgZGVzY3JpcHRpb24gaWYgdGhlIGNoZWNrYm94IGlzIGNoZWNrZWRcbiAgICBsaUVsZW1lbnQuc3R5bGUudGV4dERlY29yYXRpb24gPSB0aGlzLmNoZWNrZWQgPyAnbGluZS10aHJvdWdoJyA6ICdub25lJztcbiAgICAvLyBTZXQgdGhlIHZhbHVlIG9mIGNvbXBsZXRlZCBwcm9wZXJ0eSBpbiB0aGUgYXJyYXkgbGlzdFxuICAgIHRvZG9PYmoudXBkYXRlVGFzayhsaUVsZW1lbnQpO1xuICAgIC8vIHRvZG9PYmoudG9kb0xpc3RbbGlFbGVtZW50LnZhbHVlIC0gMV0uY29tcGxldGVkID0gdGhpcy5jaGVja2VkID8gdHJ1ZSA6IGZhbHNlO1xuICB9KTtcblxuICBsaUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGVzY3JpcHRpb24nKS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBsaUVsZW1lbnQgZWRpdGluZyBzdHlsZTtcbiAgICBsaUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmVlYTgnO1xuICAgIHRoaXMuc3R5bGUuY3Vyc29yID0gJ3RleHQnO1xuICAgIGxpRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZHJhZy1pY29uJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBsaUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRyYXNoLWljb24nKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfSk7XG5cbiAgbGlFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRlc2NyaXB0aW9uJykuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgbGlFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgdGhpcy5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsaUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRyYXNoLWljb24nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgbGlFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcmFnLWljb24nKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9LCAxMDApO1xuXG4gICAgLy8gSWYgZGVzY3JpcHRpb24gaXMgZW1wdHksIHJlbW92ZSB0aGUgdGFzayB1c2luZyByZW1vdmUoKSBmdW5jdGlvblxuICAgIGlmICh0aGlzLnZhbHVlLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgIHRvZG9PYmoucmVtb3ZlVGFzayhsaUVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBVcGRhdGUgdGhlIHRhc2sgZGVzY3JpcHRpb24gdmFsdWUgaW4gdGhlIGFycmF5IGxpc3RcbiAgICAgIHRvZG9PYmoudXBkYXRlVGFzayhsaUVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG5cbiAgbGlFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRlc2NyaXB0aW9uJykuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgLypcbiAgICAhIUNBUkVGVUwhITogeW91IGNhbiBub3QgdXNlIHRoaXMgd2hpbGUgdXNpbmcgYXJyb3cgZnVuY3Rpb24uXG4gICAgISFDQVVUSU9OISE6IHJlbW92aW5nIG5vciB1cGRhdGluZyBhbiBlbGVtZW50IGluIHRoaXMgZXZlbnRcbiAgICB3aWxsIGNhdXNlIGFuIGVycm9yIGR1ZSB0byBjb25mbGljdGluZyB3aXRoIGFub3RoZXIgZXZlbnQuXG4gICAgICovXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIGUudGFyZ2V0LmJsdXIoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGxpRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudHJhc2gtaWNvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRvZG9PYmoucmVtb3ZlVGFzayhsaUVsZW1lbnQpO1xuICAgIC8vIGxpRWxlbWVudC5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgbGlFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcmFnLWljb24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsaUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnZHJhZ2dhYmxlLWl0ZW0nKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=