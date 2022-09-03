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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMobGlFbGVtZW50LCB0b2RvT2JqKSB7XHJcbiAgbGlFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wbGV0ZWQtY2hlY2tib3gnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBTZXQgbGluZS10aHJvdWdoIHN0eWxlIHRvIHRoZSB0YXNrIGRlc2NyaXB0aW9uIGlmIHRoZSBjaGVja2JveCBpcyBjaGVja2VkXHJcbiAgICBsaUVsZW1lbnQuc3R5bGUudGV4dERlY29yYXRpb24gPSB0aGlzLmNoZWNrZWQgPyAnbGluZS10aHJvdWdoJyA6ICdub25lJztcclxuICAgIC8vIFNldCB0aGUgdmFsdWUgb2YgY29tcGxldGVkIHByb3BlcnR5IGluIHRoZSBhcnJheSBsaXN0XHJcbiAgICB0b2RvT2JqLnVwZGF0ZVRhc2sobGlFbGVtZW50KTtcclxuICAgIC8vIHRvZG9PYmoudG9kb0xpc3RbbGlFbGVtZW50LnZhbHVlIC0gMV0uY29tcGxldGVkID0gdGhpcy5jaGVja2VkID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH0pO1xyXG5cclxuICBsaUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGVzY3JpcHRpb24nKS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIGxpRWxlbWVudCBlZGl0aW5nIHN0eWxlO1xyXG4gICAgbGlFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZlZWE4JztcclxuICAgIHRoaXMuc3R5bGUuY3Vyc29yID0gJ3RleHQnO1xyXG4gICAgbGlFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcmFnLWljb24nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgbGlFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmFzaC1pY29uJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfSk7XHJcblxyXG4gIGxpRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXNjcmlwdGlvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgbGlFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XHJcbiAgICB0aGlzLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBsaUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRyYXNoLWljb24nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBsaUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRyYWctaWNvbicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfSwgMTAwKTtcclxuXHJcbiAgICAvLyBJZiBkZXNjcmlwdGlvbiBpcyBlbXB0eSwgcmVtb3ZlIHRoZSB0YXNrIHVzaW5nIHJlbW92ZSgpIGZ1bmN0aW9uXHJcbiAgICBpZiAodGhpcy52YWx1ZS50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgIHRvZG9PYmoucmVtb3ZlVGFzayhsaUVsZW1lbnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gVXBkYXRlIHRoZSB0YXNrIGRlc2NyaXB0aW9uIHZhbHVlIGluIHRoZSBhcnJheSBsaXN0XHJcbiAgICAgIHRvZG9PYmoudXBkYXRlVGFzayhsaUVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBsaUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGVzY3JpcHRpb24nKS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcclxuICAgIC8qXHJcbiAgICAhIUNBUkVGVUwhITogeW91IGNhbiBub3QgdXNlIHRoaXMgd2hpbGUgdXNpbmcgYXJyb3cgZnVuY3Rpb24uXHJcbiAgICAhIUNBVVRJT04hITogcmVtb3Zpbmcgbm9yIHVwZGF0aW5nIGFuIGVsZW1lbnQgaW4gdGhpcyBldmVudFxyXG4gICAgd2lsbCBjYXVzZSBhbiBlcnJvciBkdWUgdG8gY29uZmxpY3Rpbmcgd2l0aCBhbm90aGVyIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICBlLnRhcmdldC5ibHVyKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGxpRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudHJhc2gtaWNvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgdG9kb09iai5yZW1vdmVUYXNrKGxpRWxlbWVudCk7XHJcbiAgICAvLyBsaUVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgfSk7XHJcblxyXG4gIGxpRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZHJhZy1pY29uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBsaUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnZHJhZ2dhYmxlLWl0ZW0nKTtcclxuICB9KTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=