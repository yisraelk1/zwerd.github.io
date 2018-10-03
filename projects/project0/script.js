const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
let todoName = 'task';
let todoUncheck = []
let todoList = []
let todoText = String()
let newelement = ''
let todoNumber = 0

function newTodo() {
  todoNumber += 1;
  todoTask = todoName + todoNumber;
  todoList.push(todoTask);
  todoUncheck.push(todoTask);
  todoText = callPrompt()
  newelement = '<button id="delete'+todoTask+'" onclick="remove(this)">Delete</button>'
               +'<li id="'+todoTask+'" onclick="changeColor(this)">'+todoText+'</li>'
  itemCountSpan.innerHTML = todoList.length
  uncheckedCountSpan.innerHTML = todoUncheck.length
  list.innerHTML += newelement
  document.getElementById(todoTask).style.backgroundColor = 'red'
}

function remove(element){
  let id = element.id.slice(6, element.id.langth)
  list.removeChild(element)
  list.removeChild(document.getElementById(id))
  removeA(todoList, id)
  removeA(todoUncheck, id)
  itemCountSpan.innerHTML = todoList.length
  uncheckedCountSpan.innerHTML = todoUncheck.length
}

function changeColor(element){
  if(element.style.backgroundColor == 'red'){
    element.style.backgroundColor = 'green'
    console.log(todoUncheck.indexOf(element.id))
    removeA(todoUncheck, element.id)
    uncheckedCountSpan.innerHTML = todoUncheck.length
  }else{
    element.style.backgroundColor = 'red'
    todoUncheck.push(element.id)
    uncheckedCountSpan.innerHTML = todoUncheck.length
  }
}

function removeA(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}

function callPrompt(){
  task = prompt("Please enter your task in TODO list: ");
  if(task == ''){
    alert("Not valide task!")
    callPrompt()
  }
 return task;
 }
