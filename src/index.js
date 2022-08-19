import _ from 'lodash';
import './style.css';
import { createToDoList, renderToDoList } from './modules/utils.js';

window.onload = () => {
  const todoList = createToDoList();
  const ul_element = renderToDoList(todoList);
  document.querySelector('#todo_list').appendChild(ul_element);
};
