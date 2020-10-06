/*
 * 1) TODO'ya tekrar basılınca, todo durumu eski haline gelsin
 *    İpucu (Tek bir satırda değişiklik yapılacak)
 *
 * 2) Todo silme operasyonu
 **/

const todoList = [];
const todoListElement = document.querySelector('#myUL');
document.querySelector('#todo_button').addEventListener('click', addTodo);

// console.log(todoListElement);


function addTodo () {
  const todoText = document.querySelector('#myInput').value;

    const todoObject = {
      // id: todoList.length * 5,
      id: todoList.length,
      todoText: todoText,
      isDone: false,

};

todoList.push(todoObject);
// console.log(todoList);
displayTodos();

}

function doneTodo (todoId){
  //indexof object lerde kullanılmaz
  const selectedTodoIndex = todoList.findIndex(myTodo => myTodo.id==todoId);
  todoList[selectedTodoIndex].isDone = true;

displayTodos ();
}

function displayTodos(){

  document.querySelector('#myInput').value= "";

  todoListElement.innerHTML = "";
  todoList.forEach(item=> {

     const listElement = document.createElement("li");
     listElement.innerHTML= item.todoText;
     listElement.setAttribute('data-id', item.id);

     if (item.isDone) {
      listElement.classList.add('checked'); 
     }
     listElement.addEventListener('click',function(e){
        const selectedId = e.target.getAttribute("data-id");
        doneTodo (selectedId);
     });

     todoListElement.appendChild(listElement);
 
  });
}

