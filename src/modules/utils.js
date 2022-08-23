export function addEventListeners(liElement, todoObj){
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
      liElement.style.backgroundColor = 'transparent';
      this.style.cursor = 'default';
      setTimeout(() => { 
        liElement.querySelector('.trash-icon').style.display = 'none'; 
        liElement.querySelector('.drag-icon').style.display = 'block';
      }, 100);

      // If description is empty, remove the task using remove() function 
      if(this.value.trim() === ''){
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

export function renderAllToDos(todoObject){}

export function updateIdex(todoObject){}
