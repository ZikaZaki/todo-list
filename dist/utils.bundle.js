"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["utils"],{

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
/* harmony export */   "createToDoList": () => (/* binding */ createToDoList),
/* harmony export */   "renderToDoList": () => (/* binding */ renderToDoList)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/modules/task.js");


function createToDoList() {
  const todoList = [];

  for (let i = 0; i < 5; i += 1) {
    if (i === 1) todoList.push(new _task_js__WEBPACK_IMPORTED_MODULE_0__["default"](i, `My To Do Task ${i + 1}`, true));
    else todoList.push(new _task_js__WEBPACK_IMPORTED_MODULE_0__["default"](i, `My To Do Task ${i + 1}`, false));
  }

  return (todoList);
}

function renderToDoList(taskList) {
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/utils.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ042Qjs7QUFFdEI7QUFDUDs7QUFFQSxrQkFBa0IsT0FBTztBQUN6QixtQ0FBbUMsZ0RBQUkscUJBQXFCLE1BQU07QUFDbEUsMkJBQTJCLGdEQUFJLHFCQUFxQixNQUFNO0FBQzFEOztBQUVBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsVUFBVTtBQUMvQyxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3V0aWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3RvcihpbmRleCwgZGVzY3JpcHRpb24sIGNvbXBsZXRlZCA9IGZhbHNlKSB7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgfVxufSIsImltcG9ydCBUYXNrIGZyb20gJy4vdGFzay5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb0RvTGlzdCgpIHtcbiAgY29uc3QgdG9kb0xpc3QgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkgKz0gMSkge1xuICAgIGlmIChpID09PSAxKSB0b2RvTGlzdC5wdXNoKG5ldyBUYXNrKGksIGBNeSBUbyBEbyBUYXNrICR7aSArIDF9YCwgdHJ1ZSkpO1xuICAgIGVsc2UgdG9kb0xpc3QucHVzaChuZXcgVGFzayhpLCBgTXkgVG8gRG8gVGFzayAke2kgKyAxfWAsIGZhbHNlKSk7XG4gIH1cblxuICByZXR1cm4gKHRvZG9MaXN0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRvRG9MaXN0KHRhc2tMaXN0KSB7XG4gIGNvbnN0IHVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgdGFza0xpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGNvbnN0IGxpRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGV0IGlzQ2hlY2tlZCA9ICd1bmNoZWNrZWQnO1xuICAgIGlmICh0YXNrLmNvbXBsZXRlZCkge1xuICAgICAgaXNDaGVja2VkID0gJ2NoZWNrZWQnO1xuICAgICAgbGlFbGVtZW50LnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG4gICAgfVxuICAgIGxpRWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiICR7aXNDaGVja2VkfT5cbiAgICAgICAgICAgICR7dGFzay5kZXNjcmlwdGlvbn1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8aT48aW9uLWljb24gbmFtZT1cImVsbGlwc2lzLXZlcnRpY2FsLXNoYXJwXCI+PC9pb24taWNvbj48L2k+XG4gICAgICAgIGA7XG4gICAgdWxFbGVtZW50LmFwcGVuZENoaWxkKGxpRWxlbWVudCk7XG4gIH0pO1xuXG4gIHJldHVybiB1bEVsZW1lbnQ7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=