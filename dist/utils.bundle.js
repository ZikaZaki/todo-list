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
  liElement.querySelector(".completed-checkbox").addEventListener("click", function(){
      liElement.classList.toggle("completed");
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
      if(e.keyCode === 13){
          if(e.target.value.trim() !== ""){
              todoObj.updateTask(liElement);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ087QUFDUDtBQUNPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKGxpRWxlbWVudCwgdG9kb09iail7XHJcbiAgbGlFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcGxldGVkLWNoZWNrYm94XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xyXG4gICAgICBsaUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlZFwiKTtcclxuICB9ICk7XHJcbiAgXHJcbiAgbGlFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kZXNjcmlwdGlvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgZnVuY3Rpb24oKXtcclxuICAgICAgLy8gbGlFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJlZGl0aW5nXCIpO1xyXG4gICAgICBsaUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yPScjZmZlZWE4JztcclxuICAgICAgdGhpcy5zdHlsZS5jdXJzb3IgPSAndGV4dCc7XHJcbiAgICAgIGxpRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZHJhZy1pY29uJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgbGlFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmFzaC1pY29uJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfSApO1xyXG5cclxuICBsaUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRlc2NyaXB0aW9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBmdW5jdGlvbigpe1xyXG4gICAgICAvLyBsaUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImVkaXRpbmdcIik7XHJcbiAgICAgIGxpRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xyXG4gICAgICB0aGlzLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7IFxyXG4gICAgICAgIGxpRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudHJhc2gtaWNvbicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IFxyXG4gICAgICAgIGxpRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZHJhZy1pY29uJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIH0sIDEwMCk7XHJcblxyXG4gICAgICAvLyBJZiBkZXNjcmlwdGlvbiBpcyBlbXB0eSwgcmVtb3ZlIHRoZSB0YXNrIHVzaW5nIHJlbW92ZSgpIGZ1bmN0aW9uIFxyXG4gICAgICBpZih0aGlzLnZhbHVlLnRyaW0oKSA9PSAnJyl7XHJcbiAgICAgICAgICAvLyBsaUVsZW1lbnQucmVtb3ZlKCk7IFxyXG4gICAgICAgICAgdG9kb09iai5yZW1vdmVUYXNrKGxpRWxlbWVudCk7XHJcbiAgICAgIH1lbHNlIHtcclxuICAgICAgICAgIC8vVXBkYXRlIHRoZSB0YXNrIGRlc2NyaXB0aW9uIHZhbHVlIGluIHRoZSBhcnJheSBsaXN0XHJcbiAgICAgICAgICB0b2RvT2JqLnVwZGF0ZVRhc2sobGlFbGVtZW50KTtcclxuICAgICAgfVxyXG4gIH0gKTtcclxuXHJcbiAgbGlFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kZXNjcmlwdGlvblwiKS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xyXG4gICAgICAvLyAhIUNBUkVGVUwhISB5b3UgY2FuIG5vdCB1c2UgdGhpcyB3aGlsZSB1c2luZyBhcnJvdyBmdW5jdGlvblxyXG4gICAgICBpZihlLmtleUNvZGUgPT09IDEzKXtcclxuICAgICAgICAgIGlmKGUudGFyZ2V0LnZhbHVlLnRyaW0oKSAhPT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgdG9kb09iai51cGRhdGVUYXNrKGxpRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgZS50YXJnZXQuYmx1cigpO1xyXG4gICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgIGUudGFyZ2V0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgIHRvZG9PYmoucmVtb3ZlVGFzayhsaUVsZW1lbnQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfSApO1xyXG5cclxuICBsaUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi50cmFzaC1pY29uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xyXG4gICAgICB0b2RvT2JqLnJlbW92ZVRhc2sobGlFbGVtZW50KTtcclxuICAgICAgLy8gbGlFbGVtZW50LnJlbW92ZSgpO1xyXG4gIH0gKTtcclxuXHJcbiAgbGlFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJhZy1pY29uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xyXG4gICAgICBsaUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImRyYWdnYWJsZS1pdGVtXCIpO1xyXG4gIH0gKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckFsbFRvRG9zKHRvZG9PYmplY3Qpe31cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVJZGV4KHRvZG9PYmplY3Qpe31cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9