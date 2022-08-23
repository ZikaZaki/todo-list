"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["utils"],{

/***/ "./src/modules/utils.js":
/*!******************************!*\
  !*** ./src/modules/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addEventListeners": () => (/* binding */ addEventListeners),
/* harmony export */   "renderAllToDos": () => (/* binding */ renderAllToDos),
/* harmony export */   "updateIdex": () => (/* binding */ updateIdex)
/* harmony export */ });
function addEventListeners(liElement, todoObj){
  liElement.querySelector(".completed-checkbox").addEventListener("change", function(){

    // Set line-through style to the task description if the checkbox is checked
    liElement.style.textDecoration = this.checked ? "line-through" : "none";
 
    // Set the value of completed property in the array list
    todoObj.todoList[liElement.value - 1].completed = this.checked;
  } );
  
  liElement.querySelector(".task-description").addEventListener("focus", function(){
      // liElement.classList.add("editing");
      liElement.style.backgroundColor='#ffeea8';
      this.style.cursor = 'text';
      liElement.querySelector('.drag-icon').style.display = 'none';
      liElement.querySelector('.trash-icon').style.display = 'block';
  } );

  liElement.querySelector(".task-description").addEventListener("focusout", function(){
      // liElement.classList.add("editing");
      liElement.style.backgroundColor = 'transparent';
      this.style.cursor = 'default';
      setTimeout(() => { 
        liElement.querySelector('.trash-icon').style.display = 'none'; 
        liElement.querySelector('.drag-icon').style.display = 'block';
      }, 100);

      // If description is empty, remove the task using remove() function 
      if(this.value.trim() == ''){
          // liElement.remove(); 
          todoObj.removeTask(liElement);
      }else {
          //Update the task description value in the array list
          todoObj.updateTask(liElement);
      }
  } );

  liElement.querySelector(".task-description").addEventListener("keydown", (e) => {
      // !!CAREFUL!! you can not use this while using arrow function
      e.preventDefault();

      if(e.keyCode === 13){
          if(e.target.value.trim() !== ""){
              todoObj.updateTask(liElement);
              e.target.value = "";
              e.target.blur();
          }else {
              e.target.remove();
              todoObj.removeTask(liElement);
          }
      }
  } );

  liElement.querySelector(".trash-icon").addEventListener("click", function(){
      todoObj.removeTask(liElement);
      // liElement.remove();
  } );

  liElement.querySelector(".drag-icon").addEventListener("click", function(){
      liElement.classList.toggle("draggable-item");
  } );
}

function renderAllToDos(todoObject){}

function updateIdex(todoObject){}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/utils.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNPO0FBQ1A7QUFDTyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3V0aWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycyhsaUVsZW1lbnQsIHRvZG9PYmope1xyXG4gIGxpRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXBsZXRlZC1jaGVja2JveFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgLy8gU2V0IGxpbmUtdGhyb3VnaCBzdHlsZSB0byB0aGUgdGFzayBkZXNjcmlwdGlvbiBpZiB0aGUgY2hlY2tib3ggaXMgY2hlY2tlZFxyXG4gICAgbGlFbGVtZW50LnN0eWxlLnRleHREZWNvcmF0aW9uID0gdGhpcy5jaGVja2VkID8gXCJsaW5lLXRocm91Z2hcIiA6IFwibm9uZVwiO1xyXG4gXHJcbiAgICAvLyBTZXQgdGhlIHZhbHVlIG9mIGNvbXBsZXRlZCBwcm9wZXJ0eSBpbiB0aGUgYXJyYXkgbGlzdFxyXG4gICAgdG9kb09iai50b2RvTGlzdFtsaUVsZW1lbnQudmFsdWUgLSAxXS5jb21wbGV0ZWQgPSB0aGlzLmNoZWNrZWQ7XHJcbiAgfSApO1xyXG4gIFxyXG4gIGxpRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGVzY3JpcHRpb25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAgIC8vIGxpRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZWRpdGluZ1wiKTtcclxuICAgICAgbGlFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvcj0nI2ZmZWVhOCc7XHJcbiAgICAgIHRoaXMuc3R5bGUuY3Vyc29yID0gJ3RleHQnO1xyXG4gICAgICBsaUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRyYWctaWNvbicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIGxpRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudHJhc2gtaWNvbicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIH0gKTtcclxuXHJcbiAgbGlFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kZXNjcmlwdGlvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgZnVuY3Rpb24oKXtcclxuICAgICAgLy8gbGlFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJlZGl0aW5nXCIpO1xyXG4gICAgICBsaUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcclxuICAgICAgdGhpcy5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBcclxuICAgICAgICBsaUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRyYXNoLWljb24nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyBcclxuICAgICAgICBsaUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRyYWctaWNvbicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICB9LCAxMDApO1xyXG5cclxuICAgICAgLy8gSWYgZGVzY3JpcHRpb24gaXMgZW1wdHksIHJlbW92ZSB0aGUgdGFzayB1c2luZyByZW1vdmUoKSBmdW5jdGlvbiBcclxuICAgICAgaWYodGhpcy52YWx1ZS50cmltKCkgPT0gJycpe1xyXG4gICAgICAgICAgLy8gbGlFbGVtZW50LnJlbW92ZSgpOyBcclxuICAgICAgICAgIHRvZG9PYmoucmVtb3ZlVGFzayhsaUVsZW1lbnQpO1xyXG4gICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAvL1VwZGF0ZSB0aGUgdGFzayBkZXNjcmlwdGlvbiB2YWx1ZSBpbiB0aGUgYXJyYXkgbGlzdFxyXG4gICAgICAgICAgdG9kb09iai51cGRhdGVUYXNrKGxpRWxlbWVudCk7XHJcbiAgICAgIH1cclxuICB9ICk7XHJcblxyXG4gIGxpRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGVzY3JpcHRpb25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcclxuICAgICAgLy8gISFDQVJFRlVMISEgeW91IGNhbiBub3QgdXNlIHRoaXMgd2hpbGUgdXNpbmcgYXJyb3cgZnVuY3Rpb25cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgaWYoZS5rZXlDb2RlID09PSAxMyl7XHJcbiAgICAgICAgICBpZihlLnRhcmdldC52YWx1ZS50cmltKCkgIT09IFwiXCIpe1xyXG4gICAgICAgICAgICAgIHRvZG9PYmoudXBkYXRlVGFzayhsaUVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgICBlLnRhcmdldC5ibHVyKCk7XHJcbiAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgZS50YXJnZXQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgdG9kb09iai5yZW1vdmVUYXNrKGxpRWxlbWVudCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9ICk7XHJcblxyXG4gIGxpRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyYXNoLWljb25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAgIHRvZG9PYmoucmVtb3ZlVGFzayhsaUVsZW1lbnQpO1xyXG4gICAgICAvLyBsaUVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgfSApO1xyXG5cclxuICBsaUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcmFnLWljb25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAgIGxpRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiZHJhZ2dhYmxlLWl0ZW1cIik7XHJcbiAgfSApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQWxsVG9Eb3ModG9kb09iamVjdCl7fVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUlkZXgodG9kb09iamVjdCl7fVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=