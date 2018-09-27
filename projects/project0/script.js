const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const itemList = []
let checkedNumber = parseInt(0)
let item,itemsNumber;


function newTodo() {
  item = prompt("Enter TODO for your list: ")
  itemList.push(item)
  itemsNumber = parseInt(itemList.length)
  list.innerHTML +=  '<input type="checkbox" id="'+item+'"name="TODO" value="'+item+'"onClick="toggleCheckbox(this)">'+item+"<button id='"+item+"' onclick='removeItem("+item+")'>Delete</button><br>"
  console.log(itemsNumber)
  itemCountSpan.innerHTML = itemsNumber
  uncheckedCountSpan.innerHTML = itemsNumber - checkedNumber
  console.log(classNames.TODO_ITEM)
}
function toggleCheckbox(element) {
  if(element.checked){
    checkedNumber += parseInt(1)
    console.log(checkedNumber)
  }else{
    checkedNumber -= parseInt(1)
  }
  uncheckedCountSpan.innerHTML = itemsNumber - checkedNumber
  console.log(itemsNumber - checkedNumber, itemsNumber,checkedNumber)
  console.log(element.checked)
}
function removeItem(item){
  var ul = document.getElementById("todo-list");
  var element = document.getElementById(item);
  ul.removeChild(element);
}
