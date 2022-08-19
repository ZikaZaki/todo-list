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
    constructor(index, description, completed=false){
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


function createToDoList(){
    const todoList = [];
  
    for (let i = 0; i < 5; i += 1){
      todoList.push(new _task_js__WEBPACK_IMPORTED_MODULE_0__["default"](i, `My To Do Task ${i + 1}`, false));
    }
  
    return (todoList);
}

function renderToDoList(taskList) {
    const ul_element = document.createElement('ul');

    taskList.forEach((task) => {
        let is_checked =  true ? task.completed : 0;
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/utils.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ042QjtBQUM3QjtBQUNPO0FBQ1A7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCLHdCQUF3QixnREFBSSxxQkFBcUIsTUFBTTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsS0FBUyxvQkFBb0IsQ0FBVztBQUNqRTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsV0FBVztBQUNoRCxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy91dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcclxuICAgIGNvbnN0cnVjdG9yKGluZGV4LCBkZXNjcmlwdGlvbiwgY29tcGxldGVkPWZhbHNlKXtcclxuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrLmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb0RvTGlzdCgpe1xyXG4gICAgY29uc3QgdG9kb0xpc3QgPSBbXTtcclxuICBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSArPSAxKXtcclxuICAgICAgdG9kb0xpc3QucHVzaChuZXcgVGFzayhpLCBgTXkgVG8gRG8gVGFzayAke2kgKyAxfWAsIGZhbHNlKSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICByZXR1cm4gKHRvZG9MaXN0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRvRG9MaXN0KHRhc2tMaXN0KSB7XHJcbiAgICBjb25zdCB1bF9lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuXHJcbiAgICB0YXNrTGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgbGV0IGlzX2NoZWNrZWQgPSAnY2hlY2tlZCcgPyB0YXNrLmNvbXBsZXRlZCA6ICd1bmNoZWNrZWQnO1xyXG4gICAgICAgIGxldCBsaV9lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBsaV9lbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiICR7aXNfY2hlY2tlZH0+XHJcbiAgICAgICAgICAgICR7dGFzay5kZXNjcmlwdGlvbn1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPGk+PGlvbi1pY29uIG5hbWU9XCJlbGxpcHNpcy12ZXJ0aWNhbC1zaGFycFwiPjwvaW9uLWljb24+PC9pPlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgdWxfZWxlbWVudC5hcHBlbmRDaGlsZChsaV9lbGVtZW50KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB1bF9lbGVtZW50O1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==