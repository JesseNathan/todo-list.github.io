function onKey(event) {
  if(event.key === 'Enter'){
    addTodo()
  }
}

const todoList = [{
  name: 'make dinner',
  dueDate: '2020-1-20'
}];  

renderTodoList()

function renderTodoList() {
  let todoListHTML =  ''

  todoList.forEach((todoObject) => {
      const { name, dueDate } = todoObject
      const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-btn js-delete-todo-btn">Delete</button>`; 
      todoListHTML += html
  })
  document.querySelector('.js-todo-list').innerHTML = todoListHTML

  removeBtn()
}

function removeBtn() {
  document.querySelectorAll('.js-delete-todo-btn')
    .forEach((deleteBtn, index) => {
      deleteBtn.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoList();
      })
    })
}

document.querySelector('.js-add-todo-btn')
  .addEventListener('click', () => {
    addTodo()
  });

  
function addTodo() {  
  const inputElement = document .querySelector('.js-name-input');
  const name = inputElement.value 

  const dateInputElem = document.querySelector('.js-date-input')
  const dueDate = dateInputElem.value;

  todoList.push({
    name,
    dueDate 
  })

  inputElement.value = ''; //Menreset textInput ketika sudah di add dengan empty string
  renderTodoList()
} 




